import GameButton from "../components/GameButton";
import setBodyColor from "../util/BodyColor";

export default function Jogos() {
    setBodyColor({ color: "#00c3f7" });

    return (
        <div className="pt-15 px-20">
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
