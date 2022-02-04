import request from 'supertest';
import app from '../src/app';
import ItemModel from '../src/models/item.model';

describe('test create route', () => {
  const item = {
    title: 'Apple',
    photo:
      'https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg',
    description: 'An apple is an edible fruit produced by an apple tree.',
    shortDescription: 'An apple is an edible fruit produced by an apple tree.',
  };

  test('Should have key title and photo when created', async () => {
    const mockCreateItem = jest.fn((): any => item);
    jest
      .spyOn(ItemModel.prototype, 'save')
      .mockImplementation(() => mockCreateItem());

    const res = await request(app).post('/api/item').send(item);
    expect(mockCreateItem).toHaveBeenCalledTimes(1);
    expect(res.body.success).toEqual(true);
    expect(res.body.data).toHaveProperty('title');
    expect(res.body.data).toHaveProperty('photo');
  });
});
