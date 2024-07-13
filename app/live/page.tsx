import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

import '../styles/styles.css';
import '../styles/live.css';

export default async function Live() {

    return (
        <div>
            {/* Top Art */}
            <img src="flower-art-top.png" className="top-art" alt="Top Art Flowery Design" />

            <div className="container">
                <div className="live-container">
                    {/* Page Heading */}
                    <h1 className="page-heading">Yasmine, let's make your wedding a memorable one.</h1>

                    {/* Full Width Image */}
                    <img src="video-button.png" className="full-width-image" alt="Full Width Image" />

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
                                <img src="live-image-template.png" className="right-col-image" alt="Right Column Image" />
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
                                <img src="live-image-template.png" className="left-col-image" alt="Left Column Image" />
                            </div>
                            <div className="right-col">
                                <p>Send live announcements at your wedding to everyone within the app, display food menu, allergy info, etc.</p>
                            </div>
                        </div>

                        {/* Get Started Button */}
                        <Link href="livetwo">
                            <div className="center-button-container">
                                <button className="get-started-button glow-effect">Get Started</button>
                            </div>
                        </Link>

                        {/* Empty Space */}
                        <div className="empty-space"></div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}