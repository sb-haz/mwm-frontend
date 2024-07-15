import React from 'react'
import Footer from '@/components/Footer';
import Link from 'next/link';

import '../styles/styles.css';
import '../styles/search.css';
import '../styles/categories.css';
import '../styles/services.css';
import '../styles/home.css';
import '../styles/live.css';


export default async function Home() {

    return (

        <div>
            <img src="flower-art-top.png" className="image-full-width top-banner-image" width={966} height={301} />
            <div className="container">
                <div className="live-container">

                    <div className="center-items">
                        <img src="home-couple.png" className="image-full-width home-couple-image margin-top-15" width={625} height={373} />
                        <div className="break"></div>
                        <img src="mwm-logo.png" className="image-full-width home-logo-image" width={534} height={104} />
                    </div>

                    <div className="button-container margin-top-20">
                        <Link href="home">
                            <div className="explore-app-div">
                                <button className="button pink-button button-large button-text-white text-thick button-text-large glow-effect">Scan Wedding QR Code</button>
                                <img src="up-arrow.png" className="up-arrow" />
                            </div>
                        </Link>
                    </div>

                    <div className="button-container margin-top-15">
                        <Link href="marketplace">
                            <div className="explore-app-div">
                                <button className="button grey-button button-large button-min-xlarge button-text-large">Explore the App</button>
                                <p className="text-xs text-extra-light-grey explore-app-text">Marketplace, planning tools & more</p>
                                <img src="up-arrow-flipped.png" className="up-arrow-second" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="container-bottom"></div>
                <Footer activePage="home" />
            </div >
        </div>
    )
}