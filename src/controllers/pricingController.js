const Organization = require('../models/organization');
const Item = require('../models/item');
const Pricing = require('../models/pricing');
const PricingService = require('../services/pricingService');

class PricingController {
  static async calculatePrice(req, res) {
    try {
      const { zone, organizationId, totalDistance, itemType } = req.body;

      // Validation
      if (!zone || !organizationId || !totalDistance || !itemType) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const organization = await Organization.findById(organizationId);
      if (!organization) {
        return res.status(404).json({ error: 'Organization not found' });
      }

      const item = await Item.findByType(itemType);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }

      const pricing = await Pricing.findPrice(organizationId, itemType, zone);
      if (!pricing) {
        return res.status(404).json({ error: 'Pricing not found' });
      }

      const basePrice = pricing.fix_price_euros;
      const perKmPrice = pricing.km_price_euros;

      const totalPrice = PricingService.calculatePrice(
        basePrice,
        perKmPrice,
        totalDistance
      );

      // Logging
      console.log(`Total price calculated: ${totalPrice} Euros`);

      return res.json({ total_price: totalPrice });
    } catch (error) {
      console.error('Error calculating price:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = PricingController;
