import { Box, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useCategories from '../hooks/useCategories';

export default function Categories() {

    const {data , isLoading , isError, error} = useCategories();



    if (isLoading) {return <CircularProgress />;}

    if (isError) {return <Typography color="error">{error.message}</Typography>;}


    return (
        <Box>{data.map(category => <Box key={category.id}> {category.name} </Box>)}</Box>
    )
}
