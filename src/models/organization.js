const db = require('../db');

class Pricing {
  static async findPrice(organizationId, itemType, zone) {
    try {
      // Validate input parameters
      if (!organizationId || !itemType || !zone) {
        throw new Error('Missing required parameters');
      }

      const query =
        'SELECT * FROM Pricing WHERE organization_id = $1 AND item_type = $2 AND zone = $3';

      // Logging the executed query
      console.log('Executing query:', query);

      const { rows } = await db.query(query, [organizationId, itemType, zone]);

      if (rows.length === 0) {
        return null; // Return null if pricing information not found
      }

      return rows[0];
    } catch (error) {
      console.error('Error fetching pricing:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
}

module.exports = Pricing;
