import React from 'react';
import Link from 'next/link';

import '../styles/styles.css';
import '../styles/live.css';
import '../styles/search.css';
import '../styles/dashboard.css';

export default function CouplePageDashboard() {

    return (
        <div>
            {/* Top Art */}
            <img src="/flower-art-top-2.png" className="image-full-width" width={375} height={117} alt="Top Art" />

            <div className="container reduce-container-margin">
                {/* Image Above Boxes */}
                <div className="dashboard-image-above-boxes grow-effect">
                    <img src="/couples-name.png" width={223} height={42} alt="Couples Name" />
                </div>

                {/* Dashboard Boxes Container */}
                <div className="dashboard-box-container">
                    {/* Dashboard Box 1 */}
                    <div className="dashboard-box live-dashboard box-drop-shadow-03">
                        <h2 className="heading-medium">Send Photos</h2>
                        <img className="dashboard-icon" src="/dash-1.png" alt="Send Photos" />
                    </div>

                    {/* Dashboard Box 2 */}
                    <div className="dashboard-box live-dashboard box-drop-shadow-03">
                        <h2 className="heading-medium">Send Videos</h2>
                        <img className="dashboard-icon" src="/dash-2.png" alt="Send Videos" />
                    </div>

                    {/* Dashboard Box 3 */}
                    <div className="dashboard-box live-dashboard box-drop-shadow-03">
                        <h2 className="heading-medium">Gifting</h2>
                        <img className="dashboard-icon" src="/dash-3.png" alt="Gifting" />
                    </div>

                    {/* Dashboard Box 4 */}
                    <div className="dashboard-box live-dashboard box-drop-shadow-03">
                        <h2 className="heading-medium">Quiz</h2>
                        <img className="dashboard-icon" src="/dash-4.png" alt="Quiz" />
                    </div>

                    {/* Dashboard Box 5 */}
                    <div className="dashboard-box live-dashboard box-drop-shadow-03">
                        <h2 className="heading-medium">Event</h2>
                        <img className="dashboard-icon" src="/dash-5.png" alt="Event" />
                    </div>

                    {/* Dashboard Box 6 */}
                    <div className="dashboard-box live-dashboard box-drop-shadow-03">
                        <h2 className="heading-medium">Chat</h2>
                        <img className="dashboard-icon" src="/dash-6.png" alt="Chat" />
                    </div>
                </div>

                {/* Button Container */}
                <div className="button-container margin-top-50 margin-bottom-15">
                    <Link href="home">
                        <div className="explore-app-div">
                            <button className="button grey-button button-medium button-text-medium">Exit Wedding</button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="container-bottom-s"></div>
        </div>
    );
}