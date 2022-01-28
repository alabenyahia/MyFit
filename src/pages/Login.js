import React, {useState} from 'react';
import "./css/Login.css";
import Typography from "@mui/material/Typography";
import {Card, CardContent, TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Login = () => {
    const [email, setEmail] = useState()
    const [pw, setPw] = useState()
    return (
        <div className="Login">
            <Card sx={{maxWidth: "500px", margin: "50px auto"}}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: "36px", fontWeight: "500"}} my={3} align="center">
                        Login
                    </Typography>
                    <form>
                        <TextField id="email"
                                   label="Email address" fullWidth
                                   sx={{marginBottom: "20px"}} value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <TextField id="password"
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
