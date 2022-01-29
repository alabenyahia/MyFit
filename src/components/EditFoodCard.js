import React, {useState} from 'react';
import {Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const EditFoodCard = () => {
    const [unit, setUnit] = useState("")

    return (
        <div className="FoodCard">
            <Card sx={{maxWidth: "400px", margin: "0 auto"}}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: "24px", fontWeight: "500"}} my={3}>
                        Boiled sweet potatoes
                    </Typography>


                    <div style={{margin: "0 20px"}}>
                        <Typography variant="h4" sx={{fontSize: "18px", fontWeight: "500",
                            color: "rgba(0, 0, 0, 0.5)", marginBottom: "12px"}}
                                    my={3}>
                            Nutrients per 100g
                        </Typography>
                        <ul>
                            <li>proteins: 18.5g</li>
                            <li>carbs: 73.12g</li>
                            <li>fats: 8g</li>
                            <li>price: 2360 millimes</li>
                        </ul>

                        <Typography variant="h4" sx={{fontSize: "18px", fontWeight: "500",
                            color: "rgba(0, 0, 0, 0.5)", marginBottom: "12px"}}
                                    my={3}>
                            Price per 1g
                        </Typography>
                        <ul>
                            <li>proteins: 433.33 millimes</li>
                            <li>carbs: 122.90 millimes</li>
                            <li>fats: 20.12 millimes</li>
                        </ul>
                    </div>
                    <hr style={{margin: "30px 0", opacity: "0.35"}}/>
                    <form>

                            <TextField id="unit" label="Grammes" variant="outlined"
                                       value={unit} onChange={(e) => setUnit(e.target.value)}
                                       fullWidth/>


                    <Box>
                        <Button variant="contained" type="submit"
                                sx={{marginTop: "24px", marginBottom: "8px", width: "49%",
                                marginRight: "2%"}}>Edit</Button>

                        <Button variant="outlined" type="submit"
                                sx={{marginTop: "24px", marginBottom: "8px", width: "49%"}}>Remove</Button>
                    </Box>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default EditFoodCard;
