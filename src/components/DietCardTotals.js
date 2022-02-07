import React, {useState} from 'react';
import {Card, CardActions, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { doc, updateDoc } from "firebase/firestore";
import {firestore} from "../config/firebase";


const DietCardTotals = ({name: dietName, id, setFoods}) => {
    const [name, setName] = useState("")
    const [nameErr, setNameErr] = useState("")

    function validateData() {
        if (name.length=== 0) {
            setNameErr("Name should not be empty")
            return false
        }

        return true
    }

    function resetError() {
        setNameErr("")
    }

    function resetFields() {
        setName("")
    }

    async function handleRename() {
        resetError();
        if (validateData()) {

            const ref = doc(firestore, "diets", id);

            await updateDoc(ref, {
                name: name
            });
            resetFields()
        }
    }

    async function handleClear() {
        const ref = doc(firestore, "diets", id);
        await updateDoc(ref, {
            foods: []
        });
        setFoods([])
    }

    return (
        <div>
            <Card sx={{maxWidth: "600px", margin: "0 auto"}}>
                <CardContent>
                    <Typography variant="h3" sx={{fontSize: "24px", fontWeight: "500", margin: "16px 0"}} my={3}>
                        {dietName}
                    </Typography>

                    <hr style={{margin: "16px 0", opacity: "0.35"}}/>
                    <form>
                        <TextField id="name" label="Diet name" variant="outlined"
                                   error={nameErr.length>0}
                                   helperText={nameErr}
                                   value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
                    </form>
                    <CardActions sx={{paddingBottom: 0}}>
                        <Button size="small" onClick={handleRename}>Rename</Button>
                        <Button size="small" onClick={handleClear}>Clear diet</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
};

export default DietCardTotals;
