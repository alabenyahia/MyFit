import React, {useState} from 'react';
import {Card, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const EditFoodCard = ({id, name, quantity: foodQuantity, unit, protein, carb, fat, price}) => {
    const [quantity, setQuantity] = useState("")

    return (
        <div className="FoodCard">
            <Card sx={{maxWidth: "400px", margin: "20px"}}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: "24px", fontWeight: "500"}} my={3}>
                        {name}
                    </Typography>



                    <hr style={{margin: "30px 0", opacity: "0.35"}}/>
                    <form>

                            <TextField id="quantity" label={unit} variant="outlined"
                                       value={quantity} onChange={(e) => setQuantity(e.target.value)}
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
