import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

const Allroute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default Allroute