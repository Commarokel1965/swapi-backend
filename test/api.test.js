const supertest = require('supertest');
const app = require('../server');

const port = 5001; // Choose a different port for testing

describe('API Endpoint Tests', () => {
  
  it('should return a 200 OK response', (done) => {
    supertest(app)
      .get('/api/starships')
      .expect(200, done);
  });

});
