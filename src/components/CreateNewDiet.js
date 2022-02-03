import React, {useState} from 'react';
import {Card, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CreateNewDiet = () => {
    const [name, setName] = useState();
    return (
        <div>
            <Card sx={{maxWidth: "600px", margin: "0 auto"}}>
                <CardContent>
                    <Typography variant="h3" sx={{fontSize: "24px", fontWeight: "500", margin: "16px 0"}} my={3}>
                        Create new diet
                    </Typography>

                    <form>
                        <TextField id="name" label="Diet name" variant="outlined"
                                   value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
                    </form>
                    <Button variant="contained" type="submit" fullWidth
                            sx={{marginTop: "20px", marginBottom: "8px"}}>Create</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateNewDiet;
