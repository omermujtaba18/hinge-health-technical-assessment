// tree.controller.test.ts

import request from 'supertest';
import app from '../../src/app';

describe('Tree Controller', () => {
  let api: any;

  beforeAll(() => {
    api = request(app);
  });

  describe('GET /tree', () => {
    it('should return the default tree', async () => {
      const response = await api.get('/api/tree');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        {
          '1': {
            label: 'root',
            children: [],
          },
        },
      ]);
    });

    it('should return the updated tree after new node added', async () => {
      await api.post('/api/tree').send({
        parent: '1',
        label: 'cat',
      });

      const response = await api.get('/api/tree');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        {
          '1': {
            label: 'root',
            children: [{ '2': { label: 'cat', children: [] } }],
          },
        },
      ]);
    });
  });

  describe('GET /POST', () => {
    it('should add new node to tree', async () => {
      const response = await api.post('/api/tree').send({
        parent: '1',
        label: 'cat',
      });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ children: [], id: 3, label: 'cat' });
    });

    it('should return 404 error if parent node does not exists', async () => {
      const response = await api.post('/api/tree').send({
        parent: '100',
        label: 'cat',
      });

      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        code: 404,
        message: 'Parent node not found',
      });
    });
  });
});
