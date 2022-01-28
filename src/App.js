import './App.css';
import TopAppBar from "./components/TopAppBar";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme"
import Login from "./pages/Login";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <TopAppBar/>
                <Login/>
            </div>
        </ThemeProvider>
    );
}

export default App;
