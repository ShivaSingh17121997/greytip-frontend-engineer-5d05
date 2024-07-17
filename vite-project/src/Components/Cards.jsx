import React, { useEffect, useState } from 'react';
import './Cards.css'; // Import the CSS file

export default function Cards() {
    const [cardData, setCardData] = useState({});

    useEffect(() => {
        fetch(`/api/v1/sample_assignment_api_1/`)
            .then((res) => res.json())
            .then((data) => {
                setCardData(data);
                console.log(data, "data form card");
            });
    }, []);

    return (
        <div className='cards-container'>
            <div className="card">
                <a href="#" className="card-content">
                    <h5 className="card-title">Purchases</h5>
                    <p className="card-value">{cardData.purchases}</p>
                </a>
            </div>
            <div className="card">
                <a href="#" className="card-content">
                    <h5 className="card-title">Refunds</h5>
                    <p className="card-value">{cardData.refunds}</p>
                </a>
            </div>
            <div className="card">
                <a href="#" className="card-content">
                    <h5 className="card-title">Revenue</h5>
                    <p className="card-value">{cardData.revenue}</p>
                </a>
            </div>
        </div>
    );
}
