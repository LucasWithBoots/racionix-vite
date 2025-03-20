import { IUser } from "../../interfaces/IUser";
import { http } from "../AxiosConfig";
import { handleAxiosError } from "../Error";

const LOGIN_ENDPOINT = "/users/login";

const loginRequest = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    try {
        const res = await http.get(LOGIN_ENDPOINT, {
            auth: {
                username: email,
                password: password,
            },
        });

        const userData = res.data;
        return userData;
    } catch (error) {
        await handleAxiosError(error, "Failed to login");
    }
};

const REGISTER_ENDPOINT = "/users/register";

const registerRequest = async (user: IUser) => {
    try {
        await http.post(REGISTER_ENDPOINT, user);
    } catch (error) {
        await handleAxiosError(error, "Failed to register");
    }
};

export { loginRequest, registerRequest };
