import { IUser } from "../../interfaces/IUser";
import { http } from "../AxiosConfig";

const REGISTER_ENDPOINT = "/users/register";

const registerRequest = async (user: IUser) => {
    try {
        await http.post(REGISTER_ENDPOINT, user);
    } catch (error) {
        throw error;
    }
};

export { registerRequest };
