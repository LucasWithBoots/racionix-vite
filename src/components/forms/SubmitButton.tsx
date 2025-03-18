export default function SubmitButton({
    value,
    type,
    color,
    shadow,
}: {
    value: string;
    type: React.HTMLInputTypeAttribute;
    color: string;
    shadow: string;
}) {
    return (
        <input
            className="px-10 py-5 text-white font-bold uppercase text-2xl cursor-pointer font-[Poppins]"
            style={{
                backgroundColor: color,
                boxShadow: `0px 10px 0px ${shadow}`,
            }}
            type={type}
            value={value}
        />
    );
}
