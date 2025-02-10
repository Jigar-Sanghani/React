import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Assign from "../pages/Assign";
import Home from "../pages/Home";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assign" element={<Assign />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
};

export default AllRoutes; 