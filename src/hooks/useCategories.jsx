import axios from 'axios';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import axiosInstance from '../api/AxiosInstance';

export default function useCategories() {

    const getCategories = async () => {
            const response = await axiosInstance.get('/Categories');
            return response.data.response.data; // Return the categories data directly
    }


    const query = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        staleTime: 5 * 60 * 1000  // 5 minutes
    })

    return query; // {data, isLoading, isError, error}

}
