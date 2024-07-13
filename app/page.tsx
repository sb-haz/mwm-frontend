import React from 'react';
import Link from 'next/link';

import '/app/styles/landing-page.css';

export default async function Index() {

  // Constants for social media and app links
  const instagram = "https://www.instagram.com/my.wedding.moments";
  const tiktok = "https://www.tiktok.com/@myweddingmoments";
  const app = "https://myweddingmoments.netlify.app/";

  return (
    <div className="outer">
      <div className="content">
        <div className="top-section">

          {/* Mockup image */}
          <div className="mockup-1">
            <img src="mockup-1.png" alt="iPhone Mockup" />
          </div>

          {/* Main heading */}
          <h1 className="satisfy-regular">My Wedding Moments</h1>

          {/* App store images with links */}
          <div className="app-images">
            <a href={app} target="_blank"><img src="app_store_image.png" alt="App Store" /></a>
            <a href={app} target="_blank"><img src="play_store_image.png" alt="Play Store" /></a>
          </div>

          {/* Coming soon image */}
          <div className="coming-soon">
            <img src="coming-soon.png" alt="Coming Soon" />
          </div>

          {/* Link to marketplace page */}
          <Link href="marketplace">
            <div className="centered-div">
              <button className="demo-button">Try Demo</button>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
