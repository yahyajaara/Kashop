import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance';

export default function useCart() {
  
    const getCartItems = async () => {

        const response = await authAxiosInstance.get('/Carts');
        return response.data;

    }

    const query = useQuery({
        queryKey: ['carts' , 'en'],
        queryFn: getCartItems,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    return query;

}



