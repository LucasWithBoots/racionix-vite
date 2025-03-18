import { Route, Routes } from "react-router";
import Games from "./pages/Games";
import Header from "./components/navigation/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Register from "./pages/Register";
import Sudoku from "./pages/games/Sudoku";
import Minesweeper from "./pages/games/Minesweeper";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/games/sudoku" element={<Sudoku />} />
                <Route path="/games/minesweeper" element={<Minesweeper />} />
            </Routes>
        </>
    );
}

export default App;
