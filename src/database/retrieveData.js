const { query } = require('../db');

async function retrieveData(tableName) {
  try {
    const res = await query(`SELECT * FROM ${tableName}`);
    console.log(`Data from ${tableName}:`, res.rows);
  } catch (error) {
    console.error(`Error retrieving data from ${tableName}:`, error.stack);
  }
}

// Get the table name from command-line arguments
const tableName = process.argv[2];

if (!tableName) {
  console.error('Please provide a table name');
  process.exit(1);
}

retrieveData(tableName);
