import React, {useContext, useState} from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardContent, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../config/firebase";
import {UserContext} from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")

    const [emailErr, setEmailErr] = useState("")
    const [pwErr, setPwErr] = useState("")

    const [loginErr, setLoginErr] = useState("")


    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate()


    function resetErrors() {
        setEmailErr("")
        setPwErr("")
        setLoginErr("")
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
                    if (error.code === 'auth/user-not-found') {
                        setLoginErr("User not found")
                    }
                    if (error.code === 'auth/wrong-password') {
                        setLoginErr("Wrong password")
                    }

                });

            resetFields()
        }
    }

    if (user) navigate('/')
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
                        {
                            loginErr.length>0 &&
                            <Typography variant="body1" component="p" align="center" sx={{marginTop: "20px", color:"#d32f2f"}}>{loginErr}</Typography>
                        }


                        <Button variant="contained" type="submit" fullWidth
                                sx={{marginTop: "20px", marginBottom: "8px"}}>Login</Button>
                        <Typography variant="p" sx={{fontSize: "12px", fontWeight: "400"}}>
                            Not a member?<span style={{color: "#0090DC", cursor: "pointer"}}
                                               onClick={() => navigate('/register')}> Register now!</span>
                        </Typography>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
