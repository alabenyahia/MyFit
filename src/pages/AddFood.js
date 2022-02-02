import React, {useContext, useState} from 'react';
import "./css/AddFood.css"
import {Card, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {UserContext} from "../context/UserContext";
import {Navigate} from "react-router-dom";

const AddFood = () => {
    const [name, setName] = useState("")
    const [qty, setQty] = useState("")
    const [unit, setUnit] = useState("")
    const [carb, setCarb] = useState("")
    const [protein, setProtein] = useState("")
    const [fat, setFat] = useState("")
    const [price, setPrice] = useState("")
    const [imgUrl, setImgUrl] = useState("")

    const { user, setUser } = useContext(UserContext);

    if (!user) return <Navigate to="/login" replace />
    return (
        <div className="AddFood">
            <Card sx={{maxWidth: "950px", margin: "50px auto"}}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: "36px", fontWeight: "500"}} my={3} align="center">
                        Add food to your database
                    </Typography>
                    <form>
                        <TextField id="name"
                                   label="Name"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", marginRight: "2%", width: "49%"}} value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                        <TextField id="qty"
                                   label="Quantity"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", width: "49%"}} value={qty}
                                   onChange={(e) => setQty(e.target.value)}/>

                        <TextField id="unit"
                                   label="Unit"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", marginRight: "2%", width: "49%"}} value={unit}
                                   onChange={(e) => setUnit(e.target.value)}/>
                        <TextField id="carb"
                                   label="Carb"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", width: "49%"}} value={carb}
                                   onChange={(e) => setCarb(e.target.value)}/>

                        <TextField id="protein"
                                   label="Protein"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", marginRight: "2%", width: "49%"}} value={protein}
                                   onChange={(e) => setProtein(e.target.value)}/>
                        <TextField id="fat"
                                   label="Fat"
                                   className="AddFood__textfields"
                                   sx={{marginBottom: "20px", width: "49%"}} value={fat}
                                   onChange={(e) => setFat(e.target.value)}/>

                        <TextField id="price"
                                   label="Price"
                                   className="AddFood__textfields"
                                   sx={{marginRight: "2%", width: "49%"}} value={price}
                                   onChange={(e) => setPrice(e.target.value)}/>
                        <TextField id="imgurl"
                                   label="Image URL"
                                   className="AddFood__textfields"
                                   sx={{width: "49%"}} value={imgUrl}
                                   onChange={(e) => setImgUrl(e.target.value)}/>
                        <Box textAlign='center'>
                            <Button variant="contained" type="submit"
                                    sx={{marginTop: "24px", marginBottom: "8px", width: "49%"}}>Add</Button>

                        </Box>

                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddFood;
