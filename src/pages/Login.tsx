import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../components/forms/InputField";
import SubmitButton from "../components/forms/SubmitButton";

interface IFormInput {
    email: string;
    password: string;
}

export default function Login() {
    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="bg-school-bus-yellow-500 h-screen w-screen  grid grid-cols-2">
            <div className="pt-15 px-20">
                <h1 className="h1-style mb-15">Login</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-10">
                            <InputField
                                label="E-mail"
                                name="email"
                                register={register}
                            />
                            <InputField
                                label="Senha"
                                name="password"
                                register={register}
                            />
                        </div>
                        <div className="h-10" />
                        <SubmitButton value={"Logar"} />
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
