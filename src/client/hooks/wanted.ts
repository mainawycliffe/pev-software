import { useQuery } from '@tanstack/react-query';
import { WantedListResponse, WantedListResponseSchema } from '../../types/wanted.zod';

type PageRequestParams = {
  page: number;
  search?: string;
  field_offices?: string;
};

export function useWantedList(params: PageRequestParams) {
  return useQuery<WantedListResponse>({
    queryKey: ['wanted', params],
    queryFn: async () => {
      const url =
        `/api/wanted?page=${params.page}&pageSize=20` +
        (params.search ? `&search=${encodeURIComponent(params.search)}` : '') +
        (params.field_offices ? `&field_offices=${encodeURIComponent(params.field_offices)}` : '');
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await res.json();
      try {
        const parsed = WantedListResponseSchema.parse(data);
        return parsed;
      } catch (error) {
        throw new Error('Failed to parse response', { cause: error as Error });
      }
    },
  });
}
