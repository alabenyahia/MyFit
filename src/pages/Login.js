import React, {useContext, useState} from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardContent, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../config/firebase";
import {UserContext} from "../context/UserContext";

const Login = () => {
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")

    const [emailErr, setEmailErr] = useState("")
    const [pwErr, setPwErr] = useState("")

    const { user, setUser } = useContext(UserContext);


    function resetErrors() {
        setEmailErr("")
        setPwErr("")
    }

    function resetFields() {
        setEmail("")
        setPw("")
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

        return true
    }

    function handleLogin(e) {
        e.preventDefault();
        resetErrors()
        if (isDataValid()) {
            signInWithEmailAndPassword(auth, email, pw)
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
    return (
        <div className="Login">
            <Card sx={{maxWidth: "500px", margin: "50px auto"}}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: "36px", fontWeight: "500"}} my={3} align="center">
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
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
                                   value={pw}
                                   type="password"
                                   onChange={(e) => setPw(e.target.value)}/>

                        <Button variant="contained" type="submit" fullWidth
                                sx={{marginTop: "24px", marginBottom: "8px"}}>Login</Button>
                        <Typography variant="p" sx={{fontSize: "12px", fontWeight: "400"}}>
                            Not a member?<span style={{color: "#0090DC"}}> Register now!</span>
                        </Typography>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
