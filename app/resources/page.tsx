import React from 'react';
import Footer from '@/components/Footer';
import '../styles/styles.css';
import '../styles/resources.css';
import '../styles/search.css';

export default async function Resources() {

    return (
        <div className="container">
            {/* Main content container */}
            <div className="inner-container">
                {/* Page heading */}
                <h1 className="heading-large">Planning Hub</h1>

                {/* Search bar */}
                <div className="search-container">
                    <div className="full-width-search">
                        <div className="search-left">
                            <img src="search-icon.png" alt="Search Icon" />
                            <p className="text-m text-grey">Search</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resources container */}
            <div className="resources-container">
                {/* Resource Card 1 */}
                <div className="resources-card">
                    <div className="tag tag-pink-background resources-tag">New</div>
                    <div className="resources-card-content">
                        <div className="resources-text-content">
                            <h2 className="heading-medium heading-medium resources-title">Free Designs & Templates</h2>
                            <p className="text-s text-grey resources-description">Free templates for your wedding displays, signs, invites and more.</p>
                        </div>
                        <img src="resource-1.png" className="resources-card-image" width={100} height={70} />
                    </div>
                </div>

                {/* Resource Card 2 */}
                <div className="resources-card">
                    <div className="resources-card-content">
                        <div className="resources-text-content">
                            <h2 className="heading-medium heading-medium resources-title">Essential Planning Guides</h2>
                            <p className="text-s text-grey resources-description">Guides and checklists for every step of your wedding journey.</p>
                        </div>
                        <img src="resource-2.png" className="resources-card-image" width={100} height={75} />
                    </div>
                </div>

                {/* Resource Card 3 */}
                <div className="resources-card">
                    <div className="resources-card-content">
                        <div className="resources-text-content">
                            <h2 className="heading-medium resources-title">DIY Ideas & Inspiration</h2>
                            <p className="text-s text-grey resources-description">Browse DIY wedding ideas and projects for personalised touches.</p>
                        </div>
                        <img src="resource-3.png" className="resources-card-image" width={100} height={76} />
                    </div>
                </div>

                {/* Resource Card 4 */}
                <div className="resources-card">
                    <div className="resources-card-content">
                        <div className="resources-text-content">
                            <h2 className="heading-medium resources-title">Dealing with Vendors and sellers</h2>
                            <p className="text-s text-grey resources-description">Practical advice and strategies for buying from vendors.</p>
                        </div>
                        <img src="resource-4.png" className="resources-card-image" width={100} height={100} />
                    </div>
                </div>

                {/* Resource Card 5 */}
                <div className="resources-card">
                    <div className="resources-card-content">
                        <div className="resources-text-content">
                            <h2 className="heading-medium resources-title">Honeymoon Planning</h2>
                            <p className="text-s text-grey resources-description">Plan the perfect getaway with destination guides.</p>
                        </div>
                        <img src="resource-5.png" className="resources-card-image" />
                    </div>
                </div>
            </div>

            {/* Empty space */}
            <div className="empty-space">
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
