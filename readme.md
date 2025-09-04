# Primer Checkout Demo
A professional, production-ready checkout page using Primer Universal Checkout.

### Prerequisites
- Node.js (v16 or higher)
- A Primer account with API access

###  Install
npm i

# Edit .env with your Primer API key
PRIMER_API_KEY=your_primer_api_key_here
PORT=3000
```

### 3. Get Your Primer API Key
1. Sign up at [Primer.io](https://sandbox-dashboard.primer.io/)
2. Go to your dashboard
3. Navigate to Developers section then **API Keys**
4. Create & Copy your **Sandbox API Key**
5. Paste it in your `.env` file

### 4. Run the Application
```bash
# Start the development server
npm run dev

# Open your browser to
http://localhost:3000
```



## 🧪 Testing

### Test Cards
Use these test card numbers for safe testing:

| Card Number | Description |
|-------------|-------------|
| `4242 4242 4242 4242` | Visa (Success) |
| `4000 0000 0000 0002` | Visa (Declined) |
| `4916 9940 6425 2017` | 3DS (Success) |


**Test Details:**
- Use any future expiry date (e.g., 12/25)
- Use any 3-digit CVC (e.g., 123)



## 📁 Project Structure

```
primer/
├── public/
│   ├── index.html          # Main checkout page
│   ├── primer.js           # Frontend JavaScript
│   └── styles.css          # CSS styling
├── server.js               # Express backend
├── package.json            # Dependencies
├── .env.example            # Environment template
└── readme.md              # This file
```



### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `PRIMER_API_KEY` | Your Primer sandbox API key |
| `PORT` | Server port (default: 4242) | 


### Customization
- **Products**: Edit the order section in `public/index.html`
- **Styling**: Modify `public/styles.css` for custom themes
- **Amount**: Change the price in `server.js` (line 25)



### Available Scripts
```bash
npm run dev    # Start development server

```


## 📚 Resources

- [Primer Documentation](https://primer.io/docs/get-started/overview)
- [Test Cards Guide](https://primer.io/docs/testing/overview)
