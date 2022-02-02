import {useEffect, useState} from "react";
import './App.css';
import TopAppBar from "./components/TopAppBar";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme"
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddFood from "./pages/AddFood";
import FoodCard from "./components/FoodCard";
import DietCard from "./components/DietCard";
import Home from "./pages/Home";
import MyDiets from "./pages/MyDiets";
import EditFoodCard from "./components/EditFoodCard";
import DietCardTotals from "./components/DietCardTotals";
import EditDiet from "./pages/EditDiet";
import "./config/firebase"
import {UserContext} from "./context/UserContext";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./config/firebase";
import {BrowserRouter as Router} from "react-router-dom"
import Routing from "./components/Routing";


function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
            }
        });
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <UserContext.Provider value={{user, setUser}}>
                <Router>
                    <div className="App">
                        <TopAppBar/>
                        <Routing/>
                        {JSON.stringify(user, null, 2)}
                    </div>
                </Router>
            </UserContext.Provider>
        </ThemeProvider>
    );
}

export default App;
