import { useForm } from "react-hook-form";
import InputField from "../components/forms/InputField";
import SubmitButton from "../components/forms/SubmitButton";
import { NavLink } from "react-router";
import setBodyColor from "../util/BodyColor";
import { toast } from "react-toastify";
import { loginRequest } from "../http/Auth";

interface IFormInput {
    email: string;
    password: string;
}

export default function Login() {
    setBodyColor({ color: "#ffe000" });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    const onSubmit = async (data: IFormInput) => {
        const user = {
            email: data.email,
            password: data.password,
        };

        try {
            await toast.promise(loginRequest(user), {
                pending: "Entrnado...",
                success: "Conta logada com sucesso!",
                error: "Algo deu errado!",
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="h-screen w-screen  grid grid-cols-2">
            <div className="pt-15 px-20">
                <h1 className="h1-style mb-15">Login</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-10">
                            <InputField
                                label="E-mail"
                                name="email"
                                register={register("email", { required: true })}
                                type="email"
                                error={errors.email}
                            />
                            <InputField
                                label="Senha"
                                name="password"
                                register={register("password", {
                                    required: true,
                                })}
                                type="password"
                                error={errors.password}
                            />
                        </div>
                        <div className="mt-10 flex gap-10">
                            <SubmitButton
                                value={"Logar"}
                                type="submit"
                                color="#A6EF18"
                                shadow="#8DD108"
                            />
                            <NavLink to="/register">
                                <SubmitButton
                                    value={"Cadastrar"}
                                    type="button"
                                    color="#65D1CF"
                                    shadow="#55B4B2"
                                />
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-white">
                <img
                    src="FairyWorld.webp"
                    className="h-full h object-cover brightness-70"
                />
            </div>
        </div>
    );
}
