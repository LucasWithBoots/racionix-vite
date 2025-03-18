import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export default function InputField({
    label,
    register,
    type,
    error,
}: {
    label: string;
    name: string;
    register: UseFormRegisterReturn;
    type: React.HTMLInputTypeAttribute;
    error: FieldError | undefined;
}) {
    return (
        <>
            <div className="flex flex-col gap-3">
                <label className="text-[#0091F4] text-2xl font-bold font-[Poppins]">
                    {label}
                </label>
                <input
                    {...register}
                    className="bg-white h-16 w-100 text-black px-2"
                    type={type}
                />
                {error && (
                    <p className="text-red-500 font-[Poppins] font-regular text-sm">
                        Esse campo é obrigatório!
                    </p>
                )}
            </div>
        </>
    );
}
