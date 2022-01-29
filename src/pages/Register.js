import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardContent, TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Register = () => {
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [pw2, setPw2] = useState("")
    return (
        <div className="Register">
            <Card sx={{maxWidth: "500px", margin: "50px auto"}}>
                <CardContent>
                    <Typography variant="h2" sx={{fontSize: "36px", fontWeight: "500"}} my={3} align="center">
                        Register
                    </Typography>
                    <form>
                        <TextField id="email"
                                   label="Email address" fullWidth
                                   sx={{marginBottom: "20px"}} value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        <TextField id="password"
                                   label="Password" fullWidth
                                   sx={{marginBottom: "20px"}} value={pw}
                                   type="password"
                                   onChange={(e) => setPw(e.target.value)}/>

                        <TextField id="password2"
                                   label="Repeat password" fullWidth
                                   value={pw}
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
