import express from 'express';
import path from 'path';
import dotenv from 'dotenv-defaults';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

app.post('/create-client-token', async (req, res) => {
  try {
    const response = await fetch(
      'https://api.sandbox.primer.io/client-session',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.PRIMER_API_KEY, // store in .env
        },
        body: JSON.stringify({
          orderId: `order_${Date.now()}`,
          currencyCode: 'CAD',
          amount: 1999,
        }),
      }
    );

    const data = await response.json();
    res.json({ clientToken: data.clientToken });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 4242;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
