import React, {useContext} from 'react';
import "./css/Home.css";
import FoodCard from "../components/FoodCard";
import {UserContext} from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Home = () => {
    const { user, setUser } = useContext(UserContext);

    if (!user) return <Navigate to="/login" replace />
    return (
    <div className="Home">
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
    </div>
    );

};

export default Home;
