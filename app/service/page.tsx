import React from 'react';
import Footer from '@/components/Footer';

import '../styles/styles.css';
import '../styles/search.css';
import '../styles/categories.css';
import '../styles/services.css';

export default async function Service() {

    return (
        <div className="container">
            {/* Page heading */}
            <h1 className="heading-large">Exotic Chauffeur Hire</h1>

            {/* Profile section */}
            <div className="profile-container">
                <img src="../profile-pic.png" alt="Profile Picture" className="profile-picture" />
                {/* Profile name commented out */}
                {/* <span className="profile-name">Adam Khan</span> */}
                <span className="tag tag-verified">Active 5m ago</span>
            </div>

            {/* Service image */}
            <img src="../service-1.jpeg" className="service-image" />

            {/* Service details section */}
            <div className="service-details">
                {/* Indicator container */}
                <div className="indicator-container">
                    <div className="indicator active"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                </div>

                {/* Service top section */}
                <div className="service-top-section">
                    {/* Service rating */}
                    <div className="service-rating service-page">
                        <img src="../star-icon.png" className="star-icon service-page" />
                        <img src="../star-icon.png" className="star-icon service-page" />
                        <img src="../star-icon.png" className="star-icon service-page" />
                        <img src="../star-icon.png" className="star-icon service-page" />
                        <img src="../star-icon.png" className="star-icon service-page" />
                        <p>4.2</p>
                    </div>

                    {/* Favorite button */}
                    <button className="favorite-button service">
                        <img src="../heart-empty.png" alt="Favorite" className="favorite-icon" />
                    </button>
                </div>

                {/* Service tags */}
                <div className="service-tags">
                    <span className="tag tag-grey-background tag-grey-text">London</span>
                    <span className="tag tag-grey-background tag-grey-text">Self-hire</span>
                    <span className="tag tag-grey-background tag-grey-text">Premium</span>
                </div>
            </div>

            {/* Service body */}
            <div className="service-body">
                {/* Services info container */}
                <div className="services-info-container">
                    <h2 className="services-info-heading">Services offered</h2>
                    <p className="text-s service-description">We offer both self-hire and chauffeur-driven experiences in a selection of luxury cars, including Rolls Royce, Bentley Bentaygas, and other prestigious models.</p>
                    <p className="text-s service-description">Elevate your wedding day with our exquisite fleet, ensuring an unforgettable journey filled with elegance and style.</p>
                </div>

                {/* Services info container */}
                <div className="services-info-container">
                    <h2 className="services-info-heading">Pricing & Fees</h2>
                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Weekday Rates</th>
                                <th>Weekend Rates</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-s text-grey">Luxury Car Hire</td>
                                <td className="text-s text-grey">£250/hour (minimum 3 hours)</td>
                                <td className="text-s text-grey">£300/hour</td>
                            </tr>
                            <tr>
                                <td className="text-s text-grey">Additional Hours</td>
                                <td className="text-s text-grey">£100/hour</td>
                                <td className="text-s text-grey">£150/hour</td>
                            </tr>
                            <tr>
                                <td className="text-s text-grey">Night-time Surcharge (after 10 PM)</td>
                                <td className="text-s text-grey">£50/hour</td>
                                <td className="text-s text-grey">£75/hour</td>
                            </tr>
                            <tr>
                                <td className="text-s text-grey">Weekend Special (Full Day)</td>
                                <td className="text-s text-grey">-</td>
                                <td className="text-s text-grey">£1200/day</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Services info container */}
                <div className="services-info-container">
                    <h2 className="services-info-heading">Check Availability</h2>
                    <p className="text-s text-grey service-description">Request quote for full availability details, the checker may not be up to date.</p>

                    <div className="search-container service-availability-margin">
                        <div className="full-width-search">
                            <div className="search-left">
                                <img src="calendar-icon.png" alt="Search Icon" />
                                <p className="text-m text-grey">14/07/2024</p>
                            </div>
                            <div className="search-right">
                                <p className="tag tag-green-text">Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service button container */}
            <div className="button-container margin-top-40">
                <button className="button pink-button button-large button-text-white text-thick glow-effect">Request Quote</button>
                <button className="button grey-button button-large">Message</button>
            </div>

            {/* Empty space */}
            <div className="empty-space"></div>
            <div className="empty-space"></div>


            {/* Footer */}
            <Footer activePage="service" />
        </div>
    );
}
