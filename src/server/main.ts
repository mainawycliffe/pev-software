import express from 'express';
import ViteExpress from 'vite-express';
import { getWantedList } from './services/fbiService.js';

const app = express();

app.use(express.json());

// GET /api/wanted - paginated list with filters
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
