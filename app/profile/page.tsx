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
                <h1 className="page-heading">Yasmine</h1>

                {/* Profile information section */}
                <div className="resources-profile-info">
                    <img src="profile-pic.jpg" className="resources-profile-pic-top-left" />
                    <div className="resources-profile-text-content">
                        {/* Buttons for editing profile and becoming a seller */}
                        <button className="resources-edit-profile-button">Edit Profile</button>
                        <button className="resources-become-seller-button">Become a Seller</button>
                    </div>
                </div>
            </div>

            {/* Messaging section */}
            <div className="resources-messaging-section">
                {/* Tabs for messaging */}
                <div className="resources-messaging-tabs">
                    <div className="resources-messaging-tab active">Primary Messages</div>
                    <div className="resources-messaging-tab">Order History</div>
                </div>

                {/* Search bar */}
                <div className="marketplace-search-bar">
                    <div className="search-left">
                        <img className="search-icon" src='search-icon.png' />
                        <p className="search-text">Search</p>
                    </div>
                </div>

                {/* List of messages */}
                <div className="resources-messaging-list">
                    {/* Individual message rows */}
                    <div className="resources-messaging-row">
                        <img src="company-logo-1.jpg" className="resources-messaging-profile-pic" />
                        <div className="resources-messaging-text-content">
                            <div className="resources-messaging-name">Exotic Chauffeur Hire</div>
                            <div className="resources-messaging-message">Hey, can we discuss the catering?</div>
                        </div>
                        <div className="resources-messaging-time">6 mins ago</div>
                    </div>
                    <div className="resources-messaging-row">
                        <img src="company-logo-2.jpg" className="resources-messaging-profile-pic" />
                        <div className="resources-messaging-text-content">
                            <div className="resources-messaging-name">Safira Floral</div>
                            <div className="resources-messaging-message">Can you send me the floral arrangements?</div>
                        </div>
                        <div className="resources-messaging-time">30 mins ago</div>
                    </div>
                    <div className="resources-messaging-row">
                        <img src="company-logo-3.jpg" className="resources-messaging-profile-pic" />
                        <div className="resources-messaging-text-content">
                            <div className="resources-messaging-name">Adam Videography</div>
                            <div className="resources-messaging-message">Can you send me the floral arrangements?</div>
                        </div>
                        <div className="resources-messaging-time">2 hours ago</div>
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
