import { http } from 'msw';
import { setupServer } from 'msw/node';

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
    });
  }),
  http.get('/api/wanted/:uid', ({ params }) => {
    return Response.json({
      uid: params.uid,
      title: 'John Doe',
      description: 'Detailed info',
      field_offices: ['NYC'],
      images: [{ original: 'https://example.com/image.jpg' }],
      reward_text: 'Reward',
      remarks: 'No remarks',
      url: 'https://example.com',
    });
  }),
];

export const server = setupServer(...handlers);

// ...existing code...
