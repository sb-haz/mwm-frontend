"use client";

import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

import '../styles/styles.css';
import '../styles/search.css';
import '../styles/categories.css';
import '../styles/services.css';
import '../styles/home.css';
import '../styles/live.css';

export default function CouplePage() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js";
        script.async = true;

        script.onload = () => {
            const colors = ['#fff', '#ffb3b3'];

            function startConfetti() {
                const end = Date.now() + (1500);

                function frame() {
                    confetti({
                        particleCount: 2,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: colors
                    });
                    confetti({
                        particleCount: 2,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: colors
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    } else {
                        setTimeout(startConfetti, 6000);
                    }
                }

                frame();
            }

            startConfetti();
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="couple-container">
            {/* Top Art */}
            <img src="/flower-art-top.png" className="image-full-width top-banner-image" width={966} height={301} />

            {/* Full Width Image */}
            <img src="/couple-art-date.png" className="image-full-width margin-top-50 image-bottom-margin" width={383} height={345} />

            <div className="button-container margin-top-20">
                <Link href="couple-page-dashboard">
                    <div className="explore-app-div">
                        <button className="button pink-button button-medium button-text-white text-thick  glow-effect">Join the Celebration</button>
                    </div>
                </Link>
            </div>

            {/* Bottom Art Wrapper */}
            <div className="bottom-banner-wrapper">
                <img src="/flower-art-bottom.png" className="image-full-width bottom-banner-image" width={375} height={131} />
            </div>
        </div>
    );
}
