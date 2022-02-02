import React, {useContext, useState} from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardContent, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../config/firebase";
import {UserContext} from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [pw2, setPw2] = useState("")

    const [emailErr, setEmailErr] = useState("")
    const [pwErr, setPwErr] = useState("")
    const [pw2Err, setPw2Err] = useState("")

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate()

    function resetErrors() {
        setEmailErr("")
        setPwErr("")
        setPw2Err("")
    }
    function resetFields() {
        setEmail("")
        setPw("")
        setPw2("")
    }

    function isDataValid() {
        if  (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailErr("Email is invalid");
            return false;
        }

        if (pw.length < 6 ) {
            setPwErr("Password length must be more than 5")
            return false;
        }
        if (pw2.length < 6) {
            setPw2Err("Password validation length must be more than 5")
            return false;
        }

        if (pw !== pw2) {
            setPwErr("Passwords don't match")
            return false;
        }

        return true
    }

    function handleRegister(e) {
        e.preventDefault();
        resetErrors()
        if (isDataValid()) {

            createUserWithEmailAndPassword(auth, email, pw)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user)
                    console.log("dooone")
                })
                .catch((error) => {
                    console.log(error.code, error.message)
                });

            resetFields()
        }
    }

    if (user) navigate('/')
    return (
        <div className="Register">
            <Card sx={{maxWidth: "500px", margin: "50px auto"}}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: "36px", fontWeight: "500"}} my={3} align="center">
                        Register
                    </Typography>
                    <form onSubmit={handleRegister}>
                        <TextField id="email"
                                   error={emailErr.length>0}
                                   helperText={emailErr}
                                   label="Email address" fullWidth
                                   sx={{marginBottom: "20px"}} value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        <TextField id="password"
                                   error={pwErr.length>0}
                                   helperText={pwErr}
                                   label="Password" fullWidth
                                   sx={{marginBottom: "20px"}} value={pw}
                                   type="password"
                                   onChange={(e) => setPw(e.target.value)}/>

                        <TextField id="password2"
                                   error={pw2Err.length>0}
                                   helperText={pw2Err}
                                   label="Repeat password" fullWidth
                                   value={pw2}
                                   type="password"
                                   onChange={(e) => setPw2(e.target.value)}/>

                        <Button variant="contained" type="submit" fullWidth
                                sx={{marginTop: "24px", marginBottom: "8px"}}>Register</Button>
                        <Typography variant="p" sx={{fontSize: "12px", fontWeight: "400"}}>
                            Already a member?<span style={{color: "#0090DC"}}> Login</span>
                        </Typography>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;
