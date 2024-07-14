import React from 'react';
import Link from 'next/link';
import '../app/styles/footer.css';

interface FooterProps {
  activePage: string;
}

const Footer: React.FC<FooterProps> = ({ activePage }) => {
  return (
    <footer className="sticky-footer">
      <div className="footer-icons">
        <Link href="home">
          <div className="footer-icon-wrapper">
            <img src="/footer-home.png" className={`footer-icon ${activePage === 'home' ? 'active' : ''}`} />
            {activePage === 'home' && <div className="white-circle active"></div>}
            {activePage !== 'home' && <div className="white-circle"></div>}
          </div>
        </Link>
        <Link href="live">
          <div className="footer-icon-wrapper">
            <img src="/footer-ring.png" className={`footer-icon ring ${activePage === 'live' ? 'active' : ''}`} />
            {activePage === 'live' && <div className="white-circle active"></div>}
            {activePage !== 'live' && <div className="white-circle"></div>}
          </div>
        </Link>
        <Link href="marketplace">
          <div className="footer-icon-wrapper">
            <img src="/footer-search.png" className={`footer-icon ${activePage === 'marketplace' ? 'active' : ''}`} />
            {activePage === 'marketplace' && <div className="white-circle active"></div>}
            {activePage !== 'marketplace' && <div className="white-circle"></div>}
          </div>
        </Link>
        <Link href="resources">
          <div className="footer-icon-wrapper">
            <img src="/footer-book.png" className={`footer-icon ${activePage === 'resources' ? 'active' : ''}`} />
            {activePage === 'resources' && <div className="white-circle active"></div>}
            {activePage !== 'resources' && <div className="white-circle"></div>}
          </div>
        </Link>
        <Link href="profile">
          <div className="footer-icon-wrapper">
            <img src="/footer-profile.png" className={`footer-icon ${activePage === 'profile' ? 'active' : ''}`} />
            {activePage === 'profile' && <div className="white-circle active"></div>}
            {activePage !== 'profile' && <div className="white-circle"></div>}
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
