import React, { useState, useEffect } from 'react';

const SpinningImage = (props) => {
    const [degrees, setDegrees] = useState(0);

    useEffect(() => {
        const spinImage = () => setDegrees((prevDegrees) => (prevDegrees + 360) % 360);
        const interval = setInterval(spinImage, 1000 / 60); // Spin every 60 frames (16ms)
        return () => clearInterval(interval);
    }, []);

    return (
        <img
            src={props.src}
            alt={props.alt}
            style={{
                transform: `rotate(${degrees}deg)`,
                animation: `spin ${1000 / 360}ms infinite linear`, // Optional CSS animation for smoother spinning
            }}
        />
    );
};

export default SpinningImage;
