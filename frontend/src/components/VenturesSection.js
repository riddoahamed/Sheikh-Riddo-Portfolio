import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Building, Users, Clock, Facebook, Instagram } from 'lucide-react';
import { mockData } from '../mock';

const VenturesSection = () => {
  const [selectedVenture, setSelectedVenture] = useState(null);

  const handleSocialClick = (platform, ventureName) => {
    // Mock social media links - will be replaced with real ones
    console.log(`Opening ${platform} for ${ventureName}...`);
    alert(`${platform} profile for ${ventureName} coming soon!`);
  };

  const handleVentureClick = (venture) => {
    if (venture.website && venture.website !== '#') {
      // In a real app, this would open the actual website
      console.log(`Opening ${venture.name} website: ${venture.website}`);
      alert(`${venture.name} website coming soon! Currently in development.`);
    } else {
      setSelectedVenture(venture);
    }
  };

  const handleInvestInVentures = () => {
    const element = document.getElementById('investment-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active':
        return <Building size={16} style={{ color: 'var(--brand-primary)' }} />;
      case 'Upcoming':
        return <Clock size={16} style={{ color: 'var(--secondary-yellow)' }} />;
      default:
        return <Building size={16} />;
    }
  };

  return (
    <section id="ventures" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-6">
            Ventures driving impact and inclusion.
          </h2>
          <p className="body-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Building companies that solve real problems and create meaningful opportunities for underserved communities.
          </p>
        </div>
        
        <div className="grid-2" style={{ gap: '40px' }}>
          {mockData.ventures.map((venture) => (
            <div 
              key={venture.id}
              className="venture-card"
              onClick={() => handleVentureClick(venture)}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                {getStatusIcon(venture.status)}
                <span className="caption">{venture.category}</span>
                <span 
                  style={{ 
                    background: venture.status === 'Active' ? 'var(--brand-primary)' : 'var(--secondary-yellow)',
                    color: 'var(--text-inverse)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}
                >
                  {venture.status}
                </span>
              </div>
              
              <h3 className="heading-3 mb-4">
                {venture.name}
              </h3>
              
              <p className="body-medium mb-6">
                {venture.description}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-primary)' }}>
                {venture.website !== '#' ? (
                  <>
                    <ExternalLink size={16} />
                    <span className="body-small" style={{ fontWeight: 600 }}>
                      Visit Website
                    </span>
                  </>
                ) : (
                  <>
                    <Users size={16} />
                    <span className="body-small" style={{ fontWeight: 600 }}>
                      Learn More
                    </span>
                  </>
                )}
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="btn-primary"
            onClick={handleInvestInVentures}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}
          >
            <Building size={16} />
            Invest in My Ventures
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      {/* Venture Detail Modal - Simple implementation */}
      {selectedVenture && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setSelectedVenture(null)}
        >
          <div 
            style={{
              background: 'var(--bg-card)',
              borderRadius: '12px',
              padding: '40px',
              maxWidth: '600px',
              width: '100%',
              border: '1px solid var(--border-medium)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="heading-2 mb-4">{selectedVenture.name}</h3>
            <p className="body-medium mb-6">{selectedVenture.description}</p>
            <p className="body-small mb-6" style={{ color: 'var(--text-secondary)' }}>
              More details and investment opportunities coming soon. This venture is currently in development phase.
            </p>
            <button 
              className="btn-secondary"
              onClick={() => setSelectedVenture(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VenturesSection;