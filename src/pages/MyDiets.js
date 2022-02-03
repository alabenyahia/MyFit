import React, {useContext} from 'react';
import "./css/MyDiets.css"
import DietCard from "../components/DietCard";
import {UserContext} from "../context/UserContext";
import {Navigate} from "react-router-dom";
import DietCardTotals from "../components/DietCardTotals";
import CreateNewDiet from "../components/CreateNewDiet";

const MyDiets = () => {

    const {user, setUser} = useContext(UserContext);

    if (!user) return <Navigate to="/login" replace/>
    return (
        <div className="MyDiets">
            <div className="MyDiets__totals">
                <CreateNewDiet/>
            </div>
            <div className="MyDiets__DietCards">
                <DietCard/>
                <DietCard/>
                <DietCard/>
                <DietCard/>
                <DietCard/>
                <DietCard/>
                <DietCard/>
                <DietCard/>
                <DietCard/>
                <DietCard/>
                <DietCard/>
                <DietCard/>
            </div>
        </div>
    );
};

export default MyDiets;
