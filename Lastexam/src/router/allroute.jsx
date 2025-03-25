import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../Home'
import Signup from '../signup'
const Allroute = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    return (

        <div>

            <Routes>
                <Route
                    path="/"
                    element={user ? <Home /> : <Navigate to="/signup" />}
                />
                <Route path="/signup" element={<Signup />} />
            </Routes>

        </div>

    )

}

export default Allroute