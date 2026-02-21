import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from '../components/navbar/ResponsiveAppBar'

export default function MainLayout() {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer />
        </>
    )
}
