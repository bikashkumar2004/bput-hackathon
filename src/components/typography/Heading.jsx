
const Heading = ({ text }) => {
    return (
        <div className="mb-6 uppercase w-fit mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {text?.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{text?.split(" ").slice(1).join(" ")}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
    )
}

export default Heading