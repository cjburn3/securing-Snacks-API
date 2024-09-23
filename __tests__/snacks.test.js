const request = require('supertest');
const app = require('../index'); // Adjust this path if your app is in a different file

describe('Snacks API', () => {
  it('should fetch all snacks', async () => {
    const response = await request(app).get('/snacks');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });
});