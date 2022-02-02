import React, {useContext} from 'react';
import "./css/MyDiets.css"
import DietCard from "../components/DietCard";
import {UserContext} from "../context/UserContext";
import {Navigate} from "react-router-dom";

const MyDiets = () => {

    const { user, setUser } = useContext(UserContext);

    if (!user) return <Navigate to="/login" replace />
    return (
        <div className="MyDiets">
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
    );
};

export default MyDiets;
