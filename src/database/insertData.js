const { query } = require('../db');

async function insertOrganization(name) {
  const queryText = 'INSERT INTO Organization (name) VALUES ($1) RETURNING *';
  const values = [name];
  const result = await query(queryText, values);
  console.log(`Successfully inserted into Organization:`, result.rows[0]);
}

async function insertItem(type, description) {
  const queryText =
    'INSERT INTO Item (type, description) VALUES ($1, $2) RETURNING *';
  const values = [type, description];
  const result = await query(queryText, values);
  console.log(`Successfully inserted into Item:`, result.rows[0]);
}

async function insertPricing(
  organizationId,
  itemType,
  zone,
  baseDistance,
  basePrice,
  perkmPrice
) {
  const queryText =
    'INSERT INTO Pricing (organization_id, item_type, zone, base_distance_in_km, km_price_euros, fix_price_euros) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [
    organizationId,
    itemType,
    zone,
    baseDistance,
    basePrice,
    perkmPrice,
  ];
  const result = await query(queryText, values);
  console.log(`Successfully inserted into Pricing:`, result.rows[0]);
}

async function insertData(tableName) {
  const args = process.argv.slice(3); // start from index 3 to skip the table name argument

  try {
    switch (tableName) {
      case 'organization': {
        if (args.length !== 1) {
          console.error('Please provide name for Organization');
          return;
        }
        const [orgName] = args;
        await insertOrganization(orgName);
        break;
      }

      case 'item': {
        if (args.length !== 2) {
          console.error('Please provide type and description for Item');
          return;
        }
        const [type, description] = args;
        await insertItem(type, description);
        break;
      }

      case 'pricing': {
        if (args.length !== 6) {
          console.error(
            'Please provide organization_id, item_type, zone, base_distance_in km, km_price_euros, fix_price_euros for Pricing'
          );
          return;
        }
        const [
          organizationId,
          itemType,
          zone,
          baseDistance,
          basePrice,
          perkmPrice,
        ] = args;
        await insertPricing(
          organizationId,
          itemType,
          zone,
          baseDistance,
          basePrice,
          perkmPrice
        );
        break;
      }

      default:
        console.error('Invalid table name');
        break;
    }
  } catch (err) {
    console.error(`Error inserting data into ${tableName}:`, err.stack);
  }
}

// Get the table name from command-line arguments
const tableName = process.argv[2];

if (!tableName) {
  console.error('Please provide a table name');
  process.exit(1);
}

insertData(tableName);
