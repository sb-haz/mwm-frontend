import React from 'react'
import Footer from '@/components/Footer';
import '../styles/styles.css';
import '../styles/search.css';
import '../styles/categories.css';
import '../styles/services.css';
import '../styles/home.css';


export default async function Home() {

    return (

        <div>
            <img src="flower-art-top.png" className="image-full-width" width={966} height={301} />
            <div className="container container-home">
                <div className="inner-container">
                    <div className="center-items">
                        <img src="mwm-logo.png" className="image-full-width home-logo-image" width={534} height={104} />
                        <img src="home-couple.png" className="image-full-width home-couple-image" width={511} height={414} />
                        
                        <h1 className="heading-large margin-top-30">Are you currently at a wedding?</h1>
                    </div>
                    <div className="button-container">
                        <button className="button pink-button button-large button-text-white text-thick glow-effect">Scan QR Code</button>
                        <button className="button grey-button button-large">Login</button>
                    </div>
                </div>

                <div className="empty-space"></div>
                <div className="empty-space"></div>
                <Footer />
            </div >
        </div>
    )
}