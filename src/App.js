import {useState} from "react";
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


function App() {
    const [user, setUser] = useState(null);

    return (
        <ThemeProvider theme={theme}>
            <UserContext.Provider value={{user, setUser}}>
                <div className="App">
                    <TopAppBar/>
                    <Register/>
                    {JSON.stringify(user, null, 2)}
                </div>
            </UserContext.Provider>
        </ThemeProvider>
    );
}

export default App;
