import { Box, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Categories() {

    const [categories, setCategories] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
   

    const getCategories = async () => {
        try {
            const response = await axios.get('https://Knowledgeshop.runasp.net/api/Categories');
            console.log( response);
            setCategories(response.data.response.data);
        }
        catch (err) {
            setError(err.message || "An error occurred while fetching categories.");
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
    }, [])




    

    if (isLoading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }
    return (
        <Box>{categories.map(category => <Box key={category.id}> {category.name} {category.id} </Box>)}</Box>
    )
}
