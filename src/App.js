import './App.css';
import TopAppBar from "./components/TopAppBar";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <TopAppBar/>
            </div>
        </ThemeProvider>
    );
}

export default App;
