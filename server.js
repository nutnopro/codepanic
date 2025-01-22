const express = require('express');
const cors = require('cors');
const dbConnection = require('./dbConnection'); // เส้นทาง dbConnection ที่ถูกต้อง
const datasetRoutes = require('./datasetRoutes'); // เส้นทาง datasetRoutes ที่ถูกต้อง

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/dataset', datasetRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message || 'Server Error' });
});

// Start Server
app.listen(PORT, async () => {
    try {
        const pool = await dbConnection();
        console.log(`Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Failed to connect to the database:', error.message);
        process.exit(1);
    }
});
