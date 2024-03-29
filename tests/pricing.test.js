/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
// import {request} from 'supertest'
const server = require('../src/server');

describe('POST /api/pricing/calculate-price', () => {
  it('should return 400 if any required field is missing', async () => {
    const payloads = [
      { // Missing zone
        organizationId: '1',
        totalDistance: 12,
        itemType: 'perishable',
      },
      { // Missing organizationId
        zone: 'central',
        totalDistance: 12,
        itemType: 'perishable',
      },
      { // Missing totalDistance
        zone: 'central',
        organizationId: '1',
        itemType: 'perishable',
      },
      { // Missing itemType
        zone: 'central',
        organizationId: '1',
        totalDistance: 12,
      },
    ];

    const promises = payloads.map(payload =>
      request(server)
        .post('/api/pricing/calculate-price')
        .send(payload)
    );

    const responses = await Promise.all(promises);

    responses.forEach(response => {
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Missing required fields');
    });
  });
  

  // it('should calculate total price for perishable items', async () => {
  //   const payload = {
  //     zone: 'central',
  //     organization_id: '1',
  //     total_distance: 12,
  //     item_type: 'perishable',
  //   };

  //   const response = await request(server)
  //     .post('/api/pricing/calculate-price')
  //     .send(payload);

  //   expect(response.status).toBe(200);
  //   expect(response.body.total_price).toBe(20.5);
  // });

  // it('should calculate total price for non-perishable items', async () => {
  //   const payload = {
  //     zone: 'central',
  //     organization_id: '1',
  //     total_distance: 12,
  //     item_type: 'non-perishable',
  //   };

  //   const response = await request(server)
  //     .post('/api/pricing/calculate-price')
  //     .send(payload);

  //   expect(response.status).toBe(200);
  //   expect(response.body.total_price).toBe(19);
  // });

  // it('should return 404 for invalid organization_id', async () => {
  //   const payload = {
  //     zone: 'central',
  //     organization_id: '999',
  //     total_distance: 12,
  //     item_type: 'perishable',
  //   };

  //   const response = await request(server)
  //     .post('/api/pricing/calculate-price')
  //     .send(payload);

  //   expect(response.status).toBe(404);
  //   expect(response.body.error).toBe('Organization not found');
  // });

  // it('should return 404 for invalid item_type', async () => {
  //   const payload = {
  //     zone: 'central',
  //     organization_id: '1',
  //     total_distance: 12,
  //     item_type: 'invalid-type',
  //   };

  //   const response = await request(server)
  //     .post('/api/pricing/calculate-price')
  //     .send(payload);

  //   expect(response.status).toBe(404);
  //   expect(response.body.error).toBe('Item not found');
  // });

  // 
  }
);
