import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import '/app/styles/landing-page.css';

export default async function Index() {

  return (
    <div className="content">
      <div className="top-section">

        {/* Mockup image */}
        <div className="mockup-1">
          <Image src="mockup-1.png" width={200} height={277} alt="" />
        </div>

        {/* Main heading */}
        <h1 className="satisfy-regular">My Wedding Moments</h1>

        {/* App store images with links */}
        <div className="app-images">
          <Image src="app_store_image.png" alt="" />
          <Image src="play_store_image.png" alt="" />
        </div>

        {/* Coming soon image */}
        <div className="coming-soon">
          <Image src="coming-soon.png" alt="" />
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
