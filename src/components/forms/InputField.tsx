import { UseFormRegister } from "react-hook-form";

export default function InputField({
    label,
    name,
    register,
}: {
    label: string;
    name: string;
    register: UseFormRegister<any>;
}) {
    return (
        <div className="flex flex-col gap-3">
            <label className="text-[#0091F4] text-2xl font-bold font-[Poppins]">
                {label}
            </label>
            <input
                {...register(name)}
                className="bg-white h-16 w-100 text-black px-2"
            />
        </div>
    );
}
