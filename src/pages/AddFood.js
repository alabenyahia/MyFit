import React, {useContext, useState} from 'react';
import "./css/AddFood.css"
import {Card, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {UserContext} from "../context/UserContext";
import {Navigate} from "react-router-dom";
import {firestore} from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";


const AddFood = () => {
    const [name, setName] = useState("")
    const [qty, setQty] = useState("")
    const [unit, setUnit] = useState("")
    const [carb, setCarb] = useState("")
    const [protein, setProtein] = useState("")
    const [fat, setFat] = useState("")
    const [price, setPrice] = useState("")

    const [nameErr, setNameErr] = useState("")
    const [qtyErr, setQtyErr] = useState("")
    const [unitErr, setUnitErr] = useState("")
    const [carbErr, setCarbErr] = useState("")
    const [proteinErr, setProteinErr] = useState("")
    const [fatErr, setFatErr] = useState("")
    const [priceErr, setPriceErr] = useState("")
    const [loading, setLoading] = useState(false)

    const { user, setUser } = useContext(UserContext);

    if (!user) return <Navigate to="/login" replace />

    function resetErrors() {
        setNameErr("")
        setQtyErr("")
        setUnitErr("")
        setCarbErr("")
        setProteinErr("")
        setFatErr("")
        setPriceErr("")
    }

    function resetValues() {
        setName("")
        setQty("")
        setUnit("")
        setCarb("")
        setProtein("")
        setFat("")
        setPrice("")
    }

    function validateData() {
        if (name.length===0) {
            setNameErr("Name shouldn't be empty")
            return false;
        }
        if (qty.length===0) {
            setQtyErr("Quantity shouldn't be empty")
            return false;
        }
        if (unit.length===0) {
            setUnitErr("Unit shouldn't be empty")
            return false;
        }
        if (carb.length===0) {
            setCarbErr("Carb shouldn't be empty")
            return false;
        }
        if (protein.length===0) {
            setProteinErr("Protein shouldn't be empty")
            return false;
        }
        if (fat.length===0) {
            setFatErr("Fat shouldn't be empty")
            return false;
        }
        if (price.length===0) {
            setPriceErr("Price shouldn't be empty")
            return false;
        }

        return true;
    }

    async function handleAddFood(e) {
        e.preventDefault();
        resetErrors()
        if (validateData()) {
            const data = {name, quantity: parseFloat(qty), unit, carb: parseFloat(carb),
                protein: parseFloat(protein), fat: parseFloat(fat), price: parseFloat(price), user: user.uid}
            setLoading(true)
            await addDoc(collection(firestore, "foods"), data);
            setLoading(false)
            resetValues()
        }

    }
    return (
        <div className="AddFood">
            <Card sx={{maxWidth: "950px", margin: "50px auto"}}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: "36px", fontWeight: "500"}} my={3} align="center">
                        Add food to your database
                    </Typography>
                    <form onSubmit={handleAddFood}>
                        <TextField id="name"
                                   error={nameErr.length>0}
                                   helperText={nameErr}
                                   label="Name"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", marginRight: "2%", width: "49%"}} value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                        <TextField id="qty"
                                   error={qtyErr.length>0}
                                   helperText={qtyErr}
                                   label="Quantity"
                                   type="number"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", width: "49%"}} value={qty}
                                   onChange={(e) => setQty(e.target.value)}/>

                        <TextField id="unit"
                                   error={unitErr.length>0}
                                   helperText={unitErr}
                                   label="Unit"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", marginRight: "2%", width: "49%"}} value={unit}
                                   onChange={(e) => setUnit(e.target.value)}/>
                        <TextField id="carb"
                                   error={carbErr.length>0}
                                   helperText={carbErr}
                                   label="Carb"
                                   type="number"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", width: "49%"}} value={carb}
                                   onChange={(e) => setCarb(e.target.value)}/>

                        <TextField id="protein"
                                   error={proteinErr.length>0}
                                   helperText={proteinErr}
                                   label="Protein"
                                   type="number"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", marginRight: "2%", width: "49%"}} value={protein}
                                   onChange={(e) => setProtein(e.target.value)}/>
                        <TextField id="fat"
                                   error={fatErr.length>0}
                                   helperText={fatErr}
                                   label="Fat"
                                   type="number"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", width: "49%"}} value={fat}
                                   onChange={(e) => setFat(e.target.value)}/>

                        <TextField id="price"
                                   error={priceErr.length>0}
                                   helperText={priceErr}
                                   label="Price"
                                   type="number"
                                   className="AddFood__textfields"
                                   sx={{marginRight: "2%", width: "49%"}} value={price}
                                   onChange={(e) => setPrice(e.target.value)}/>

                        <Box textAlign='center'>
                            <Button variant="contained" type="submit" disabled={loading}
                                    sx={{marginTop: "24px", marginBottom: "8px", width: "49%"}}>Add</Button>

                        </Box>

                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddFood;
