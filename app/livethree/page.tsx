import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '../styles/styles.css';
import '../styles/live.css';
import '../styles/search.css';
import '../styles/dashboard.css'; // Added import for dashboard.css

export default async function LiveThree() {
    return (
        <div>
            <img src="flower-art-top.png" className="top-art" alt="Top Art Flowery Design" />
            <div className="container reduce-container-margin">
                <div className="dashboard-image-above-boxes">
                    <img src="couples-name.png" alt="Image Above Boxes" />
                </div>
                <div className="dashboard-box-container">
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Wedding Event</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Photo & Videos</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Gifting and Payments</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Interactive Games</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Messaging & Guestbook</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam..</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Notifications and Updates</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>
                </div>
            </div>

            <div className="empty-space"></div>
            <Footer />
        </div>
    );
}
