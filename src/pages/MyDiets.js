import React, {useContext, useEffect, useState} from 'react';
import "./css/MyDiets.css"
import DietCard from "../components/DietCard";
import {UserContext} from "../context/UserContext";
import {Navigate} from "react-router-dom";
import CreateNewDiet from "../components/CreateNewDiet";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {firestore} from "../config/firebase";

const MyDiets = () => {

    const {user, setUser} = useContext(UserContext);
    const [diets, setDiets] = useState([])

    useEffect(() => {

        const q = query(collection(firestore, "diets"), where("user", "==", user.uid.toString()));
        return onSnapshot(q, (querySnapshot) => {
            const diets = [];
            querySnapshot.forEach((doc) => {
                diets.push(doc.data());
            });

            setDiets(diets)
            console.log("Current cities in CA: ", diets.join(", "));
        });


    },[])

    if (!user) return <Navigate to="/login" replace/>
    return (
        <div className="MyDiets">
            <div className="MyDiets__totals">
                <CreateNewDiet/>
            </div>
            <div className="MyDiets__DietCards">
                {diets.map((diet) => <DietCard {...diet}/>)}
            </div>
        </div>
    );
};

export default MyDiets;
