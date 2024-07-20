import React from 'react';
import Link from 'next/link';

import '/app/styles/landing-page.css';

export default async function Index() {
  return (
    <div className="content">
      <div className="top-section">

        {/* Mockup image */}
        <div className="mockup-1">
          <img src="mockup-1.png" width={200} height={277} alt="Mockup Image" />
        </div>

        {/* Main heading */}
        <h1 className="satisfy-regular">My Wedding Moments</h1>

        {/* App store images with links */}
        <div className="app-images">
          <img src="app_store_image.png" alt="App Store Image" />
          <img src="play_store_image.png" alt="Play Store Image" />
        </div>

        {/* Coming soon image */}
        <div className="coming-soon">
          <img src="coming-soon.png" alt="Coming Soon" />
        </div>

        {/* Link to marketplace page */}
        <Link href="home">
          <div className="centered-div">
            <button className="demo-button">Try Demo</button>
          </div>
        </Link>

      </div>
    </div>
  );
}
