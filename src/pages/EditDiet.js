import React, {useContext, useEffect, useState} from 'react';
import "./css/EditDiet.css"
import DietCardTotals from "../components/DietCardTotals";
import EditFoodCard from "../components/EditFoodCard";
import {UserContext} from "../context/UserContext";
import {Navigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {firestore} from "../config/firebase";


const EditDiet = () => {

    const { user, setUser } = useContext(UserContext);
    const {id} = useParams();

    const [diet, setDiet] = useState([])
    const [foods, setFoods] = useState([])

    useEffect(() => {

        const q = query(collection(firestore, "diets"), where("__name__", "==", id));
        return onSnapshot(q, (querySnapshot) => {
            const diet1 = [];
            querySnapshot.forEach((doc) => {
                diet1.push({id: doc.id, ...doc.data()});
            });

            setDiet(diet1)
        });

    },[])

    useEffect(() => {
        if (diet.length===0 || !diet[0].foods || diet[0].foods?.length===0) return
        const q = query(collection(firestore, "foods"), where("__name__", "in", diet[0].foods?.map((food => food.id))));
        return onSnapshot(q, (querySnapshot) => {
            const foods1 = [];
            querySnapshot.forEach((doc) => {
                foods1.push({id: doc.id, ...doc.data()});
            });

            setFoods(foods1)
        });
    }, [diet])

    function searchForQuantity(id) {
        const dt = diet[0].foods.find((diet) => id===diet.id)
        return dt?.quantity;
    }

    if (!user) return <Navigate to="/login" replace />
    return (
        <div className="EditDiet">
            <div className="EditDiet__totals">
                <DietCardTotals name={diet[0]?.name} id={id} setFoods={setFoods}/>
            </div>
            <div className="EditDiet__FoodCards">
                {foods.map((food) => <EditFoodCard {...food} qty={searchForQuantity(food.id)} dietId={id}/>)}
            </div>
        </div>
    );
};

export default EditDiet;
