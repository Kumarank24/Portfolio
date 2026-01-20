# EmailJS Setup Instructions

To enable the contact form to send emails to kumarankarthikeyan14@gmail.com, follow these steps:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or any email service you prefer)
4. Connect your Gmail account (kumarankarthikeyan14@gmail.com)
5. Copy the **Service ID** (e.g., `service_abc1234`)

## 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Portfolio Contact: {{subject}}
```

**Body:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID** (e.g., `template_xyz5678`)

## 4. Get Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (e.g., `your_public_key_here`)

## 5. Update Contact.js

Open `src/components/Contact.js` and replace these values around line 20:

```javascript
const serviceID = 'service_xxxxxxx'; // Replace with your Service ID
const templateID = 'template_xxxxxxx'; // Replace with your Template ID
const userID = 'your_public_key'; // Replace with your Public Key
```

## Example:

```javascript
const serviceID = 'service_abc1234';
const templateID = 'template_xyz5678';
const userID = 'Vx7yZ2aBcDeFgHi';
```

## 6. Test the Form

1. Save the file
2. Go to your portfolio website
3. Fill out the contact form
4. Click "Send Message"
5. Check kumarankarthikeyan14@gmail.com for the email

## Free Tier Limits

- 200 emails per month
- Perfect for a portfolio website

## Troubleshooting

If emails aren't being sent:
- Check browser console for errors
- Verify all IDs are correct
- Make sure Gmail service is connected
- Check EmailJS dashboard for delivery status
