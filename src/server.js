const express = require('express');
const bodyParser = require('body-parser');
const pricingRoutes = require('./routes/pricingRoutes');
const config = require('./config/config');

// eslint-disable-next-line import/order, import/no-extraneous-dependencies
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/pricing', pricingRoutes);

const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
