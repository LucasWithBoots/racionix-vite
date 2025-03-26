import { AxiosError } from "axios";
import { IErrorResponse } from "../../interfaces/IErrorResponse.ts";

const handleAxiosError = async (
    err: unknown,
    message: string,
): Promise<never> => {
    const axiosError = err as AxiosError<IErrorResponse>;
    console.error(axiosError);

    if (
        axiosError.response &&
        axiosError.response.data &&
        axiosError.response.data.message
    ) {
        throw new Error(axiosError.response.data.message);
    } else {
        throw new Error(message);
    }
};

export { handleAxiosError };
