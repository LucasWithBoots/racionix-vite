import setBodyColor from "../util/BodyColor";

export default function Home() {
    setBodyColor({ color: "#F87171" });

    return (
        <div className="pt-15 px-20">
            <h1 className="h1-style mb-15">Home</h1>
        </div>
    );
}
