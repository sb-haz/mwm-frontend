import React from 'react'
import Link from 'next/link';
import '../app/styles/footer.css';

const Footer = () => {
  return (
    <footer className="sticky-footer">
      <div className="footer-icons">
        <Link href="home">
          <div className="footer-icon-wrapper">
            <img src="/footer-home.png" className="footer-icon" />
            <div className="white-circle"></div>
          </div>
        </Link>
        <Link href="marketplace">
          <div className="footer-icon-wrapper">
            <img src="/footer-search.png" className="footer-icon" />
            <div className="white-circle"></div>
          </div>
        </Link>
        <Link href="ring">
          <div className="footer-icon-wrapper">
            <img src="/footer-ring.png" className="footer-icon ring" />
            <div className="white-circle"></div>
          </div>
        </Link>
        <Link href="resources">
          <div className="footer-icon-wrapper">
            <img src="/footer-book.png" className="footer-icon" />
            <div className="white-circle"></div>
          </div>
        </Link>
        <Link href="profile">
          <div className="footer-icon-wrapper">
            <img src="/footer-profile.png" className="footer-icon" />
            <div className="white-circle"></div>
          </div>
        </Link>
      </div>
    </footer>
  )
}

export default Footer