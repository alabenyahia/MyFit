import React, {useContext, useEffect, useState} from 'react';
import "./css/Home.css";
import FoodCard from "../components/FoodCard";
import {UserContext} from "../context/UserContext";
import { Navigate } from "react-router-dom";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {firestore} from "../config/firebase";
import DietCard from "../components/DietCard";

const Home = () => {
    const { user, setUser } = useContext(UserContext);
    const [foods, setFoods] = useState([])
    const [diets, setDiets] = useState([])

    useEffect(() => {

        const q = query(collection(firestore, "foods"), where("user", "==", user?.uid.toString()));
        return onSnapshot(q, (querySnapshot) => {
            const foods = [];
            querySnapshot.forEach((doc) => {
                foods.push({id: doc.id, ...doc.data()});
            });

            setFoods(foods)
        });

    },[])

    useEffect(() => {
        const q = query(collection(firestore, "diets"), where("user", "==", user?.uid.toString()));
        return onSnapshot(q, (querySnapshot) => {
            const diets = [];
            querySnapshot.forEach((doc) => {
                diets.push({id: doc.id, ...doc.data()});
            });

            setDiets(diets)
            console.log("Current cities in CA: ", diets);
        });
    }, [])

    if (!user) return <Navigate to="/login" replace />
    return (
    <div className="Home">
        {foods.map((food) => <FoodCard {...food} diets={diets}/>)}
    </div>
    );

};

export default Home;
