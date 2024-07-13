import React from 'react';
import Footer from '@/components/Footer';

import '../styles/styles.css';
import '../styles/live.css';
import '../styles/search.css';
import '../styles/dashboard.css';

export default async function LiveThree() {

    return (
        <div>
            {/* Top Art */}
            <img src="flower-art-top.png" className="top-art" alt="Top Art Flowery Design" />

            <div className="container reduce-container-margin">
                {/* Image Above Boxes */}
                <div className="dashboard-image-above-boxes">
                    <img src="couples-name.png" alt="Image Above Boxes" />
                </div>

                {/* Dashboard Boxes Container */}
                <div className="dashboard-box-container">
                    {/* Dashboard Box 1 */}
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Wedding Event</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>

                    {/* Dashboard Box 2 */}
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Photo & Videos</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>

                    {/* Dashboard Box 3 */}
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Gifting and Payments</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>

                    {/* Dashboard Box 4 */}
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Interactive Games</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>

                    {/* Dashboard Box 5 */}
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Messaging & Guestbook</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>

                    {/* Dashboard Box 6 */}
                    <div className="dashboard-box">
                        <h2 className="dashboard-box-title">Notifications and Updates</h2>
                        <p className="dashboard-box-description">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="dashboard-setup-button">Setup</button>
                    </div>
                </div>
            </div>

            {/* Empty Space */}
            <div className="empty-space"></div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
