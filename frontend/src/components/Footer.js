import React from 'react';
import { Mail, Linkedin, Twitter, ExternalLink, Instagram, Youtube, Github, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform) => {
    // Mock social links - will be replaced with real ones
    console.log(`Opening ${platform} profile...`);
    alert(`${platform} profile coming soon!`);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@sheikhsajidriddo.com';
  };

  return (
    <footer style={{
      background: 'var(--bg-page)',
      borderTop: '1px solid var(--border-medium)',
      padding: '60px 0 40px'
    }}>
      <div className="container">
        <div className="grid-2" style={{ gap: '60px', alignItems: 'flex-start' }}>
          {/* Left Column - Brand & Description */}
          <div>
            <h3 className="heading-2 mb-4" style={{ color: 'var(--brand-primary)' }}>
              Sheikh Sajid Riddo
            </h3>
            <p className="body-medium mb-6">
              Entrepreneur, investor, and builder helping founders tell sharper stories and raise more effectively. 
              Running ventures and placing strategic bets through Chaos Capital.
            </p>
            <p className="body-small" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              Quiet growth. Real impact. No noise.
            </p>
          </div>

          {/* Right Column - Links & Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Quick Links */}
            <div>
              <h4 className="heading-3 mb-4" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                Quick Links
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href="#about" 
                  className="nav-link"
                  style={{ padding: '4px 0' }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </a>
                <a 
                  href="#chaos-capital" 
                  className="nav-link"
                  style={{ padding: '4px 0' }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('chaos-capital')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Chaos Capital
                </a>
                <a 
                  href="#ventures" 
                  className="nav-link"
                  style={{ padding: '4px 0' }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Ventures
                </a>
                <a 
                  href="#services" 
                  className="nav-link"
                  style={{ padding: '4px 0' }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Services
                </a>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="heading-3 mb-4" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                Connect
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <button
                  onClick={handleEmailClick}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '1rem',
                    textAlign: 'left'
                  }}
                  className="nav-link"
                >
                  <Mail size={16} />
                  hello@sheikhsajidriddo.com
                </button>
                
                <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => handleSocialClick('LinkedIn')}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'var(--brand-primary)';
                      e.target.style.color = 'var(--brand-primary)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'var(--border-medium)';
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <Linkedin size={16} />
                  </button>
                  
                  <button
                    onClick={() => handleSocialClick('Twitter')}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'var(--brand-primary)';
                      e.target.style.color = 'var(--brand-primary)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'var(--border-medium)';
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <Twitter size={16} />
                  </button>

                  <button
                    onClick={() => handleSocialClick('Facebook')}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'var(--brand-primary)';
                      e.target.style.color = 'var(--brand-primary)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'var(--border-medium)';
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <Facebook size={16} />
                  </button>

                  <button
                    onClick={() => handleSocialClick('YouTube')}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'var(--brand-primary)';
                      e.target.style.color = 'var(--brand-primary)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'var(--border-medium)';
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <Youtube size={16} />
                  </button>

                  <button
                    onClick={() => handleSocialClick('Instagram')}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'var(--brand-primary)';
                      e.target.style.color = 'var(--brand-primary)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'var(--border-medium)';
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <Instagram size={16} />
                  </button>

                  <button
                    onClick={() => handleSocialClick('Medium')}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'var(--brand-primary)';
                      e.target.style.color = 'var(--brand-primary)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'var(--border-medium)';
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <ExternalLink size={16} />
                  </button>

                  <button
                    onClick={() => handleSocialClick('WhatsApp')}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'var(--brand-primary)';
                      e.target.style.color = 'var(--brand-primary)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'var(--border-medium)';
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <MessageCircle size={16} />
                  </button>

                  <button
                    onClick={() => handleSocialClick('GitHub')}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'var(--brand-primary)';
                      e.target.style.color = 'var(--brand-primary)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'var(--border-medium)';
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-medium)',
          marginTop: '60px',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p className="body-small" style={{ color: 'var(--text-muted)', margin: 0 }}>
            © {currentYear} Sheikh Sajid Riddo. All rights reserved.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span className="caption" style={{ color: 'var(--text-muted)' }}>
              Built for impact
            </span>
            <button
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '6px 12px',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.borderColor = 'var(--brand-primary)';
                e.target.style.color = 'var(--brand-primary)';
              }}
              onMouseOut={(e) => {
                e.target.style.borderColor = 'var(--border-medium)';
                e.target.style.color = 'var(--text-secondary)';
              }}
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;