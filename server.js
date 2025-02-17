const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/api/userRoutes'); // Import user routes
const thoughtRoutes = require('./routes/api/thoughtRoutes'); // Import thought routes

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/social-network-api', {
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

