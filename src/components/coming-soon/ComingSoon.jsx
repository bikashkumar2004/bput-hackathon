import ComingSoonImage from "../../assets/coming-soon/coming-soon.webp"
const ComingSoon = () => {
    return (
        <div className="flex flex-col items-center justify-center   text-center">
            <img
                src={ComingSoonImage}
                alt="Coming Soon"
                className="w-full max-w-md h-auto mb-6"
            />
            <h1 className="text-3xl md:text-2xl font-bold bg-primary text-white px-3 py-1 -mt-48">
                Will Be Updated Soon
            </h1>
        </div>
    );
};

export default ComingSoon;
