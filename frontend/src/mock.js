// Mock data for Sheikh Sajid Riddo's website

export const mockData = {
  // Hero section data
  hero: {
    headline: "💥 I sharpen decks. I back ideas. You raise better.",
    subline: "I'm an entrepreneur and investor building ventures and helping founders tell their story the way investors want to hear it.",
    backgroundImage: "https://images.unsplash.com/photo-1681949287382-052ea3954a51"
  },

  // About section data
  about: {
    headline: "Operator at heart. Builder by choice. Investor by conviction.",
    description: [
      "I've worked with Fortune 500 companies, global conglomerates, and scrappy startups across North America and Bangladesh.",
      "Now, I run my own ventures, invest through Chaos Capital, and help early-stage founders tell sharper stories and raise more effectively."
    ],
    tagline: "Quiet growth. Real impact. No noise."
  },

  // Chaos Capital data
  chaosCapital: {
    headline: "Chaos Capital — My personal multi-strategy fund.",
    description: "Chaos Capital is where I place my bets. From early-stage ventures to real estate and alternative assets, I look for opportunities others overlook. Small, growing, and disciplined—built on conviction, not hype."
  },

  // Ventures data
  ventures: [
    {
      id: 1,
      name: "The Hydration Company",
      description: "Affordable, high-quality hydration solutions for everyday people. Starting in Bangladesh, scaling wherever clean water matters most.",
      category: "Consumer Goods",
      status: "Active",
      website: "https://hydrationcompany.com" // Mock URL
    },
    {
      id: 2,
      name: "Cashflow Cult",
      description: "A free investment education platform for Bangladeshis worldwide—empowering immigrants, workers, students, and NRBs through their investment journey. Helping Gen Z, Millennials, and diaspora communities navigate their path to financial freedom with story-driven lessons, AI-guided tools, and pilot programs that promote financial inclusion. Our global community chapters in major cities provide localized support, mentorship, and networking opportunities for building generational wealth.",
      category: "FinTech Education",
      status: "Active",
      website: "https://cashflowcult.com" // Mock URL
    },
    {
      id: 3,
      name: "Global Diaspora Chapters",
      description: "Building connected communities across major cities worldwide where Bangladeshi diaspora live and thrive. These chapters serve as local hubs for financial literacy workshops, investment education, mentorship programs, and networking events—specifically empowering immigrants, workers, students, and NRBs (Non-Resident Bangladeshis) on their journey toward financial freedom. From Toronto to London, New York to Sydney—we're nudging our global community to build smarter financial futures and achieve generational wealth together.",
      category: "Community",
      status: "Upcoming",
      website: "#" // Coming soon
    }
  ],

  // Services data
  services: [
    {
      id: 1,
      title: "Venture Creation",
      description: "From raw idea to investor-ready.",
      details: "Complete venture development from ideation to market-ready positioning. Includes market research, business model validation, pitch deck creation, and investor preparation.",
      clientWork: [
        "Helped 15+ startups go from concept to first funding round",
        "Average 40% improvement in pitch deck effectiveness",
        "85% of clients secure meetings with target investors"
      ]
    },
    {
      id: 2,
      title: "Fractional Consulting",
      description: "Investor relations, branding, GTM strategy, and communications.",
      details: "Part-time executive consulting for startups needing strategic guidance without full-time commitment. Focus on investor communications, brand positioning, and go-to-market strategy.",
      clientWork: [
        "Managed investor relations for 8 successful funding rounds",
        "Developed GTM strategies resulting in 200%+ user growth",
        "Created brand positioning that increased conversion by 60%"
      ]
    },
    {
      id: 3,
      title: "Advisory Services",
      description: "Pitch refinement, mock pitching, investor Q&A prep, fundraising support, and ongoing engagement.",
      details: "Comprehensive advisory support for fundraising founders. Includes pitch deck optimization, investor preparation, due diligence support, and ongoing strategic advice.",
      clientWork: [
        "Advised 25+ founders through successful funding rounds",
        "Mock pitch sessions with 90%+ improvement scores",
        "Ongoing advisory leading to $50M+ in collective raises"
      ]
    }
  ],

  // Investment inquiries - mock contact form data
  investmentInquiries: [],

  // Contact/booking data
  contactForms: [],

  // Testimonials (mock)
  testimonials: [
    {
      id: 1,
      name: "Sarah Chen",
      company: "TechStart Inc.",
      role: "Founder & CEO",
      quote: "Sajid transformed our pitch from confusing to compelling. We raised our seed round within 3 months of working with him.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      name: "Ahmed Rahman",
      company: "GrowthLab",
      role: "Co-Founder",
      quote: "The clarity Sajid brings to investor communications is unmatched. Our fundraising became 10x more strategic.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      name: "Lisa Park",
      company: "InnovateLab",
      role: "Founder",
      quote: "Working with Chaos Capital and Sajid's advisory gave us both funding and ongoing strategic support. Game-changing.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ]
};

// Helper functions for mock data operations
export const mockApi = {
  // Investment inquiries
  submitInvestmentInquiry: async (data) => {
    const inquiry = {
      id: Date.now(),
      ...data,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    mockData.investmentInquiries.push(inquiry);
    return { success: true, data: inquiry };
  },

  // Contact form submissions
  submitContactForm: async (data) => {
    const contact = {
      id: Date.now(),
      ...data,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    mockData.contactForms.push(contact);
    return { success: true, data: contact };
  },

  // Get ventures
  getVentures: async () => {
    return { success: true, data: mockData.ventures };
  },

  // Get services
  getServices: async () => {
    return { success: true, data: mockData.services };
  },

  // Get testimonials
  getTestimonials: async () => {
    return { success: true, data: mockData.testimonials };
  },

  // Calendly integration mock
  openCalendly: () => {
    // This will be replaced with actual Calendly integration
    console.log('Mock: Opening Calendly widget...');
    alert('Calendly integration coming soon! Please use the contact form for now.');
  }
};