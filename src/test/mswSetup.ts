import { http } from 'msw';
import { setupServer } from 'msw/node';

// setup request mocking, using Mock Service Worker for testing
// MSW v2+ handlers using http.get and Response.json
export const handlers = [
  http.get('/api/wanted', () => {
    return Response.json({
      items: [
        {
          uid: '123',
          title: 'John Doe',
          description: 'Wanted for testing',
          field_offices: ['NYC'],
          images: [{ original: 'https://example.com/image.jpg' }],
        },
      ],
      page: 1,
      totalPages: 1,
      total: 1,
    });
  }),
];

export const server = setupServer(...handlers);
