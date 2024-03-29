class PricingService {
  static calculatePrice(basePrice, perKmPrice, totalDistance) {
    const baseCost = basePrice * 100; // Convert base price to cents
    const additionalKmCost = (totalDistance - 5) * perKmPrice * 100; // Convert additional km cost to cents
    const totalPrice = (baseCost + additionalKmCost) / 100; // Convert back to euros
    return totalPrice;
  }
}

module.exports = PricingService;
