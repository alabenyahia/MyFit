import React from 'react';
import "./css/Home.css";
import FoodCard from "../components/FoodCard";

const Home = () => {
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
