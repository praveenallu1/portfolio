# Email Integration Setup Guide

## Overview
The contact form is configured to send emails using EmailJS, a free service that requires no backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add Service"
3. Select "Gmail" or your preferred email provider
4. Follow the authentication steps
5. Copy your **Service ID** (e.g., `service_deeps_driving`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Name: Contact Form
Template ID: template_contact_form

Subject: New Inquiry from {{from_name}}

Body:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Copy your **Template ID**

### 4. Get Your Public Key
1. Go to "Account" settings
2. Copy your **Public Key** (starts with a long string)

### 5. Update Contact.vue
Replace the placeholder values in `src/components/Contact.vue`:

```javascript
// Line with user_id - replace with your Public Key
user_id: 'YOUR_EMAILJS_PUBLIC_KEY',

// Update service_id
service_id: 'service_deeps_driving',

// Update template_id
template_id: 'template_contact_form',

// Update to_email
to_email: 'info@deepsdrivingschool.com.au',
```

### 6. Test the Form
1. Run the development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email inbox

## Important Notes

- **Free Tier Limits**: EmailJS free tier allows 200 emails/month
- **Security**: Your Public Key is safe to expose in frontend code
- **Email Verification**: Make sure the email address you're sending to is verified in EmailJS
- **Spam**: Check spam folder if emails don't arrive

## Troubleshooting

### Emails not sending?
1. Check browser console for errors (F12 → Console)
2. Verify Service ID and Template ID are correct
3. Ensure email address is verified in EmailJS
4. Check EmailJS dashboard for failed requests

### Rate limiting?
- Upgrade to paid plan for higher limits
- Or implement backend solution

## Alternative: Use Your Own Email Service

If you prefer a different email service:
1. SendGrid (https://sendgrid.com/)
2. Mailgun (https://www.mailgun.com/)
3. AWS SES (https://aws.amazon.com/ses/)

Contact your developer to integrate these services.
