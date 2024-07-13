import React from 'react';
import Footer from '@/components/Footer';

import '../styles/styles.css';
import '../styles/profile.css';
import '../styles/search.css';

export default async function Profile() {

    return (
        <div className="container">
            {/* Main content container */}
            <div className="inner-container">
                {/* Page heading */}
                <h1 className="heading-large">Yasmine</h1>

                {/* Profile information section */}
                <div className="resources-profile-info">
                    <img src="profile-pic.jpg" className="resources-profile-pic-top-left" width={80} height={80} />
                    <div className="resources-profile-text-content">
                        {/* Buttons for editing profile and becoming a seller */}
                        <button className="button grey-button button-medium">Edit Profile</button>
                        <button className="button pink-button button-medium button-text-white">Become a Seller</button>
                    </div>
                </div>
            </div>

            {/* Messaging section */}
            <div className="resources-messaging-section">
                {/* Tabs for messaging */}
                <div className="resources-messaging-tabs">
                    <div className="heading-small text-thick resources-messaging-tab active">Primary Messages</div>
                    <div className="text-ml resources-messaging-tab">Order History</div>
                </div>

                {/* Search bar */}
                <div className="search-container">
                    <div className="full-width-search">
                        <div className="search-left">
                            <img src="search-icon.png" alt="Search Icon" />
                            <p className="text-m text-grey">Search</p>
                        </div>
                    </div>
                </div>

                {/* List of messages */}
                <div className="resources-messaging-list">
                    {/* Individual message rows */}
                    <div className="resources-messaging-row">
                        <img src="company-logo-1.jpg" className="resources-messaging-profile-pic" />
                        <div className="resources-messaging-text-content">
                            <div className="heading-small resources-messaging-name">Exotic Chauffeur Hire</div>
                            <div className="text-m text-grey resources-messaging-message">Hey, can we discuss the catering?</div>
                        </div>
                        <div className="text-xs text-light-grey">6 mins ago</div>
                    </div>
                    <div className="resources-messaging-row">
                        <img src="company-logo-4.jpg" className="resources-messaging-profile-pic" />
                        <div className="resources-messaging-text-content">
                            <div className="heading-small resources-messaging-name">White Bloom Decor</div>
                            <div className="text-m text-grey resources-messaging-message">The payment wasn't sent so I can't.</div>
                        </div>
                        <div className="text-xs text-light-grey">27 minutes ago</div>
                    </div>
                    <div className="resources-messaging-row">
                        <img src="company-logo-3.jpg" className="resources-messaging-profile-pic" />
                        <div className="resources-messaging-text-content">
                            <div className="heading-small resources-messaging-name">Adam Videography</div>
                            <div className="text-m text-grey resources-messaging-message">Why haven't you paid, you brokie</div>
                        </div>
                        <div className="text-xs text-light-grey">2 hours ago</div>
                    </div>
                    <div className="resources-messaging-row">
                        <img src="company-logo-2.jpg" className="resources-messaging-profile-pic" />
                        <div className="resources-messaging-text-content">
                            <div className="heading-small resources-messaging-name">Safira Floral</div>
                            <div className="text-m text-grey resources-messaging-message">Can you send me the floral arrangements?</div>
                        </div>
                        <div className="text-xs text-light-grey">3 hours ago</div>
                    </div>
                </div>
            </div>

            {/* Empty space */}
            <div className="empty-space">
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
