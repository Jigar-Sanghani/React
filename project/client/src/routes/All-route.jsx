import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Assign from "../pages/Assign";
import Home from "../pages/Home";
import Pagenotfound from "../pages/Pagenotfound";
import Private from "./Private";
import { Ability } from "../role/Ability";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Private>
                            <Home />
                        </Private>
                    }
                />
                {Ability(["admin"]) ? (
                    <Route
                        path="/assign"
                        element={
                            <Private>
                                <Assign />
                            </Private>
                        }
                    />
                ) : null}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Pagenotfound />} />
            </Routes>
        </div>
    );
};

export default AllRoutes; 