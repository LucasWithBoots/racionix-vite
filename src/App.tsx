import { Route, Routes } from "react-router";
import Games from "./pages/Games";
import Header from "./components/navigation/Header";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/games" element={<Games />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
