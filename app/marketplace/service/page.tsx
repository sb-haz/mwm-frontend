import React from 'react'
import { createClient } from "@/utils/supabase/server";
import '../../styles/styles.css';
import '../../styles/search.css';
import '../../styles/categories.css';
import '../../styles/services.css';
import Footer from '@/components/Footer';

export default async function Service() {

    const supabase = createClient();

    const { data: { user },
    } = await supabase.auth.getUser();

    return (
        <div className="container">
            <h1 className="page-heading">Exotic Chauffeur Hire</h1>

            <div className="profile-container">
                <img src="../profile-pic.png" alt="Profile Picture" className="profile-picture" />
                <span className="profile-name">Adam Khan</span>
                <span className="tag verified">Active 5m ago</span>
            </div>

            <img src="../service-1.jpeg" className="service-image" />
            <div className="service-details">
                <div className="indicator-container">
                    <div className="indicator active"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                </div>
                <div className="service-top-section">

                    <div className="service-rating service-page">
                        <img src="../star-icon.png" className="star-icon service-page" />
                        <img src="../star-icon.png" className="star-icon service-page" />
                        <img src="../star-icon.png" className="star-icon service-page" />
                        <img src="../star-icon.png" className="star-icon service-page" />
                        <img src="../star-icon.png" className="star-icon service-page" />
                        <p>4.2</p>
                    </div>

                    <button className="favorite-button service">
                        <img src="../save-icon.png" alt="Favorite" className="favorite-icon" />
                    </button>

                </div>
                <div className="service-tags">
                    <span className="tag">London</span>
                    <span className="tag">Self-hire</span>
                    <span className="tag">Premium</span>
                </div>
            </div>
            <div className="service-body">
                <div className="services-info-container">
                    <h2 className="services-info-heading">Services offered</h2>
                    <p className="service-description">We offer both self-hire and chauffeur-driven experiences in a selection of luxury cars, including Rolls Royce, Bentley Bentaygas, and other prestigious models.</p>
                    <p className="service-description">Elevate your wedding day with our exquisite fleet, ensuring an unforgettable journey filled with elegance and style.</p>
                </div>
                <div className="services-info-container">
                    <h2 className="services-info-heading">Pricing & Fees</h2>
                    <p className="service-description">Wedding Packages: Starting at £500 for a 4-hour service.</p>
                    <p className="service-description">Additional Hours: Extend your experience with hourly rates starting at £100 per hour.</p>
                </div>
                <div className="services-info-container">
                    <h2 className="services-info-heading">Additional Information</h2>
                    <p className="service-description">Please contact us 1 month before your wedding. 10% deposit is required.</p>
                </div>
            </div>

            <div className="service-button-container">
                <button className="service-custom-button">Request Quote</button>
                <button className="service-custom-button">Message</button>
            </div>

            <div className="empty-space"></div>
            <Footer />
        </div>
    )
}