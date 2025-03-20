import { IPublicScores } from "../../interfaces/IPublicScores";
import { http } from "../AxiosConfig";
import { handleAxiosError } from "../Error";

const SCORES_ENDPOINT = "/scores";

const getScores = async () => {
    try {
        const res = await http.get<IPublicScores[]>(SCORES_ENDPOINT);
        return res.data;
    } catch (error) {
        await handleAxiosError(error, "Failed to get scores");
    }
};

export { getScores };
