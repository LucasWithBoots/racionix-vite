import { IIndividualScore } from "../interfaces/IIndividualScore";

export default function LeaderboardItem({
    title,
    scores,
}: {
    title: string;
    scores: IIndividualScore[];
}) {
    const listScores = scores.map((score) => (
        <div className="flex justify-between gap-10 text-black items-center">
            <div className="flex gap-10">
                <p
                    className={`font-bold text-xl text-[#626262] ${
                        score.position === 1
                            ? "bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center"
                            : score.position === 2
                              ? "bg-gray-400 w-10 h-10 rounded-full flex items-center justify-center"
                              : score.position === 3
                                ? "bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center"
                                : null
                    }`}
                >
                    {score.position}
                </p>
                <p className="font-bold text-2xl">{score.name}</p>
            </div>
            <p className="text-[#65D1CF] font-bold text-xl">{score.score}</p>
        </div>
    ));

    return (
        <div
            className={
                "bg-cerulean-500 flex flex-col items-center font-[Poppins] h-min rounded-xl"
            }
        >
            <p className="uppercase font-bold text-4xl py-10">{title}</p>
            <div className="bg-white w-full p-10 rounded-t-3xl rounded-b-xl flex flex-col gap-5">
                {listScores}
            </div>
        </div>
    );
}
