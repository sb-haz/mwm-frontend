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
            <img src="flower-art-top.png" className="image-full-width" width={966} height={301} />
            <div className="container">
                <div className="live-container">

                    <div className="center-items">
                        <img src="home-couple.png" className="image-full-width home-couple-image remove-margin-top-5" width={511} height={414} />
                        <img src="mwm-logo.png" className="image-full-width home-logo-image" width={534} height={104} />
                    </div>

                    <div className="button-container margin-top-20">
                        <Link href="home">
                            <button className="button pink-button button-large button-text-white text-thick glow-effect">Scan Wedding QR Code</button>
                        </Link>
                    </div>

                    <div className="button-container margin-top-15">
                        <Link href="marketplace">
                            <button className="button grey-button button-large button-min-xlarge">Explore the App</button>
                        </Link>
                    </div>

                    {/* <h1 className="heading-large">Login or sign up.</h1>
                    <div className="button-container">
                        <Link href="marketplace">
                            <button className="button grey-button button-large">Login</button>
                        </Link>
                    </div> */}


                    {/* <div className="center-items">
                        <img src="mwm-logo.png" className="image-full-width home-logo-image" width={534} height={104} />
                        <img src="home-couple.png" className="image-full-width home-couple-image" width={511} height={414} />
                    </div> */}

                </div>

                <div className="empty-space"></div>
                <div className="empty-space"></div>
                <Footer />
            </div >
        </div>
    )
}