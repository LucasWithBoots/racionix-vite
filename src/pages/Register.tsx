import { useForm } from "react-hook-form";
import InputField from "../components/forms/InputField";
import SubmitButton from "../components/forms/SubmitButton";

interface IFormInput {
    fullName: string;
    birthDate: string;
    email: string;
    password: string;
}

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => console.log(data);

    return (
        <div className="bg-lime-300 h-screen w-screen  grid grid-cols-2">
            <div className="bg-white">
                <img
                    src="city.jpg"
                    className="h-full h object-cover brightness-70"
                />
            </div>
            <div className="pt-15 px-20">
                <h1 className="h1-style mb-15">Cadastrar</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-10">
                            <InputField
                                label="Nome Completo"
                                name="fullName"
                                register={register("fullName", {
                                    required: true,
                                })}
                                type="text"
                                error={errors.email}
                            />
                            <InputField
                                label="Data de Nascimento"
                                name="birthDate"
                                register={register("birthDate", {
                                    required: true,
                                })}
                                type="date"
                                error={errors.email}
                            />
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
                        <div className="mt-10">
                            <SubmitButton
                                value={"Cadastrar"}
                                type={"submit"}
                                color="#65D1CF"
                                shadow="#55B4B2"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
