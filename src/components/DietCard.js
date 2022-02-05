import React, {useEffect, useState} from 'react';
import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {firestore} from "../config/firebase";

const DietCard = ({name, foods: dietFoods}) => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        if (!dietFoods || dietFoods?.length===0) return
        const q = query(collection(firestore, "foods"), where("__name__", "in", dietFoods?.map((food => food.id))));
        return onSnapshot(q, (querySnapshot) => {
            const foods1 = [];
            querySnapshot.forEach((doc) => {
                foods1.push({id: doc.id, ...doc.data()});
            });

            setFoods(foods1)
        });
    }, [])

    function calculateNutrients() {
        const obj = {protein: 0, carb: 0, fat: 0, price: 0}
        if (foods.length===0) return obj
        foods?.forEach((food) => {
            const qty = findQuantity(food.id);
            obj.protein = obj.protein + ((food.protein/food.quantity)*qty)
            obj.carb = obj.carb + ((food.carb/food.quantity)*qty)
            obj.fat = obj.fat + ((food.fat/food.quantity)*qty)
            obj.price = obj.price + ((food.price/food.quantity)*qty)
        })

        obj.protein = parseFloat(obj.protein.toFixed(2))
        obj.carb = parseFloat(obj.carb.toFixed(2))
        obj.fat = parseFloat(obj.fat.toFixed(2))
        obj.price = parseFloat(obj.price.toFixed(2))
        return obj;
    }

    function findQuantity(id) {
        const found = dietFoods.find((food) => food.id===id)
        return found.quantity;
    }

    return (
        <div>
            <Card sx={{maxWidth: "280px", margin: "0 auto"}}>
                <CardContent>
                    <Typography variant="h3" sx={{fontSize: "24px", fontWeight: "500", margin: "16px 0"}} my={3}>
                        {name}
                    </Typography>

                    <div>
                        <ul>
                            <li>proteins: {calculateNutrients().protein}g</li>
                            <li>carbs: {calculateNutrients().carb}g</li>
                            <li>fats: {calculateNutrients().fat}g</li>
                        </ul>
                    </div>
                    <hr style={{margin: "10px 0", opacity: "0.35"}}/>
                    <p style={{paddingLeft: "24px"}}>Price: {calculateNutrients().price} millimes</p>
                    <hr style={{margin: "10px 0", opacity: "0.35"}}/>

                    <CardActions sx={{paddingBottom: 0}}>
                        <Button size="small">Edit</Button>
                        <Button size="small">Delete</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
};

export default DietCard;
