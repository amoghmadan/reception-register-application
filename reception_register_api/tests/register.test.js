import 'dotenv/config';
import mongoose from 'mongoose';
import request from 'supertest';

import {getRequestListener} from '../src/cli/bootstrap';
import {User, Register} from '../src/models';
import {generateKey} from '../src/utilities/token';

const app = getRequestListener();

describe('Register API Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    await User.create({
      email: 'test2.user@email.com',
      firstName: 'Test 2',
      lastName: 'User',
      password: 'foo',
      isActive: true,
      dateJoined: new Date(),
      token: {key: generateKey()},
    });
  });

  afterAll(async () => {
    await Register.deleteMany({});
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  describe('POST /api/v1/register/entries', () => {
    it('Performs Create Register', async () => {
      const user = await User.findOne({email: 'test2.user@email.com'});
      const payload = {
        name: 'John Doe',
        company: 'Big One',
        personToMeet: 'San Holo',
        mobile: 1122334455,
        purpose: 'Develop Application',
        in: new Date().toISOString(),
        sign: 'Attended',
        out: new Date().toISOString(),
        securitySign: 'Guard 1',
        remarks: 'Some remarks',
      };

      const response = await request(app)
          .post('/api/v1/register/entries')
          .send(payload)
          .set('Authorization', `Token ${user.token.key}`);
      expect(response.status).toBe(201);
    });

    it('Returns 401 if not authorized', async () => {
      const response = await request(app).get('/api/v1/register/entries');
      expect(response.status).toBe(401);
    });
  });
});
