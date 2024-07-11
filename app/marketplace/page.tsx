import React from 'react'
import Link from 'next/link';
import '../styles/styles.css';
import '../styles/search.css';
import '../styles/categories.css';
import '../styles/services.css';
import Footer from '@/components/Footer';

export default async function Marketplace() {

    return (
        <div className="container">
            <h1 className="page-heading">Marketplace</h1>
            <div className="marketplace-search-bar">
                <div className="search-left">
                    <img className="search-icon" src='search-icon.png' />
                    <p className="search-text">Search</p>
                </div>
                <div className="search-right">
                    <img src="search-filter-icon.png" className='search-filter-icon' />
                </div>
            </div>

            <div className="categories-container">
                <div className="category-item">All</div>
                <div className="category-item">Photography</div>
                <div className="category-item">Chauffeurs</div>
                <div className="category-item">Videographers</div>
                <div className="category-item">DJs</div>
                <div className="category-item">Makeup-Artists</div>
                <div className="category-item">Florists</div>
                <div className="category-item">Desserts</div>
                <div className="category-item">Venues</div>
            </div>

            <div className="services-container">
                {/* Service 1 */}
                <Link href="service">
                    <div className="marketplace-service-item">
                        <img src="service-1.jpeg" className="service-image" />
                        <div className="service-details">
                            <div className="marketplace-service-two-col">
                                <h2 className="marketplace-service-name">Exotic Chauffeur Hire</h2>
                                <div className="service-rating">
                                    <img src="star-icon.png" className="star-icon" />
                                    <p>4.9</p>
                                </div>
                            </div>
                            <div className="service-tags">
                                <span className="tag">London</span>
                                <span className="tag">Self-hire</span>
                                <span className="tag">Premium</span>
                            </div>
                            <p className="service-description">We offer both self-hire and chauffeur-driven experiences in a selection of luxury cars, including Rolls Royce and Bentleys.</p>
                            <button className="favorite-button marketplace">
                                <img src="save-icon.png" alt="Favorite" className="favorite-icon" />
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
                                <h2 className="marketplace-service-name">Fahima Cakes & Desserts </h2>
                                <div className="service-rating">
                                    <img src="star-icon.png" className="star-icon" />
                                    <p>4.7</p>
                                </div>
                            </div>
                            <div className="service-tags">
                                <span className="tag">West Midlands</span>
                                <span className="tag">Fast Service</span>
                            </div>
                            <p className="service-description">Offering a delectable selection of wedding cakes, treats, and desserts. Indulge in beautifully crafted confections.</p>
                            <button className="favorite-button marketplace">
                                <img src="save-icon.png" alt="Favorite" className="favorite-icon" />
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
                                <h2 className="marketplace-service-name">Supreme Events 360 Camera</h2>
                                <div className="service-rating">
                                    <img src="star-icon.png" className="star-icon" />
                                    <p>3.9</p>
                                </div>
                            </div>
                            <div className="service-tags">
                                <span className="tag">London</span>
                                <span className="tag">Affordable</span>
                            </div>
                            <p className="service-description">360 cameras to capture every angle of your special day. Experience immersive wedding moments with high-quality.</p>
                            <button className="favorite-button marketplace">
                                <img src="save-icon.png" alt="Favorite" className="favorite-icon" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="empty-space"></div>
            <Footer />
        </div >
    )
}