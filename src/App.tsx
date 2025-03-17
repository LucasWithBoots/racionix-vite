import { Route, Routes } from "react-router";
import Games from "./pages/Games";
import Header from "./components/navigation/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/games" element={<Games />} />
      </Routes>
    </>
  );
}

export default App;
