import LeaderboardItem from "../components/LeaderboardItem";
import { IIndividualScore } from "../interfaces/IIndividualScore";

const exampleScores: IIndividualScore[] = [
    { position: 1, name: "Alice", score: 2500 },
    { position: 2, name: "Bob", score: 2300 },
    { position: 3, name: "Charlie", score: 2200 },
    { position: 4, name: "David", score: 2100 },
    { position: 5, name: "Eve", score: 2000 },
    { position: 6, name: "Frank", score: 1900 },
    { position: 7, name: "Grace", score: 1800 },
    { position: 8, name: "Hank", score: 1700 },
    { position: 9, name: "Ivy", score: 1600 },
    { position: 10, name: "Jack", score: 1500 },
];

export default function Leaderboard() {
    return (
        <div className="bg-[#94E38B] w-screen h-screen pt-15 px-20">
            <h1 className="h1-style mb-15">Placar</h1>
            <div className="grid grid-cols-2 gap-20">
                <LeaderboardItem title="Campo Minado" scores={exampleScores} />
                <LeaderboardItem title="Sudoku" scores={exampleScores} />
            </div>
        </div>
    );
}
