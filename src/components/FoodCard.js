import React, {useState} from 'react';
import {Card, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import {firestore} from "../config/firebase";


const FoodCard = ({id, name, quantity: foodQuantity, unit, protein, carb, fat, price, diets}) => {
    const [quantity, setQuantity] = useState("")
    const [quantityErr, setQuantityErr] = useState("")
    const [diet, setDiet] = useState("")
    const [dietErr, setDietErr] = useState("")
    const [loading, setLoading] = useState(false)



    function resetErrors() {
        setQuantityErr("")
        setDietErr("")
    }
    function validateData() {
        if (quantity.length===0) {
            setQuantityErr("Quantity must not be empty");
            return false;
        }

        if (diet.length===0) {
            setDietErr("Diet must not be empty");
            return false;
        }

        return true;
    }

    async function handleAddToDiet(e) {
        resetErrors()
        e.preventDefault();

        if (validateData()) {
            const ref = doc(firestore, "diets", diet);
            setLoading(true)
            await updateDoc(ref, {
                foods: arrayUnion({id, quantity})
            });
            setLoading(false)
        }
    }
    return (
        <div className="FoodCard">
            <Card sx={{maxWidth: "400px", margin: "0 auto"}}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: "24px", fontWeight: "500"}} my={3}>
                        {name}
                    </Typography>


                    <div style={{margin: "0 20px"}}>
                        <Typography variant="h4" sx={{fontSize: "18px", fontWeight: "500",
                            color: "rgba(0, 0, 0, 0.5)", marginBottom: "12px"}}
                                    my={3}>
                            Nutrients per {foodQuantity}{unit}
                        </Typography>
                        <ul>
                            <li>proteins: {protein}g</li>
                            <li>carbs: {carb}g</li>
                            <li>fats: {fat}g</li>
                            <li>price: 2360 millimes</li>
                        </ul>

                        <Typography variant="h4" sx={{fontSize: "18px", fontWeight: "500",
                            color: "rgba(0, 0, 0, 0.5)", marginBottom: "12px"}}
                                    my={3}>
                            Price per 1g
                        </Typography>
                        <ul>
                            <li>proteins: {(price/protein).toFixed(2)} millimes</li>
                            <li>carbs: {(price/carb).toFixed(2)} millimes</li>
                            <li>fats: {(price/fat).toFixed(2)} millimes</li>
                        </ul>
                    </div>
                    <hr style={{margin: "30px 0", opacity: "0.35"}}/>
                    <form onSubmit={handleAddToDiet}>
                        <Box>
                            <TextField id="unit" label="Grammes" variant="outlined" type="number"
                                       error={quantityErr.length>0}
                                       helperText={quantityErr}
                                       value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                       sx={{width: "49%", marginRight: "2%"}}/>

                            <FormControl sx={{width: "49%"}} error={dietErr.length>0}>
                                <InputLabel id="diet">Diet</InputLabel>
                                <Select
                                    labelId="diet-label"
                                    id="diet-select"
                                    value={diet}
                                    label="Diet"
                                    onChange={(e) => setDiet(e.target.value)}
                                >
                                    {diets?.map((diet) => <MenuItem value={diet.id}>{diet.name}</MenuItem>)}
                                </Select>
                                <FormHelperText>{dietErr}</FormHelperText>
                            </FormControl>
                        </Box>
                        <Button variant="contained" type="submit" fullWidth disabled={loading}
                                sx={{marginTop: "24px", marginBottom: "8px"}}>Add</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default FoodCard;
