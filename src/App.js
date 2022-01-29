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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <TopAppBar/>
                <DietCardTotals/>
            </div>
        </ThemeProvider>
    );
}

export default App;
