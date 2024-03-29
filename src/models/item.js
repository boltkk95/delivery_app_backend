const db = require('../db');

class Item {
  static async findByType(type) {
    try {
      // Validate input parameter
      if (!type) {
        throw new Error('Missing required parameter');
      }

      const query = 'SELECT * FROM Item WHERE type = $1';

      // Logging the executed query
      console.log('Executing query:', query);

      const { rows } = await db.query(query, [type]);

      if (rows.length === 0) {
        return null; // Return null if item information not found
      }

      return rows[0];
    } catch (error) {
      console.error('Error fetching item:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
}

module.exports = Item;
