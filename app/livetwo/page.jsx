import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

import '../styles/styles.css';
import '../styles/live.css';
import '../styles/search.css';

export default async function LiveTwo() {

    return (
        <div>
            {/* Top Art */}
            <img src="flower-art-top.png" className="top-art" alt="Top Art Flowery Design" />

            {/* Main Container */}
            <div className="container">
                <div className="live-container">

                    {/* Page Heading */}
                    <h1 className="page-heading reduce-margin">What's the couple's name?</h1>

                    {/* Couple's Name Search Bar */}
                    <div className="search-bar-two">
                        <div className="live-date-search-bar split-two">
                            <div className="search-left">
                                <p className="search-text">James</p>
                            </div>
                        </div>
                        <div className="live-date-search-bar split-two">
                            <div className="search-left">
                                <p className="search-text">Yasmine</p>
                            </div>
                        </div>
                    </div>

                    {/* Wedding Date Heading */}
                    <h1 className="page-subheading">Wedding date</h1>

                    {/* Wedding Date Search Bar */}
                    <div className="live-date-search-bar">
                        <div className="search-left calendar-icon">
                            <p className="search-text">15 March 2024</p>
                        </div>
                        <div className="search-right">
                            <img className="calendar-icon-img" src="calendar-icon.png" alt="Calendar Icon" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width Image */}
            <img src="couple-art-date.png" className="full-width-image" alt="Full Width Image" />

            {/* Continue Button */}
            <div className="container">
                <div className="live-container">
                    <Link href="livethree">
                        <div className="center-button-container">
                            <button className="get-started-button glow-effect">Continue</button>
                        </div>
                    </Link>
                    
                </div>
            </div>

            {/* Empty Space */}
            <div className="empty-space"></div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
