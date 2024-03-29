const db = require('../db');

class Pricing {
  static async findPrice(organizationId, itemType, zone) {
    const query =
      'SELECT * FROM Pricing WHERE organization_id = $1 AND item_type = $2 AND zone = $3';
    const { rows } = await db.query(query, [organizationId, itemType, zone]);
    return rows[0];
  }
}

module.exports = Pricing;
