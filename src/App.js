import './App.css';
import TopAppBar from "./components/TopAppBar";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme"
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddFood from "./pages/AddFood";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <TopAppBar/>
                <AddFood/>
            </div>
        </ThemeProvider>
    );
}

export default App;
