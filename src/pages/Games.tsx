import GameButton from "../components/GameButton";

export default function Jogos() {
    return (
        <div className="bg-cerulean-500 h-screen w-screen pt-15 px-20">
            <h1 className="h1-style mb-15">Jogos</h1>
            <div className="flex gap-10">
                <GameButton
                    subtitle={"DC"}
                    title={"Campo Minado"}
                    cover={"minesweeper.webp"}
                />
                <GameButton
                    subtitle={"Marvel"}
                    title={"Sudoku"}
                    cover={"sudoku.webp"}
                />
            </div>
        </div>
    );
}
