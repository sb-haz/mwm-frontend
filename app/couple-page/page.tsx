"use client";

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import Link from 'next/link';

import '../styles/styles.css';
import '../styles/search.css';
import '../styles/categories.css';
import '../styles/services.css';
import '../styles/home.css';
import '../styles/live.css';

export default function CouplePage() {
    useEffect(() => {
        const colors = ['#fff', '#FFB4B4'];
        let animationFrameId: number | undefined;
        let timeoutId: NodeJS.Timeout | undefined;

        function startConfetti() {
            const end = Date.now() + 2000;

            function frame() {
                confetti({
                    particleCount: 10,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors,
                    scalar: 1.25
                });
                confetti({
                    particleCount: 10,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors,
                    scalar: 1.25
                });

                if (Date.now() < end) {
                    animationFrameId = requestAnimationFrame(frame);
                } else {
                    timeoutId = setTimeout(startConfetti, 5000);
                }
            }

            frame();
        }

        startConfetti();

        // Cleanup function
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    return (
        <div className="couple-container">
            {/* Top Art */}
            <img src="/flower-art-top.png" className="image-full-width top-banner-image" width={966} height={301} />

            {/* Full Width Image */}
            <img src="/couple-art-date-2.png" className="image-middle margin-top-50 image-bottom-margin" width={383} height={345} />

            <div className="button-container margin-top-20">
                <Link href="couple-page-dashboard">
                    <div className="explore-app-div">
                        <button className="button pink-button button-large button-text-large button-text-white text-thick glow-effect">
                            Join the Celebration
                        </button>
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
