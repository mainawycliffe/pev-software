import { useQuery } from '@tanstack/react-query';
import { WantedListResponse } from '../../types/wanted';

export function useWantedList(params: { page: number; search?: string; field_offices?: string }) {
  return useQuery<WantedListResponse>({
    queryKey: ['wanted', params],
    queryFn: async () => {
      const url =
        `/api/wanted?page=${params.page}&pageSize=20` +
        (params.search ? `&search=${encodeURIComponent(params.search)}` : '') +
        (params.field_offices ? `&field_offices=${encodeURIComponent(params.field_offices)}` : '');
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
  });
}
