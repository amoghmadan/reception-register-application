import 'dotenv/config';
import mongoose from 'mongoose';
import request from 'supertest';

import {getRequestListener} from '../src/cli/bootstrap';
import {User} from '../src/models';
import {generateKey} from '../src/utilities/token';

const EMAIL = 'test.user@email.com';
const PASSWORD = 'foo';

const app = getRequestListener();

describe('Account API Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    await User.create({
      email: EMAIL,
      firstName: 'Test',
      lastName: 'User',
      password: PASSWORD,
      isActive: true,
      dateJoined: new Date(),
    });
  });

  afterAll(async () => {
    await User.deleteOne({email: EMAIL});
    await mongoose.connection.close();
  });

  describe('POST /api/v1/accounts/login', () => {
    it('Performs Account Login', async () => {
      const payload = {email: EMAIL, password: PASSWORD};

      const response = await request(app)
          .post('/api/v1/accounts/login')
          .send(payload);
      expect(response.status).toBe(201);
      expect(response.body.token).toBeDefined();
    });
  });

  describe('GET /api/v1/accounts/detail', () => {
    it('Retrieves Account Details', async () => {
      const user = await User.findOne({email: EMAIL});
      user.token = {key: generateKey()};
      await user.save();

      const response = await request(app)
          .get('/api/v1/accounts/detail')
          .set('Authorization', `Token ${user.token.key}`);

      expect(response.status).toBe(200);
      expect(response.body.email).toBe(user.email);
      expect(response.body.firstName).toBe(user.firstName);
      expect(response.body.lastName).toBe(user.lastName);
    });

    it('Returns 401 if not authorized', async () => {
      const response = await request(app).get('/api/v1/accounts/detail');
      expect(response.status).toBe(401);
    });
  });

  describe('DELETE /api/v1/accounts/logout', () => {
    it('Performs Account Logout', async () => {
      const user = await User.findOne({email: EMAIL});
      user.token = {key: generateKey()};
      await user.save();

      const response = await request(app)
          .delete('/api/v1/accounts/logout')
          .set('Authorization', `Token ${user.token.key}`);
      expect(response.status).toBe(204);
    });

    it('Returns 401 if not authorized', async () => {
      const response = await request(app).delete('/api/v1/accounts/logout');
      expect(response.status).toBe(401);
    });
  });
});
