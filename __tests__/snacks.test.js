const request = require('supertest');
const app = require('../index');

describe('Snacks API', () => {
  it('should fetch all snacks', async () => {
    const response = await request(app)
    .get('/snacks')
    .set('x-api-key', process.env.API_KEY);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });

});