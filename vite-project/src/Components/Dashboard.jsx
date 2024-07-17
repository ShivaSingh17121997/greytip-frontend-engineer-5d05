import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import BarChart from './BarChart';
import LineChart from './LineChart';
// import GaugeChart from './GaugeChart'; 
import PieChart from './PieChart';
import Cards from './Cards';
import FeedbackChart from './FeedbackChar';
import SemicirculeaChart from './SemicircularChart';

const Dashboard = () => {
    const [score, setScore] = useState(0)
    console.log(score)

    useEffect(() => {
        fetch("/api/v1/sample_assignment_api_3/")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.score)
                setScore(data.score)
            })
    }, [])


    return (
        <div className="container">
            <div className="sidebar">
                <h2>Salesway</h2>
                <ul>
                    <li>Dashboard</li>
                    <li>Campaigns</li>
                    <li>Flows</li>
                    <li>Integrations</li>
                    <li>Customers</li>
                </ul>
            </div>

            <div className="main">
                <div>
                    <h1>Dashboard</h1>
                </div>
                <div className="header">


                    <div className="flex justify-center m-auto">
                        <Cards />
                    </div>

                    <div>Compare to <select><option>Last year</option></select></div>

                </div>
                <div className="charts">
                    <div className="chart">
                        <h2>Purchases</h2>
                        <BarChart />
                    </div>

                    <div className="chart">
                        <h2>Customers by device</h2>
                        <LineChart />
                    </div>

                    <div className="chart">
                        <h2>Performance Score</h2>
                        <div style={{marginLeft:"30%"}}>
                            <SemicirculeaChart score={score} />

                        </div>
                        <p>{score}</p>
                    </div>

                    <div className="chart">
                        <h2>Community Feedback</h2>
                        < FeedbackChart />
                    </div>
                </div>
                <div className="card">
                    <h2>Top Products</h2>
                    {/* Product table or additional content goes here */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
