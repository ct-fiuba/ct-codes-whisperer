const app = require('../../src/app')();
const CodeCompromised = require('../../src/models/schemas/CompromisedCode');
const request = require('supertest');
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/test_db';
mongoose.connect(mongoURL);

let server;

let visitCompromised = {
  spaceId: new mongoose.Types.ObjectId(),
  userGeneratedCode: "anUserGeneratedCode",
  dateDetected: "2021-08-10",
  risk: 1,
}

describe('App test', () => {
  beforeAll(async () => {
    server = await app.listen(5008);
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

  describe('billboard', () => {

    describe('get billboard', () => {
      beforeAll(async () => {
        const code = new CodeCompromised(visitCompromised)
        await code.save()
      });
      test('should return all compromised codes', async () => {
        await request(server).get('/billboard').then(res => {
          expect(res.status).toBe(200);
          expect(res.body).toHaveLength(1);
        });
      });

      test('should return by risk', async () => {
        await request(server).get('/billboard?risk=0').then(res => {
          expect(res.status).toBe(200);
          expect(res.body).toHaveLength(0);
        });
      });

      test('should return all codes from date', async () => {
        await request(server).get('/billboard?from=2021-08-01').then(res => {
          expect(res.status).toBe(200);
          expect(res.body).toHaveLength(1);
        });
      });
    });
  });
});
