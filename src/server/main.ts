import express from 'express';
import ViteExpress from 'vite-express';
import { getWantedList } from './services/fbiService.js';

const app = express();

app.use(express.json());

/**
 * GET /api/wanted
 *
 * Fetches a paginated list of wanted persons from the FBI Wanted API (proxied and cached).
 *
 * Query Parameters:
 * @param {number} [page=1] - Page number for pagination.
 * @param {number} [pageSize=20] - Number of results per page.
 * @param {string} [search] - Search term (e.g., name, keywords).
 * @param {string} [field_offices] - Filter by field office.
 *
 * Response:
 * 200: JSON object matching {@link WantedListResponse} Zod schema (see types/wanted.zod.ts).
 * 500: Error object if request fails.

 * Example Response (see WantedListResponse in types/wanted.zod.ts):
 * {
 *   "page": 1,
 *   "pageSize": 20,
 *   "total": 100,
 *   "results": [ ... ]
 * }
 */
app.get('/api/wanted', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 20;
    const search = req.query.search as string | undefined;
    const field_offices = req.query.field_offices as string | undefined;
    const result = await getWantedList(page, pageSize, { search, field_offices });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

ViteExpress.listen(app, 3000, () => console.log('Server is listening on port 3000...'));
