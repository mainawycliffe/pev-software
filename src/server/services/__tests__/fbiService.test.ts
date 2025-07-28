import nock from 'nock';
import { afterEach, describe, expect, it } from 'vitest';
import { WantedListResponse } from '../../../types/wanted.zod.js';
import { getWantedList } from '../fbiService.js';

const FBI_API_BASE = 'https://api.fbi.gov';

describe('fbiService', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('getWantedList', () => {
    it('returns paginated wanted list', async () => {
      const mockResponse: WantedListResponse = {
        items: [{ uid: '123', title: 'John Doe', field_offices: ['NY'], images: [] }],
        total: 1,
        page: 1,
        pageSize: 20,
        totalPages: 1,
      };

      nock(FBI_API_BASE).get('/wanted/v1/list').query(true).reply(200, mockResponse);

      const result = await getWantedList(1, 20, {});
      expect(result).toEqual(mockResponse);
    });
  });
});
