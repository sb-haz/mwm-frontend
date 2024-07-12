import React from 'react'
import Footer from '@/components/Footer';
import '../styles/styles.css';
import '../styles/live.css';

export default async function Live() {

    return (
        <div>
            <img src="flower-art-top.png" className="top-art" alt="Top Art Flowery Design" />
            <div className="container">
                <div className="live-container">
                    <h1 className="page-heading">Yasmine, let's make your wedding a memorable one.</h1>
                    <img src="video-button.png" className="full-width-image" alt="Full Width Image" />
                    <div className="live-container-second">
                        <p>Guests will scan barcode at your wedding venue</p>
                        <p>They’ll be able to take pictures and video messages with custom filters.</p>
                        <p>You’ll receive all pictures and videos taken after the event.</p>
                        <div className="two-col-container">
                            <div className="left-col">
                                <p>You can get those pictures printed off in a photo book. </p>
                                <p>Video will be compiled into a montage for you to watch.   </p>
                            </div>
                            <div className="right-col">
                                <img src="live-image-template.png" className="right-col-image" alt="Right Column Image" />
                            </div>
                        </div>
                        <p>Video will be compiled into a montage for you to watch. </p>
                        <p>There’s also other fun things for them to do within the app.</p>
                        <p>Quizzes with leader boards, e.g. Who knows the Bride the best Quiz.</p>
                        <div className="two-col-container">
                            <div className="left-col">
                                <img src="live-image-template.png" className="left-col-image" alt="Left Column Image" />
                            </div>
                            <div className="right-col">
                                <p>Send live announcements at your wedding to everyone within the app, display food menu, allergy info, etc.</p>
                            </div>
                        </div>

                        <div className="center-button-container">
                            <button className="get-started-button glow-effect">Get Started</button>
                        </div>

                        <div className="empty-space"></div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>


    )
}