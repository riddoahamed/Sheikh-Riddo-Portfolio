import React, { useState } from 'react';
import { ArrowRight, Mail, Calendar, TrendingUp, CheckCircle } from 'lucide-react';
import { mockApi } from '../mock';

const ContactSection = () => {
  const [activeForm, setActiveForm] = useState('contact'); // 'contact' or 'investment'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    investmentType: '',
    investmentAmount: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let result;
      if (activeForm === 'investment') {
        result = await mockApi.submitInvestmentInquiry(formData);
      } else {
        result = await mockApi.submitContactForm(formData);
      }
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          investmentType: '',
          investmentAmount: '',
          timeline: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleCalendlyBook = () => {
    // Mock calendly integration
    console.log('Opening Calendly booking...');
    alert('Calendly integration coming soon! Please use the contact form for now.');
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Final Call Section */}
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-6">
            Whether you're raising, investing, or building—do it sharper, smarter, and with purpose.
          </h2>
          <p className="heading-3 mb-8" style={{ color: 'var(--brand-primary)', fontStyle: 'italic' }}>
            I'm here to make you credible, not flashy.
          </p>
          
          <div className="flex-center-wrap mb-12">
            <button 
              className="btn-primary"
              onClick={() => setActiveForm('contact')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Mail size={16} />
              Work With Me
            </button>
            
            <button 
              className="btn-secondary"
              onClick={() => setActiveForm('investment')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <TrendingUp size={16} />
              Invest With Me
            </button>
            
            <button 
              className="btn-secondary"
              onClick={handleCalendlyBook}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Calendar size={16} />
              Book 1:1 Call
            </button>
          </div>
        </div>

        {/* Contact Forms */}
        <div className="grid-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Form Selection Tabs */}
          <div style={{ gridColumn: '1 / -1', marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveForm('contact')}
                style={{
                  background: activeForm === 'contact' ? 'var(--brand-primary)' : 'transparent',
                  color: activeForm === 'contact' ? 'var(--text-inverse)' : 'var(--brand-primary)',
                  border: '2px solid var(--brand-primary)',
                  borderRadius: '10rem',
                  padding: '12px 24px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Work With Me
              </button>
              <button
                onClick={() => setActiveForm('investment')}
                style={{
                  background: activeForm === 'investment' ? 'var(--brand-primary)' : 'transparent',
                  color: activeForm === 'investment' ? 'var(--text-inverse)' : 'var(--brand-primary)',
                  border: '2px solid var(--brand-primary)',
                  borderRadius: '10rem',
                  padding: '12px 24px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Investment Inquiry
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div style={{ gridColumn: '1 / -1' }}>
            <form onSubmit={handleSubmit} style={{
              background: 'var(--bg-card)',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid var(--border-medium)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 className="heading-3 mb-6" id="investment-form">
                {activeForm === 'investment' ? 'Investment Inquiry' : 'Let\'s Work Together'}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label className="body-small" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      background: 'var(--bg-page)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label className="body-small" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      background: 'var(--bg-page)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label className="body-small" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      background: 'var(--bg-page)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                {activeForm === 'investment' && (
                  <>
                    <div>
                      <label className="body-small" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-primary)' }}>
                        Investment Interest
                      </label>
                      <select
                        name="investmentType"
                        value={formData.investmentType}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid var(--border-medium)',
                          background: 'var(--bg-page)',
                          color: 'var(--text-primary)',
                          fontSize: '1rem'
                        }}
                      >
                        <option value="">Select investment type</option>
                        <option value="chaos-capital">Chaos Capital Fund</option>
                        <option value="ventures">Direct Venture Investment</option>
                        <option value="real-estate">Real Estate Opportunities</option>
                        <option value="alternative">Alternative Assets</option>
                      </select>
                    </div>

                    <div>
                      <label className="body-small" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-primary)' }}>
                        Investment Range
                      </label>
                      <select
                        name="investmentAmount"
                        value={formData.investmentAmount}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid var(--border-medium)',
                          background: 'var(--bg-page)',
                          color: 'var(--text-primary)',
                          fontSize: '1rem'
                        }}
                      >
                        <option value="">Select investment range</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k+">$250K+</option>
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label className="body-small" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {activeForm === 'investment' ? 'Investment Goals & Timeline' : 'Project Details'} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder={activeForm === 'investment' 
                      ? 'Tell me about your investment goals, timeline, and any specific interests...'
                      : 'Describe your project, challenges, and how I can help...'
                    }
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      background: 'var(--bg-page)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      {activeForm === 'investment' ? 'Submit Investment Inquiry' : 'Send Message'}
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--brand-primary)',
                    backgroundColor: 'rgba(217, 251, 6, 0.1)',
                    padding: '12px 16px',
                    borderRadius: '8px'
                  }}>
                    <CheckCircle size={16} />
                    <span className="body-small">
                      {activeForm === 'investment' 
                        ? 'Investment inquiry sent! I\'ll be in touch within 24 hours.'
                        : 'Message sent! I\'ll get back to you within 24 hours.'
                      }
                    </span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div style={{
                    color: '#ff6b6b',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    padding: '12px 16px',
                    borderRadius: '8px'
                  }}>
                    <span className="body-small">
                      Something went wrong. Please try again or email directly.
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;