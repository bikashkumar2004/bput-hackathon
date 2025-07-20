import React, { useEffect, useState } from "react";

const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function scramble(target, progress) {
    return target
        .split("")
        .map((char, i) => {
            if (i < progress) return char;
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");
}

function TextDecoderAnimation({ text, interval = 5000, duration = 4000 }) {
    const [displayedText, setDisplayedText] = useState(text);

    useEffect(() => {
        const animate = () => {
            const totalFrames = Math.floor(duration / 150);
            let frame = 0;

            const anim = setInterval(() => {
                frame++;
                const progress = Math.floor((frame / totalFrames) * text.length);
                setDisplayedText(scramble(text, progress));

                if (frame >= totalFrames) {
                    clearInterval(anim);
                    setDisplayedText(text);
                }
            }, 50);
        };

        animate(); // Run once on mount
        const timer = setInterval(animate, interval);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [text, interval, duration]);

    return <span >{displayedText}</span>;
}

export default TextDecoderAnimation;
