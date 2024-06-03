import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const Auth = () => {
    let token = localStorage.getItem('data')
    return token ? <Outlet /> : <Navigate to="/login" /> 
}