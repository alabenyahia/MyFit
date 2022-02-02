import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddFood from "../pages/AddFood";
import MyDiets from "../pages/MyDiets";

const Routing = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/addfood' element={<AddFood/>}/>
            <Route path='/mydiets' element={<MyDiets/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
};

export default Routing;
