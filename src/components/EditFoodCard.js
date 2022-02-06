import React, {useState} from 'react';
import {Card, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import {firestore} from "../config/firebase";

const EditFoodCard = ({id, dietId, name, quantity: foodQuantity, unit, protein, carb, fat, price, qty}) => {
    const [quantity, setQuantity] = useState("")
    const [quantityErr, setQuantityErr] = useState("")

    function validateData() {
        if (quantity.length===0) {
            setQuantityErr("Quantity should not be empty");
            return false;
        }
        return true;
    }

    function resetErrors() {
        setQuantityErr("")
    }
    function resetFields() {
        setQuantity("")
    }
    async function handleEdit() {
        resetErrors()
        if (validateData()) {
            const docRef = doc(firestore, "diets", dietId);
            const docSnap = await getDoc(docRef);
            const dt = docSnap.data().foods
            dt[dt.findIndex((food) => food.id===id)].quantity = parseFloat(quantity)

            const ref = doc(firestore, "diets", dietId);
            await updateDoc(ref, {
                foods: dt
            });
            resetFields()
        }

    }

    async function handleRemove() {

        const docRef = doc(firestore, "diets", dietId);
        const docSnap = await getDoc(docRef);
        const dt = docSnap.data().foods
        dt.splice(dt.findIndex((food) => food.id===id), 1)

        const ref = doc(firestore, "diets", dietId);
        await updateDoc(ref, {
            foods: dt
        });


    }



    return (
        <div className="FoodCard">
            <Card sx={{maxWidth: "400px", margin: "20px"}}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: "24px", fontWeight: "500"}} my={3}>
                        {name}
                    </Typography>



                    <hr style={{margin: "30px 0", opacity: "0.35"}}/>
                    <Typography variant="h4" sx={{fontSize: "16px", fontWeight: "500"}}>
                        You take {qty}{unit} of this.
                    </Typography>
                    <hr style={{margin: "30px 0", opacity: "0.35"}}/>


                            <TextField id="quantity" label={unit} variant="outlined"
                                       type="number" error={quantityErr.length>0}
                                       helperText={quantityErr}
                                       value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                       fullWidth/>


                    <Box>
                        <Button variant="contained" onClick={handleEdit}
                                sx={{marginTop: "24px", marginBottom: "8px", width: "49%",
                                marginRight: "2%"}}>Edit</Button>

                        <Button variant="outlined" onClick={handleRemove}
                                sx={{marginTop: "24px", marginBottom: "8px", width: "49%"}}>Remove</Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default EditFoodCard;
