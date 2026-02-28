import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../../validation/RegisterSchema';
import axios from 'axios';
import styles from "./RegisterAlt.module.css";

export default function Register() {

  const [serverError, setServerError] = useState([]);

  const { register, handleSubmit, formState: { errors , isSubmitting } } = useForm({
    resolver: yupResolver(registerSchema), mode: 'onBlur'
  });

  const registerForm = async (values) => {
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', values);
      console.log("Register successful:", response);
    }

    catch (err) {
      console.log("Server error:", err.response?.data);
      setServerError(err.response.data.errors);
    }

  }


  return (
    <Box className={styles.page} component="section" py={5} mt={5} >
      <Box className={styles.card}>

        <Typography variant="h4" component="h1" gutterBottom >Register</Typography>

        {serverError && serverError.length > 0 && (
          <Box mt={2} color={'red'}>
            {serverError.map((error, index) => (<Typography key={index} variant="body1">{error}</Typography>
            ))}
          </Box>
        )}

        <Box sx={{ width: 500, maxWidth: '100%' }} component="form" display="flex"
          onSubmit={handleSubmit(registerForm)}
          flexDirection="column" gap={2} maxWidth={400} mt={3}>

          <TextField {...register("username")} fullWidth label="Username" id="username" error={!!errors.username} helperText={errors.username?.message} />

          <TextField {...register("fullName")} fullWidth label="Full Name" id="fullName" error={!!errors.fullName} helperText={errors.fullName?.message} />

          <TextField {...register("email")} fullWidth label="Email" id="email" error={!!errors.email} helperText={errors.email?.message} />

          <TextField {...register("password")} fullWidth label="Password" id="password" type="password" error={!!errors.password} helperText={errors.password?.message} />

          <TextField {...register("PhoneNumber")} fullWidth label="Phone Number" id="phone" error={!!errors.PhoneNumber} helperText={errors.PhoneNumber?.message} />

          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} >
            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Register"}
          </Button>
         
        </Box>

      </Box>

    </Box>

  )
}
