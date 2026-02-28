import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, CircularProgress, Typography, Link } from '@mui/material';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../validation/LoginSchema';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import './Login.css';

export default function Login() {

  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur'
  });

  const loginForm = async (values) => {
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', values);
      console.log("Login successful:", response);
      if(response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
      }
    }
    
    catch (err) {
      console.log("Server error:", err.response?.data);
      const errorMessage = err.response?.data?.message || "Login failed. Please try again.";
      setServerError(errorMessage);
    }
  }

  return (
    <Box className="page" component="section" py={5} mt={5}>
      <Box className="card">

        <Typography variant="h4" component="h1" gutterBottom>Login</Typography>

        {serverError && (
          <Box className="errorBox" sx={{ 
            p: 2, 
            backgroundColor: '#fee2e2', 
            border: '1px solid #fca5a5', 
            borderRadius: '4px',
            mb: 2
          }}>
            <Typography variant="body2" sx={{ color: '#991b1b' }}>
              {serverError}
            </Typography>
            {serverError.toLowerCase().includes('email') && (
              <Typography variant="caption" sx={{ color: '#991b1b', mt: 1, display: 'block' }}>
                Please check your email for the verification link. If you didn't receive it, check your spam folder.
              </Typography>
            )}
          </Box>
        )}

        <Box sx={{ width: 500, maxWidth: '100%' }} component="form" display="flex"
          onSubmit={handleSubmit(loginForm)}
          flexDirection="column" gap={2} maxWidth={400} mt={3}>

          <TextField 
            {...register("email")} 
            fullWidth 
            label="Email" 
            id="email" 
            type="email"
            error={!!errors.email} 
            helperText={errors.email?.message} 
          />

          <TextField 
            {...register("password")} 
            fullWidth 
            label="Password" 
            id="password" 
            type="password" 
            error={!!errors.password} 
            helperText={errors.password?.message} 
          />

          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            disabled={isSubmitting}
            sx={{ textTransform: 'none', fontSize: '16px' }}
          >
            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>

        </Box>

        <Box className="note">
          Don't have an account?{' '}
          <Link 
            component={RouterLink} 
            to="/register"
            sx={{ color: '#60a5fa', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            Register here
          </Link>
        </Box>

      </Box>

    </Box>

  )
}
