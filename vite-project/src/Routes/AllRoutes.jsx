import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import Login from '../Pages/Login';

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}
