import { useQuery } from "@tanstack/react-query";
import LeaderboardItem from "../components/LeaderboardItem";
import setBodyColor from "../util/BodyColor";
import { getScores } from "../http/Scores";

export default function Leaderboard() {
    setBodyColor({ color: "#94E38B" });

    const {
        data: scoresData,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["scores"],
        queryFn: () => getScores(),
    });

    return (
        <div className="pt-15 px-20">
            <h1 className="h1-style mb-15">Placar</h1>
            <div className="grid grid-cols-2 gap-20">
                {isLoading ? (
                    <p className="text-white font-[Poppins] font-bold text-2xl">
                        Carregando...
                    </p>
                ) : isError ? (
                    <p className="text-white font-[Poppins] font-bold text-2xl">
                        Ocorreu um erro ao carregar os dados.
                    </p>
                ) : (
                    <>
                        <LeaderboardItem
                            title={scoresData![0].game}
                            scores={scoresData![0].scores}
                            backgroundColor="#63BC85"
                        />
                        <LeaderboardItem
                            title={scoresData![1].game}
                            scores={scoresData![1].scores}
                            backgroundColor="#00C3F7"
                        />
                    </>
                )}
            </div>
        </div>
    );
}
