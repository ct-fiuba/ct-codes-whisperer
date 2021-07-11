const app = require('../../src/app')();
const request = require('supertest');
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/test_db';
mongoose.connect(mongoURL);

let server;

describe('App test', () => {
  beforeAll(async () => {
    server = await app.listen(5005);
  });

  afterAll(async (done) => {
    await mongoose.connection.close();
    await server.close(done);
  });

  describe('ping', () => {
    test('should return 200', async () => {
      await request(server).get('/ping').expect(200);
    });
  });
});
