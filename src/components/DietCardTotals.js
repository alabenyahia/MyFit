import React, {useState} from 'react';
import {Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const DietCardTotals = () => {
    const [name, setName] = useState("")
    return (
        <div>
            <Card sx={{maxWidth: "600px", margin: "0 auto"}}>
                <CardContent>
                    <Typography variant="h3" sx={{fontSize: "24px", fontWeight: "500", margin: "16px 0"}} my={3}>
                        Diet's name totals
                    </Typography>

                    <div>
                        <ul>
                            <li>proteins: 18.5g</li>
                            <li>carbs: 73.12g</li>
                            <li>fats: 8g</li>
                        </ul>
                    </div>
                    <hr style={{margin: "10px 0", opacity: "0.35"}}/>
                    <p style={{paddingLeft: "24px"}}>Price: 2890 millimes</p>
                    <hr style={{margin: "16px 0", opacity: "0.35"}}/>
                    <form>
                        <TextField id="name" label="Diet name" variant="outlined"
                                   value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
                    </form>
                    <CardActions sx={{paddingBottom: 0}}>
                        <Button size="small">Rename</Button>
                        <Button size="small">Clear diet</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
};

export default DietCardTotals;
