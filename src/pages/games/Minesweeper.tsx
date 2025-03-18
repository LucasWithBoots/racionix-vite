import setBodyColor from "../../util/BodyColor";

export default function Minesweeper() {
    setBodyColor({ color: "#94E38B" });
    return (
        <div className="pt-15 px-20">
            <h1 className="h1-style mb-15">Campo Minado</h1>
        </div>
    );
}
