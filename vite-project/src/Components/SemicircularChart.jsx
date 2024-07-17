import React from 'react';

const SemicirculeaChart = ({ score }) => {
    const centerX = 50;
    const centerY = 50;
    const radius = 40;
    const strokeWidth = 10;
    const diameter = radius * 2;
    const circumference = diameter * Math.PI;



    // Calculate the strokeDasharray and strokeDashoffset based on the score
    const percentage = score / 100;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference * (1 - percentage);

    return (
        <svg width="100" height="100" viewBox="0 0 100 100">
            <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="transparent"
                stroke="#e0e0e0"
                strokeWidth={strokeWidth}
            />
            <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="transparent"
                stroke="#3f51b5"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
            />
        </svg>
    );
};

export default SemicirculeaChart;
