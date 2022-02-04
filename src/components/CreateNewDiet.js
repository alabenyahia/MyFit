import React, {useContext, useState} from 'react';
import {Card, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {addDoc, collection} from "firebase/firestore";
import {firestore} from "../config/firebase";
import {UserContext} from "../context/UserContext";

const CreateNewDiet = () => {
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [loading, setLoading] = useState(false)

    const { user, setUser } = useContext(UserContext);

    function validateData() {
        if (name.length===0) {
            setNameErr("Name must not be empty")
            return false;
        }

        return true;
    }

    function resetErrors() {
        setNameErr("")
    }

    function resetValues() {
        setName("")
    }

    async function handleDietCreation(e) {
        console.log("ddddd")
        e.preventDefault();
        resetErrors()
        if (validateData()) {
            setLoading(true)
            await addDoc(collection(firestore, "diets"), {name, user: user?.uid, dietfood: []});
            setLoading(false)
            resetValues()
        }
    }
    return (
        <div>
            <Card sx={{maxWidth: "600px", margin: "0 auto"}}>
                <CardContent>
                    <Typography variant="h3" sx={{fontSize: "24px", fontWeight: "500", margin: "16px 0"}} my={3}>
                        Create new diet
                    </Typography>

                    <form onSubmit={handleDietCreation}>
                        <TextField id="name" label="Diet name" variant="outlined"
                                   error={nameErr.length>0}
                                   helperText={nameErr}
                                   value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
                        <Button variant="contained" type="submit" fullWidth
                                disabled={loading}
                                sx={{marginTop: "20px", marginBottom: "8px"}}>Create</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateNewDiet;
