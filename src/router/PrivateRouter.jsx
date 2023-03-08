import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRouter = () => {
    const user = sessionStorage.getItem("user") || false
  
    return user ? <Outlet/> : <Navigate to="./login" />
}

export default PrivateRouter