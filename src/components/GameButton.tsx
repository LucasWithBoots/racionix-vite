export default function GameButton({
    cover,
    subtitle,
    title,
}: {
    cover: string;
    subtitle: string;
    title: string;
}) {
    return (
        <div className="bg-white w-120 rounded-xl">
            <img src={cover} className="object-cover h-70 w-120 rounded-t-xl" />
            <div className="text-black font-[Poppins] py-5 px-4">
                <p className="text-gray-500 font-light">{subtitle}</p>
                <p className=" font-bold text-2xl">{title}</p>
            </div>
        </div>
    );
}
