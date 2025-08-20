import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-6">
            Operator at heart. Builder by choice. Investor by conviction.
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="body-large mb-6">
              I've worked with Fortune 500 companies, global conglomerates, and scrappy startups across North America and Bangladesh.
            </p>
            
            <p className="body-large mb-6">
              Now, I run my own ventures, invest through Chaos Capital, and help early-stage founders tell sharper stories and raise more effectively.
            </p>
            
            <p className="heading-3" style={{ 
              color: 'var(--brand-primary)', 
              fontStyle: 'italic',
              marginTop: '40px'
            }}>
              Quiet growth. Real impact. No noise.
            </p>
          </div>
        </div>
        
        {/* Stats or achievements could go here */}
        <div className="grid-3 mt-12">
          <div className="text-center">
            <h3 className="heading-2 mb-4" style={{ color: 'var(--brand-primary)' }}>
              Fortune 500
            </h3>
            <p className="body-medium">
              Experience with global enterprises and conglomerates
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="heading-2 mb-4" style={{ color: 'var(--brand-primary)' }}>
              Multi-Market
            </h3>
            <p className="body-medium">
              Operations across North America and Bangladesh
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="heading-2 mb-4" style={{ color: 'var(--brand-primary)' }}>
              Early-Stage
            </h3>
            <p className="body-medium">
              Focus on helping founders raise effectively
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;