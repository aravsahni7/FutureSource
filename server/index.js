import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data', 'subscribers.json');

// Middleware
app.use(cors());
app.use(express.json());

// Ensure data directory and file exist
const ensureDataFile = () => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
};

// Routes
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  ensureDataFile();

  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    
    // Check if email already exists
    if (data.find(sub => sub.email === email)) {
      return res.status(200).json({ message: 'Already subscribed' });
    }

    data.push({ email, subscribedAt: new Date().toISOString() });
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    
    console.log(`New subscriber: ${email}`);
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Error saving subscriber:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
  ensureDataFile();
});
