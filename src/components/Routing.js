import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddFood from "../pages/AddFood";
import MyDiets from "../pages/MyDiets";
import EditDiet from "../pages/EditDiet";

const Routing = () => {
    return (
        <Routes>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='/register' exact element={<Register/>}/>
            <Route path='/addfood' exact element={<AddFood/>}/>
            <Route path='/mydiets' exact element={<MyDiets/>}/>
            <Route path='/editdiet/:id' exact element={<EditDiet/>}/>
            <Route path="/" exact element={<Home/>}/>
        </Routes>
    );
};

export default Routing;
