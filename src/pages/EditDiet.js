import React, {useContext} from 'react';
import "./css/EditDiet.css"
import DietCardTotals from "../components/DietCardTotals";
import EditFoodCard from "../components/EditFoodCard";
import {UserContext} from "../context/UserContext";
import {Navigate} from "react-router-dom";

const EditDiet = () => {

    const { user, setUser } = useContext(UserContext);

    if (!user) return <Navigate to="/login" replace />
    return (
        <div className="EditDiet">
            <div className="EditDiet__totals">
                <DietCardTotals/>
            </div>
            <div className="EditDiet__FoodCards">
                <EditFoodCard/>
                <EditFoodCard/>
                <EditFoodCard/>
                <EditFoodCard/>
                <EditFoodCard/>
                <EditFoodCard/>
                <EditFoodCard/>
                <EditFoodCard/>
                <EditFoodCard/>
            </div>
        </div>
    );
};

export default EditDiet;
