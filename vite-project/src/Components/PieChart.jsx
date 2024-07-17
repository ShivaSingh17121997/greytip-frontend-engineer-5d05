import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Negative', 'Neutral', 'Positive'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 34, 134],
        backgroundColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
        borderColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Community Feedback',
      },
    },
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
