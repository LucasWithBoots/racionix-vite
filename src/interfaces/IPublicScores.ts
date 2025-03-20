import { IIndividualScore } from "./IIndividualScore";

export interface IPublicScores {
    game: "minesweeper" | "sudoku";
    scores: IIndividualScore[];
}
