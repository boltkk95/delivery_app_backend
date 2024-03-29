const express = require('express');
const bodyParser = require('body-parser');
const pricingRoutes = require('./routes/pricingRoutes');
const config = require('./config/config');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/pricing', pricingRoutes);

const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
