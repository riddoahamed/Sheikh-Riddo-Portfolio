import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleBookCall = () => {
    // Mock calendly integration - will be replaced with real integration
    console.log('Opening Calendly booking...');
    alert('Calendly integration coming soon! For now, please email directly.');
  };

  const handleWorkWithMe = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1681949287382-052ea3954a51" 
          alt="Collaborative business meeting"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="brand-display mb-6">
            💥 I sharpen decks. I back ideas. You raise better.
          </h1>
          
          <p className="body-large mb-8" style={{ maxWidth: '600px' }}>
            I'm an entrepreneur and investor building ventures and helping founders tell their story the way investors want to hear it.
          </p>
          
          <div className="flex-center-wrap">
            <button 
              className="btn-primary"
              onClick={handleBookCall}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              Book a Free 1:1 Call
              <ArrowRight size={16} />
            </button>
            
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