import { NavLink } from "react-router";

export default function HeaderNavigation() {
    return (
        <nav className="bg-black flex justify-between h-17 items-center">
            <NavLink to="/games" end className="header-item">
                Jogos
            </NavLink>
            <NavLink to="/login" end className="header-item">
                Login/Registro
            </NavLink>
            <NavLink to="/leaderboard" end className="header-item">
                Placar
            </NavLink>
        </nav>
    );
}
