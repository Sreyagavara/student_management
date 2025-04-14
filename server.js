const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

const PORT = process.env.PORT || 5000; // Use the port from .env or default to 5000

console.log("Mongo URI from .env:", process.env.MONGO_URI);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Student Management System Backend');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const studentRoutes = require('./routes/studentRoutes');
app.use('/api/students', studentRoutes); // Register the routes with the server
