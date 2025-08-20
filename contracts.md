# Sheikh Sajid Riddo Website - Backend Implementation Contracts

## Overview
This document outlines the API contracts and backend implementation requirements for transitioning from mock data to a full-stack application.

## Current Mock Data Structure

### 1. Contact Forms (`mockData.contactForms`)
**Purpose**: Store general inquiries and service requests
**Fields**:
- `id`: String (auto-generated)
- `name`: String (required)
- `email`: String (required)
- `company`: String (optional)
- `message`: String (required)
- `timestamp`: DateTime (auto-generated)
- `status`: String (default: "pending")

### 2. Investment Inquiries (`mockData.investmentInquiries`)
**Purpose**: Store investment-related inquiries
**Fields**:
- `id`: String (auto-generated)
- `name`: String (required)
- `email`: String (required)
- `company`: String (optional)
- `investmentType`: String (enum: "chaos-capital", "ventures", "real-estate", "alternative")
- `investmentAmount`: String (enum: "25k-50k", "50k-100k", "100k-250k", "250k+")
- `message`: String (required)
- `timeline`: String (optional)
- `timestamp`: DateTime (auto-generated)
- `status`: String (default: "pending")

### 3. Static Data (No backend needed initially)
- Ventures (`mockData.ventures`)
- Services (`mockData.services`) 
- Testimonials (`mockData.testimonials`)
- About/Hero content

## Required API Endpoints

### 1. Contact Management
```
POST /api/contacts
- Create new contact inquiry
- Body: { name, email, company?, message }
- Response: { success, data: contactObject }

GET /api/contacts
- Retrieve all contact inquiries (admin only - future)
- Response: { success, data: contactArray }
```

### 2. Investment Management
```
POST /api/investments
- Create new investment inquiry
- Body: { name, email, company?, investmentType?, investmentAmount?, message, timeline? }
- Response: { success, data: investmentObject }

GET /api/investments
- Retrieve all investment inquiries (admin only - future)
- Response: { success, data: investmentArray }
```

### 3. Future Enhancements (Phase 2)
```
POST /api/newsletter
- Newsletter subscription

GET /api/ventures
- Dynamic venture data

POST /api/calendly-webhook
- Calendly booking notifications
```

## MongoDB Collections

### 1. `contacts` Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  company: String?,
  message: String,
  timestamp: Date,
  status: String, // "pending", "contacted", "closed"
  createdAt: Date,
  updatedAt: Date
}
```

### 2. `investment_inquiries` Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  company: String?,
  investmentType: String?,
  investmentAmount: String?,
  message: String,
  timeline: String?,
  timestamp: Date,
  status: String, // "pending", "reviewed", "meeting_scheduled", "closed"
  createdAt: Date,
  updatedAt: Date
}
```

## Frontend Integration Changes

### 1. Remove Mock Dependencies
- Replace `mockApi.submitContactForm()` calls with actual API calls
- Replace `mockApi.submitInvestmentInquiry()` calls with actual API calls
- Update error handling for real network requests

### 2. API Service Layer
Create `/frontend/src/services/api.js`:
```javascript
const API_BASE = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const apiService = {
  submitContact: (data) => axios.post(`${API_BASE}/contacts`, data),
  submitInvestment: (data) => axios.post(`${API_BASE}/investments`, data)
};
```

### 3. Form Integration Updates
- Update `ContactSection.js` to use real API
- Update form validation and error handling
- Add proper loading states
- Add success/error notifications

## External Integrations

### 1. Calendly Integration (Priority)
- Replace mock `handleCalendlyBook()` with real Calendly widget
- Add Calendly embed script to index.html
- Configure Calendly popup/inline widget
- Handle Calendly events and callbacks

### 2. Email Notifications (Future)
- SendGrid/Mailgun integration for contact form submissions
- Automated email responses
- Admin notifications for new inquiries

## Validation Rules

### Contact Form Validation
- `name`: Required, min 2 chars, max 100 chars
- `email`: Required, valid email format
- `company`: Optional, max 100 chars  
- `message`: Required, min 10 chars, max 1000 chars

### Investment Form Validation
- All contact form validations +
- `investmentType`: Optional, must be valid enum value
- `investmentAmount`: Optional, must be valid enum value
- `timeline`: Optional, max 200 chars

## Security Considerations
- Input sanitization for all form fields
- Rate limiting on form submission endpoints
- CORS configuration for frontend domain
- Basic email validation and spam protection

## Testing Requirements
- Unit tests for API endpoints
- Integration tests for database operations
- Frontend form submission testing
- Error handling validation

## Implementation Priority
1. **Phase 1**: Contact and Investment API endpoints + MongoDB integration
2. **Phase 2**: Calendly integration
3. **Phase 3**: Email notifications and admin dashboard

This contract ensures seamless integration between frontend and backend while maintaining the current user experience and design.