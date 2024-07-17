import React from 'react';
import GaugeChart from 'react-gauge-chart';

const GaugeChart = () => {
    return (
        <div style={{ width: '50%' }}>
            <GaugeChart id="gauge-chart" nrOfLevels={100} percent={0.78} />
        </div>
    );
};

export default GaugeChart;
