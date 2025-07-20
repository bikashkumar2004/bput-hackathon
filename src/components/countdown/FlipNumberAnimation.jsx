import { useEffect, useState } from "react";

export default function FlipNumberAnimation({ value }) {
    const [prevValue, setPrevValue] = useState(value);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (value !== prevValue) {
            setAnimating(true);
            const timeout = setTimeout(() => {
                setAnimating(false);
                setPrevValue(value);
            }, 400); // match duration with animation
            return () => clearTimeout(timeout);
        }
    }, [value, prevValue]);

    const formatted = (val) => val.toString().padStart(2, "0");

    return (
        <div className="relative w-16 h-10 overflow-hidden font-roboto-mono">
            {/* Previous Number (slides down) */}
            {animating && (
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold animate-slide-out">
                    {formatted(prevValue)}
                </div>
            )}

            {/* New Number (slides in from top) */}
            <div
                className={`absolute inset-0 flex items-center justify-center text-white text-3xl font-bold ${animating ? "animate-slide-in" : ""
                    }`}
            >
                {formatted(value)}
            </div>
        </div>
    );
}
