import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

import '../styles/styles.css';
import '../styles/search.css';
import '../styles/categories.css';
import '../styles/services.css';

export default async function Marketplace() {

    return (
        <div className="container">
            {/* Main content container */}
            <div className="inner-container">
                {/* Page heading */}
                <h1 className="heading-large">Marketplace</h1>

                {/* Search bar */}
                <div className="search-container">
                    <div className="full-width-search">
                        <div className="search-left">
                            <img src="search-icon.png" alt="Search Icon" />
                            <p className="text-m text-grey">Search</p>
                        </div>
                        <div className="search-right">
                            <img src="search-filter-icon.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="categories-container">
                    <div className="text-m text-thick category-item">All</div>
                    <div className="text-m text-grey category-item">Photography</div>
                    <div className="text-m text-grey category-item">Chauffeurs</div>
                    <div className="text-m text-grey category-item">Videographers</div>
                    <div className="text-m text-grey category-item">DJs</div>
                    <div className="text-m text-grey category-item">Makeup-Artists</div>
                    <div className="text-m text-grey category-item">Florists</div>
                    <div className="text-m text-grey category-item">Desserts</div>
                    <div className="text-m text-grey category-item">Venues</div>
                </div>
            </div>

            {/* Services container */}
            <div className="services-container">
                {/* Service 1 */}
                <Link href="service">
                    <div className="marketplace-service-item">
                        <img src="service-1.jpeg" className="service-image" />
                        <div className="service-details">
                            <div className="marketplace-service-two-col">
                                <h2 className="heading-medium marketplace-service-name">Exotic Chauffeur Hire</h2>
                                <div className="service-rating">
                                    <img src="star-icon.png" className="star-icon" />
                                    <p>4.9</p>
                                </div>
                            </div>
                            <div>
                                <span className="tag tag-grey-background tag-grey-text">London</span>
                                <span className="tag tag-grey-background tag-grey-text">Self-hire</span>
                                <span className="tag tag-grey-background tag-grey-text">Premium</span>
                            </div>
                            <p className="text-s text-grey service-description">We offer both self-hire and chauffeur-driven experiences in a selection of luxury cars, including Rolls Royce and Bentleys.</p>
                            <button className="favorite-button marketplace">
                                <img src="heart-empty.png" alt="Favorite" className="favorite-icon" />
                            </button>
                        </div>
                    </div>
                </Link>

                {/* Service 2 */}
                <Link href="service">
                    <div className="marketplace-service-item">
                        <img src="service-2.jpeg" className="service-image" />
                        <div className="service-details">
                            <div className="marketplace-service-two-col">
                                <h2 className="heading-medium marketplace-service-name">Fahima Cakes & Desserts </h2>
                                <div className="service-rating">
                                    <img src="star-icon.png" className="star-icon" />
                                    <p>4.7</p>
                                </div>
                            </div>
                            <div>
                                <span className="tag tag-grey-background tag-grey-text">West Midlands</span>
                                <span className="tag tag-grey-background tag-grey-text">Fast Service</span>
                            </div>
                            <p className="text-s text-grey service-description">Offering a delectable selection of wedding cakes, treats, and desserts. Indulge in beautifully crafted confections.</p>
                            <button className="favorite-button marketplace">
                                <img src="heart-empty.png" alt="Favorite" className="favorite-icon" />
                            </button>
                        </div>
                    </div>
                </Link>

                {/* Service 3 */}
                <Link href="service">
                    <div className="marketplace-service-item">
                        <img src="service-3.jpeg" className="service-image" />
                        <div className="service-details">
                            <div className="marketplace-service-two-col">
                                <h2 className="heading-medium marketplace-service-name">Supreme Events 360 Camera</h2>
                                <div className="service-rating">
                                    <img src="star-icon.png" className="star-icon" />
                                    <p>3.9</p>
                                </div>
                            </div>
                            <div>
                                <span className="tag tag-grey-background tag-grey-text">United Kingdom</span>
                                <span className="tag tag-grey-background tag-grey-text">Affordable</span>
                            </div>
                            <p className="text-s text-grey service-description">360 cameras to capture every angle of your special day. Experience immersive wedding moments with high-quality.</p>
                            <button className="favorite-button marketplace">
                                <img src="heart-empty.png" alt="Favorite" className="favorite-icon" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="center-items">
                <div className="pagination">
                    <p className="tag tag-pink-background tag-large text-dark-grey tag-text-large text-thick">1</p>
                    <p className="tag tag-grey-background tag-large tag-grey-text tag-text-large">2</p>
                    <p className="tag tag-grey-background tag-large tag-grey-text tag-text-large">3</p>
                    <p className="tag tag-grey-background tag-large tag-grey-text tag-text-large">4</p>
                    <p className="tag tag-grey-background tag-large tag-grey-text tag-text-large">5</p>
                    <p className="tag tag-grey-background tag-large tag-grey-text tag-text-large">Next</p>
                </div>
            </div>

            {/* Empty space */}
            <div className="margin-top-40"></div>

            {/* Footer */}
            <Footer />
        </div >
    )
}