"use client";

import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import '../styles/styles.css';
import '../styles/search.css';
import '../styles/categories.css';
import '../styles/services.css';
import '../styles/home.css';
import '../styles/live.css';

export default function ScanQRCode() {

    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/couple-page');
        }, 2500);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div>
            <img src="flower-art-top.png" className="image-full-width top-banner-image" width={966} height={301} />
            <div className="container">
                <div className="live-container">
                    <div className="center-items margin-top-10">
                        <img src="qr-code.png" className="image-full-width home-couple-image margin-top-15" width={625} height={373} />
                        <h1 className="heading-medium">Scan QR Code</h1>
                    </div>
                    <div className="button-container margin-top-20">
                        <Link href="couple-page">
                            <div className="explore-app-div">
                                <button className="button pink-button button-large button-text-white text-thick button-text-large glow-effect">Scanning QR....</button>
                            </div>
                        </Link>
                    </div>
                    <div className="button-container margin-top-15">
                        <Link href="home">
                            <div className="explore-app-div">
                                <button className="button grey-button button-large button-text-medium">Go Back</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="container-bottom"></div>
                <Footer activePage="home" />
            </div>
        </div>
    );
}