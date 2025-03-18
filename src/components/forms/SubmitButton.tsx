export default function SubmitButton({ value }: { value: string }) {
    return (
        <input
            className="bg-[#A6EF18] px-10 py-5 text-white font-bold uppercase text-2xl cursor-pointer font-[Poppins]"
            style={{ boxShadow: "0px 10px 0px #8DD108" }}
            type="submit"
            value={value}
        />
    );
}
