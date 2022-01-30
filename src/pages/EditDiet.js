import React from 'react';
import "./css/EditDiet.css"
import DietCardTotals from "../components/DietCardTotals";
import EditFoodCard from "../components/EditFoodCard";

const EditDiet = () => {
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
