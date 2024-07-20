import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

import '../styles/styles.css';
import '../styles/live.css';

export default async function Live() {

    return (
        <div>
            {/* Top Art */}
            <img src="flower-art-top-2.png" className="image-full-width top-banner-image" width={375} height={117} />

            <div className="container">
                <div className="live-container">
                    {/* Page Heading */}
                    <h1 className="heading-large">Yasmine, let's make your wedding a memorable one.</h1>

                    {/* Full Width Image */}
                    <img src="video-button.png" className="image-full-width image-bottom-margin margin-top-5 box-drop-shadow-10 rounded-corners" width={333} height={163} />

                    <div className="live-container-second">
                        {/* Paragraphs */}
                        <p>Guests will scan barcode at your wedding venue</p>
                        <p>They’ll be able to take pictures and video messages with custom filters.</p>
                        <p>You’ll receive all pictures and videos taken after the event.</p>

                        {/* Two Column Container */}
                        <div className="two-col-container">
                            <div className="left-col">
                                <p>You can get those pictures printed off in a photo book.</p>
                                <p>Video will be compiled into a montage for you to watch.</p>
                            </div>
                            <div className="right-col">
                                {/* Right Column Image */}
                                <img src="live-image-template.png" className="right-col-image box-drop-shadow-05 rounded-corners" alt="Right Column Image" />
                            </div>
                        </div>

                        {/* Additional Paragraphs */}
                        <p>Video will be compiled into a montage for you to watch.</p>
                        <p>There’s also other fun things for them to do within the app.</p>
                        <p>Quizzes with leader boards, e.g. Who knows the Bride the best Quiz.</p>

                        {/* Another Two Column Container */}
                        <div className="two-col-container">
                            <div className="left-col">
                                {/* Left Column Image */}
                                <img src="live-image-template.png" className="left-col-image box-drop-shadow-05 rounded-corners" alt="Left Column Image" />
                            </div>
                            <div className="right-col">
                                <p>Send live announcements at your wedding to everyone within the app, display food menu, allergy info, etc.</p>
                            </div>
                        </div>

                        {/* Get Started Button */}
                        <Link href="livetwo">
                            <div className="button-container margin-top-50">
                                <button className="button pink-button button-large button-min-large button-text-white text-thick glow-effect">Get Started</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="container-bottom-xl"></div>
                <div className="container-bottom-s"></div>
                <Footer activePage="live" />
            </div>
        </div>
    );
}