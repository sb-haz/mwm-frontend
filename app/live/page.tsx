import React from 'react'
import Footer from '@/components/Footer';
import '../styles/styles.css';
import '../styles/live.css';

export default async function Live() {

    return (
        <div>
            <img src="flower-art-top.png" className="top-art" alt="Top Art Flowery Design" />
            <div className="container">
                <h1 className="page-heading">Yasmine, let's make your wedding a memorable one.</h1>
                <img src="full-width-image.jpg" className="full-width-image" alt="Full Width Image" />
                <p>First paragraph.</p>
                <p>Second paragraph.</p>
                <p>Third paragraph.</p>
                <div className="two-col-container">
                    <div className="left-col">
                        <p>Left column paragraph.</p>
                    </div>
                    <div className="right-col">
                        <img src="right-col-image.jpg" className="right-col-image" alt="Right Column Image" />
                    </div>
                </div>
                <p>Fourth paragraph.</p>
                <p>Fifth paragraph.</p>
                <p>Sixth paragraph.</p>
                <div className="two-col-container">
                    <div className="left-col">
                        <img src="left-col-image.jpg" className="left-col-image" alt="Left Column Image" />
                    </div>
                    <div className="right-col">
                        <p>Right column paragraph.</p>
                    </div>
                </div>
                <button className="get-started-button">Get Started</button>

                <div className="empty-space"></div>
                <Footer />
            </div>
        </div>


    )
}