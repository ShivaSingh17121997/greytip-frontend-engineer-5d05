import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [lineChartData, setLineChartData] = useState({
    unique_sales: [],
    labels: []
  });

  // fetching the api data
  useEffect(() => {
    axios.get(`/api/v1/sample_assignment_api_4/`)
      .then((response) => {
        const data = response.data;
        setLineChartData({
          unique_sales: data.unique_sales || [], 
          labels: data.labels || [] 
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const data = {
    labels: lineChartData.labels.length > 0 ? lineChartData.labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Web sales',
        data: lineChartData.unique_sales.length > 0 ? lineChartData.unique_sales : [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Offline selling',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
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
        text: 'Customers by device',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
