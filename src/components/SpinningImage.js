import React, { useState, useEffect } from 'react';
import guitar from "../Guitar.png"
console.log("spin")
const SpinningImage = () => {
    const [degrees, setDegrees] = useState(0);
    const spinRate = 700;
    useEffect(() => {
        const spinImage = () => setDegrees((prevDegrees) => (prevDegrees + 1000) % spinRate);
        const interval = setInterval(spinImage, 1000 / 30); // Spin every 30 frames (16ms)
        return () => clearInterval(interval);
    }, []);

    return (
        <img
            src={guitar}
            alt={"spinning guitar"}
            style={{
                transform: `rotate(${degrees}deg)`,
                animation: `spin ${1000 / spinRate}ms infinite linear`, // Optional CSS animation for smoother spinning
                maxWidth: "30em",
                maxHeight: "50em"
            }}
        />
    );
};

export default SpinningImage;
