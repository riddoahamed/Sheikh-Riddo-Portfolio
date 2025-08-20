import React, { useState } from 'react';
import { ArrowRight, Briefcase, Users, Target, CheckCircle, X } from 'lucide-react';
import { mockData } from '../mock';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBookCall = () => {
    // Mock calendly integration - will be replaced with real integration
    console.log('Opening Calendly booking...');
    alert('Calendly integration coming soon! For now, please email directly.');
  };

  const getServiceIcon = (title) => {
    switch (title) {
      case 'Venture Creation':
        return <Target size={24} />;
      case 'Fractional Consulting':
        return <Briefcase size={24} />;
      case 'Advisory Services':
        return <Users size={24} />;
      default:
        return <Briefcase size={24} />;
    }
  };

  return (
    <section id="services" className="section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-6">
            Fix the fuzzy. Raise sharper.
          </h2>
          <p className="body-large mb-6" style={{ maxWidth: '600px', margin: '0 auto' }}>
            I help founders and startups clarify their story, pitch confidently, and position themselves for real impact.
          </p>
          <p className="heading-3" style={{ color: 'var(--brand-primary)', fontStyle: 'italic' }}>
            Not just decks. Real positioning that gets you taken seriously.
          </p>
        </div>
        
        <div className="grid-3">
          {mockData.services.map((service) => (
            <div 
              key={service.id}
              className="service-card"
              onClick={() => handleServiceClick(service)}
            >
              <div style={{ 
                color: 'var(--brand-primary)', 
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                {getServiceIcon(service.title)}
              </div>
              
              <h3 className="heading-3 mb-4">
                {service.title}
              </h3>
              
              <p className="body-medium mb-6">
                {service.description}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-primary)' }}>
                <span className="body-small" style={{ fontWeight: 600 }}>
                  Learn More & See Work
                </span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="btn-primary"
            onClick={handleBookCall}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}
          >
            Book a Free 1:1 Call
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setSelectedService(null)}
        >
          <div 
            style={{
              background: 'var(--bg-card)',
              borderRadius: '12px',
              padding: '40px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              border: '1px solid var(--border-medium)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '8px'
              }}
            >
              <X size={24} />
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ color: 'var(--brand-primary)' }}>
                {getServiceIcon(selectedService.title)}
              </div>
              <h3 className="heading-2">{selectedService.title}</h3>
            </div>
            
            <p className="body-large mb-6" style={{ color: 'var(--text-primary)' }}>
              {selectedService.details}
            </p>
            
            <h4 className="heading-3 mb-4" style={{ color: 'var(--brand-primary)' }}>
              Client Results & Work
            </h4>
            
            <div style={{ marginBottom: '30px' }}>
              {selectedService.clientWork.map((work, index) => (
                <div 
                  key={index}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '12px', 
                    marginBottom: '16px' 
                  }}
                >
                  <CheckCircle size={16} style={{ color: 'var(--brand-primary)', marginTop: '4px', flexShrink: 0 }} />
                  <p className="body-medium" style={{ margin: 0 }}>
                    {work}
                  </p>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <button 
                className="btn-primary"
                onClick={handleBookCall}
                style={{ flex: 1, minWidth: '200px' }}
              >
                Book Free Consultation
              </button>
              <button 
                className="btn-secondary"
                onClick={() => setSelectedService(null)}
                style={{ flex: 1, minWidth: '200px' }}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;