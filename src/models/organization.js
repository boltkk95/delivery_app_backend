const db = require('../db');

class Organization {
  static async findById(id) {
    const query = 'SELECT * FROM Organization WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }
}

module.exports = Organization;
