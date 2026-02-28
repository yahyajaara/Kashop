import React, { Component } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


export default class D extends Component {
  render() {

    const queryClient = new QueryClient();

    return (

      <QueryClientProvider client={queryClient}>

        <RouterProvider router={router} />

      </QueryClientProvider>

    )
  }
}
