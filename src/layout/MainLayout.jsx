import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from '../components/navbar/ResponsiveAppBar'
import { Container } from '@mui/material'

export default function MainLayout() {
    return (
        <>
            <Navbar />

            <Container maxWidth="sm">
                <Outlet />
            </Container>

            <Footer />
        </>
    )
}
