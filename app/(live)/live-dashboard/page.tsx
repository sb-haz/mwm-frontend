import React from 'react';
import Footer from '@/components/Footer';

import '@styles/styles.css';
import '@styles/live.css';
import '@styles/search.css';
import '@styles/dashboard.css';

export default async function LiveDashboard() {

    return (
        <div>
            {/* Top Art */}
            <img src="flower-art-top-2.png" className="image-full-width" width={375} height={117} />

            <div className="container reduce-container-margin">
                {/* Image Above Boxes */}
                <div className="dashboard-image-above-boxes grow-effect">
                    <img src="couples-name.png" alt="Image Above Boxes" width={223} height={42} />
                </div>

                {/* Dashboard Boxes Container */}
                <div className="dashboard-box-container">
                    {/* Dashboard Box 1 */}
                    <div className="dashboard-box box-drop-shadow-03">
                        <h2 className="heading-medium">Wedding Day Event</h2>
                        <p className="text-medium text-grey">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="button pink-button button-large button-min-fill text-thick button-text-white">Setup</button>
                    </div>

                    {/* Dashboard Box 2 */}
                    <div className="dashboard-box box-drop-shadow-03">
                        <h2 className="heading-medium">Photos & Videos</h2>
                        <p className="text-medium text-grey">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="button grey-button button-large button-min-fill text-thick">Complete</button>
                    </div>

                    {/* Dashboard Box 3 */}
                    <div className="dashboard-box box-drop-shadow-03">
                        <h2 className="heading-medium">Gifting and Payments</h2>
                        <p className="text-medium text-grey">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="button grey-button button-large button-min-fill text-thick">Complete</button>
                    </div>

                    {/* Dashboard Box 4 */}
                    <div className="dashboard-box box-drop-shadow-03">
                        <h2 className="heading-medium">Interactive Games</h2>
                        <p className="text-medium text-grey">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="button pink-button button-large button-min-fill text-thick button-text-white">Setup</button>
                    </div>

                    {/* Dashboard Box 5 */}
                    <div className="dashboard-box box-drop-shadow-03">
                        <h2 className="heading-medium">Messaging & Guestbook</h2>
                        <p className="text-medium text-grey">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="button grey-button button-large button-min-fill text-thick">Complete</button>
                    </div>

                    {/* Dashboard Box 6 */}
                    <div className="dashboard-box box-drop-shadow-03">
                        <h2 className="heading-medium">Notifications and Updates</h2>
                        <p className="text-medium text-grey">Lorem ipsum dolor sit amet consectetur. Pharetra amet quam.</p>
                        <button className="button grey-button button-large button-min-fill text-thick">Complete</button>
                    </div>
                </div>
            </div>

            <div className="container-bottom-xl"></div>
            <Footer activePage="live" />
        </div>
    );
}
