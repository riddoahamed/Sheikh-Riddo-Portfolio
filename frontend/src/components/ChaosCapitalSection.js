import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const ChaosCapitalSection = () => {
  const handleInvestWithMe = () => {
    const element = document.getElementById('investment-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="chaos-capital" className="section-alt">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="heading-1 mb-6">
              Chaos Capital — My personal multi-strategy fund.
            </h2>
            
            <p className="body-large mb-6">
              Chaos Capital is where I place my bets. From early-stage ventures to real estate and alternative assets, I look for opportunities others overlook.
            </p>
            
            <p className="body-large mb-8">
              Small, growing, and disciplined—built on conviction, not hype. Through our global community network, we're also fostering financial inclusion and investment education for diaspora communities worldwide.
            </p>
            
            <button 
              className="btn-primary"
              onClick={handleInvestWithMe}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <TrendingUp size={16} />
              Invest with Me
              <ArrowRight size={16} />
            </button>
          </div>
          
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: '12px',
            padding: '40px',
            border: '1px solid var(--border-medium)'
          }}>
            <h3 className="heading-3 mb-6" style={{ color: 'var(--brand-primary)' }}>
              Investment Focus Areas
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 className="body-medium mb-2" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  Early-Stage Ventures
                </h4>
                <p className="body-small">
                  Pre-seed to Series A companies with clear product-market fit and scalable business models.
                </p>
              </div>
              
              <div>
                <h4 className="body-medium mb-2" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  Real Estate
                </h4>
                <p className="body-small">
                  Strategic property investments in emerging markets with strong growth potential.
                </p>
              </div>
              
              <div>
                <h4 className="body-medium mb-2" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  Global Community Impact
                </h4>
                <p className="body-small">
                  Supporting diaspora communities through financial education, local chapters, and investment journey guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaosCapitalSection;