import request from 'supertest';

import app from '../src/app';

describe('Integration tests for App', () => {
  test('Should respond to get with status code 200', () => (
    request(app)
      .get('/yolo')
      .expect(200)
  ));
  test('Should respond to get with status code 200', () => (
    request(app)
      .post('/peanuts')
      .expect(200)
  ));
});
