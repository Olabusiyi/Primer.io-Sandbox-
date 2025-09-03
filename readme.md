# Primer Checkout Demo

A professional, production-ready checkout page using Primer Universal Checkout. Perfect for demos, interviews, and prototyping payment flows.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- A Primer account with API access
- Git (optional)

### 1. Clone and Install
```bash
# Clone the repository
git clone <your-repo-url>
cd primer

# Install dependencies
npm install
```

### 2. Environment Setup
```bash
# Copy the environment template
cp .env.example .env

# Edit .env with your Primer API key
PRIMER_API_KEY=your_primer_api_key_here
PORT=4242
```

### 3. Get Your Primer API Key
1. Sign up at [Primer.io](https://primer.io)
2. Go to your dashboard
3. Navigate to **API Keys** section
4. Copy your **Sandbox API Key**
5. Paste it in your `.env` file

### 4. Run the Application
```bash
# Start the development server
npm run dev

# Open your browser to
http://localhost:4242
```

## 🎯 Features

- **Secure by design**: Card data never touches your server (Primer Universal Checkout)
- **Professional UI**: Modern, responsive design with smooth animations
- **Real-time feedback**: Loading states, success/error messages
- **Mobile responsive**: Works perfectly on all devices
- **Test mode ready**: Use test cards for safe development
- **Extensible**: Easy to add products, taxes, webhooks, etc.

## 🧪 Testing

### Test Cards
Use these test card numbers for safe testing:

| Card Number | Description |
|-------------|-------------|
| `4242 4242 4242 4242` | Visa (Success) |
| `4000 0000 0000 0002` | Visa (Declined) |
| `5555 5555 5555 4444` | Mastercard (Success) |
| `3782 822463 10005` | American Express (Success) |

**Test Details:**
- Use any future expiry date (e.g., 12/25)
- Use any 3-digit CVC (e.g., 123)
- Use any billing address

## 📁 Project Structure

```
primer/
├── public/
│   ├── index.html          # Main checkout page
│   ├── primer.js           # Frontend JavaScript
│   └── styles.css          # Professional styling
├── server.js               # Express backend
├── package.json            # Dependencies
├── .env.example            # Environment template
└── readme.md              # This file
```

## 🔧 Configuration

### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `PRIMER_API_KEY` | Your Primer sandbox API key | ✅ |
| `PORT` | Server port (default: 4242) | ❌ |

### Customization
- **Products**: Edit the order section in `public/index.html`
- **Styling**: Modify `public/styles.css` for custom themes
- **Amount**: Change the price in `server.js` (line 25)

## 🛠 Development

### Available Scripts
```bash
npm run dev    # Start development server
npm test       # Run tests (placeholder)
```

### Adding Features
1. **New Products**: Update the order section in HTML
2. **Custom Styling**: Modify CSS variables in `styles.css`
3. **Webhooks**: Add webhook endpoints in `server.js`
4. **Database**: Integrate with your preferred database

## 🚀 Deployment

### Environment Setup
1. Set `NODE_ENV=production`
2. Use your **Production API Key** from Primer
3. Update CORS settings if needed

### Hosting Options
- **Vercel**: `vercel --prod`
- **Netlify**: Connect your Git repository
- **Heroku**: `git push heroku main`
- **Railway**: Connect GitHub repository

## 🔒 Security Notes

- ✅ Never commit your `.env` file
- ✅ Use environment variables for API keys
- ✅ Enable HTTPS in production
- ✅ Validate all server-side inputs
- ✅ Use Primer's webhook verification

## 📚 Resources

- [Primer Documentation](https://docs.primer.io)
- [Primer API Reference](https://docs.primer.io/api-reference)
- [Test Cards Guide](https://docs.primer.io/testing/test-cards)
- [Webhook Setup](https://docs.primer.io/webhooks)

## 🆘 Troubleshooting

### Common Issues

**"No client token received"**
- Check your API key in `.env`
- Verify Primer account is active
- Ensure you're using sandbox keys for testing

**"Payment form not loading"**
- Check browser console for errors
- Verify Primer SDK is loaded
- Check network connectivity

**"Server not starting"**
- Ensure port 4242 is available
- Check Node.js version (v16+)
- Run `npm install` to ensure dependencies

### Getting Help
- Check [Primer Support](https://primer.io/support)
- Review the [documentation](https://docs.primer.io)
- Open an issue in this repository

