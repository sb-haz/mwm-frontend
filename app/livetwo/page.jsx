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
            <img src="flower-art-top.png" className="image-full-width top-banner-image" width={966} height={301} />

            {/* Main Container */}
            <div className="container">
                <div className="live-container">

                    {/* Page Heading */}
                    <h1 className="heading-large reduce-margin">What's the couple's name?</h1>

                    {/* Couple's Name Search Bar */}
                    <div className="search-container">
                        <div className="half-width-search box-drop-shadow-03 rounded-corners-100">
                            <div className="search-left">
                                <p className="text-m text-grey">James</p>
                            </div>
                        </div>
                        <div className="half-width-search box-drop-shadow-03 rounded-corners-100">
                            <div className="search-left">
                                <p className="text-m text-grey">Yasmine</p>
                            </div>
                        </div>
                    </div>

                    {/* Wedding Date Heading */}
                    <h1 className="heading-large">Wedding date</h1>

                    {/* Wedding Date Search Bar */}
                    <div className="search-container box-drop-shadow-03 rounded-corners-100">
                        <div className="full-width-search">
                            <div className="search-left">
                                <img src="search-icon.png" alt="Search Icon" />
                                <p className="text-m text-grey">Search</p>
                            </div>
                            <div className="search-right">
                                <img src="calendar-icon.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width Image */}
            <img src="couple-art-date.png" className="image-full-width margin-top-15 image-bottom-margin" width={383} height={345} />

            {/* Continue Button */}
            <div className="container">
                <div className="live-container">
                    <Link href="livethree">
                        <div className="button-container">
                            <button className="button pink-button button-large button-min-large button-text-white text-thick glow-effect">Continue</button>
                        </div>
                    </Link>

                </div>
            </div>

            <div className="container-bottom-xl"></div>
            <div className="container-bottom-s"></div>
            <Footer activePage="live" />
        </div>
    );
}
