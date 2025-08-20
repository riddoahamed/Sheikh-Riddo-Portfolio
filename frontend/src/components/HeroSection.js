import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PopupWidget } from 'react-calendly';

const HeroSection = () => {
  const handleWorkWithMe = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-animated-bg">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="brand-display mb-6">
            I sharpen decks. I back ideas. You raise better.
          </h1>
          
          <p className="body-large mb-8" style={{ maxWidth: '600px' }}>
            I'm an entrepreneur and investor building ventures and helping founders tell their story the way investors want to hear it.
          </p>
          
          <div className="flex-center-wrap">
            <PopupWidget
              url="https://calendly.com/sheikh-sajid-riddo/30min"
              rootElement={document.getElementById('root')}
              text="Book a Free 1:1 Call"
              textColor="#1a1c1b"
              color="#d9fb06"
              className="btn-primary"
              styles={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            />
            
            <button 
              className="btn-secondary"
              onClick={handleWorkWithMe}
            >
              Work With Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;