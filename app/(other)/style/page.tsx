import React from 'react'
import Footer from '@/components/Footer';

import '@styles/styles.css';
import '@styles/search.css';
import '@styles/categories.css';
import '@styles/services.css';


export default async function Style() {

    return (
        <div className="container">

            <h1>Search bar</h1>
            <div className="search-container">
                <div className="full-width-search">
                    <div className="search-left">
                        <img src="search-icon.png" alt="Search Icon" />
                        <p className="text-m text-grey">Search</p>
                    </div>
                </div>
            </div>

            <div className="search-container">
                <div className="half-width-search">
                    <div className="search-left">
                        <p className="text-m text-grey">Search</p>
                    </div>
                </div>
                <div className="half-width-search">
                    <div className="search-left">
                        <p className="text-m text-grey">Search</p>
                    </div>
                    <div className="search-right">
                        <img src="search-icon.png" alt="Search Icon" />
                    </div>
                </div>
            </div>

            <h1>Text</h1>
            <div className="display-container">
                <h1 className="heading-large">Heading Large</h1>
                <h2 className="heading-medium">Heading Medium</h2>
                <h3 className="heading-small">Heading Small</h3>

                <p className="text-large">Large Text</p>
                <p className="text-medium">Medium Text</p>
                <p className="text-small">Small Text</p>

                <p className="text-thick">Thick Text</p>
                <p>This is regular text.</p>

                <a href="#" className="text-thick">Thick Link</a>
                <a href="#">Regular Link</a>
            </div>

            <h1>Tags</h1>
            <div className="display-container">
                <span className="tag tag-grey-background tag-grey-text">Grey Tag</span>
                <span className="tag tag-grey-background">Grey Tag with Black Text</span>
                <span className="tag tag-pink-background tag-dark-text">Pink Tag</span>
                <span className="tag tag-pink-background tag-grey-text">Pink Tag with Grey Text</span>
                <span className="tag tag-grey-background tag-grey-text tag-thick">Thick Grey Tag</span>
                <span className="tag tag-pink-background tag-dark-text tag-thick">Thick Pink Tag</span>
                <span className="tag tag-verified">Verified Tag</span>
                <span className="tag tag-grey-background tag-thick">Thick Grey Tag</span>
            </div>

            <h1>Buttons</h1>
            <div className="display-container">
                <button className="button pink-button button-small">Small Pink Button</button>
                <button className="button grey-button button-small">Small Grey Button</button>
                <button className="button pink-button button-small glow-effect">Small Glowing Pink Button</button>
                <button className="button grey-button button-small glow-effect">Small Glowing Grey Button</button>
                <button className="button pink-button button-medium">Medium Pink Button</button>
                <button className="button grey-button button-medium">Medium Grey Button</button>
                <button className="button pink-button button-medium button-white-text">Medium Pink Button</button>
                <button className="button grey-button button-medium button-white-text">Medium Grey Button</button>
                <button className="button pink-button button-medium glow-effect">Medium Glowing Pink Button</button>
                <button className="button grey-button button-medium glow-effect">Medium Glowing Grey Button</button>
                <button className="button pink-button button-large">Large Pink Button</button>
                <button className="button grey-button button-large">Large Grey Button</button>
                <button className="button pink-button button-large glow-effect">Large Glowing Pink Button</button>
                <button className="button grey-button button-large glow-effect">Large Glowing Grey Button</button>
            </div>

            <Footer activePage="style" />
        </div >
    )
}