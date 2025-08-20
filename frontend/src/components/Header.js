import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(26, 28, 27, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-medium)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        maxWidth: '87.5rem'
      }}>
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('hero')}
          style={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 600,
            fontSize: '1.125rem',
            color: 'var(--brand-primary)',
            cursor: 'pointer',
            letterSpacing: '0.02em'
          }}
        >
          Sheikh Sajid Riddo
        </div>

        {/* Desktop Navigation */}
        <nav style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '20px' }}>
          <a 
            href="#about" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a 
            href="#chaos-capital" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('chaos-capital');
            }}
          >
            Chaos Capital
          </a>
          <a 
            href="#ventures" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('ventures');
            }}
          >
            Ventures
          </a>
          <a 
            href="#services" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Services
          </a>
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('contact')}
            style={{ marginLeft: '20px' }}
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--brand-primary)',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          display: window.innerWidth <= 768 ? 'block' : 'none',
          background: 'var(--bg-page)',
          borderTop: '1px solid var(--border-medium)',
          padding: '20px'
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
            <a 
              href="#chaos-capital" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('chaos-capital');
              }}
            >
              Chaos Capital
            </a>
            <a 
              href="#ventures" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('ventures');
              }}
            >
              Ventures
            </a>
            <a 
              href="#services" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              Services
            </a>
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
              style={{ marginTop: '10px' }}
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;