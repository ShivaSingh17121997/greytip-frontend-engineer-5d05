import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FeedbackChart = () => {

    const [feedback, setFeedback] = useState({})

    useEffect(() => {
        fetch("/api/v1/sample_assignment_api_5/")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setFeedback(data)
            })
    }, [])



    const data = {
        labels: ['Negative', 'Neutral', 'Positive'],
        datasets: [
            {
                data: [feedback.negative, feedback.neutral, feedback.positive],
                backgroundColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
                borderColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
                borderWidth: 1,
                borderRadius: 10,
                barThickness: 20,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div style={{ width: '300px', height: '150px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Community feedback</h3>
            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>Mostly positive</p>
            <div style={{ width: '100%', height: '50px' }}>
                <Bar data={data} options={options} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <div>
                    <span style={{ display: 'block', fontSize: '12px', color: '#ff6384' }}>Negative</span>
                    <span style={{ display: 'block', fontSize: '14px', fontWeight: 'bold' }}>12</span>
                </div>
                <div>
                    <span style={{ display: 'block', fontSize: '12px', color: '#ffcd56' }}>Neutral</span>
                    <span style={{ display: 'block', fontSize: '14px', fontWeight: 'bold' }}>34</span>
                </div>
                <div>
                    <span style={{ display: 'block', fontSize: '12px', color: '#4bc0c0' }}>Positive</span>
                    <span style={{ display: 'block', fontSize: '14px', fontWeight: 'bold' }}>134</span>
                </div>
            </div>
        </div>
    );
};

export default FeedbackChart;
