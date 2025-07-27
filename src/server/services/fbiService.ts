import { createCache } from 'cache-manager';

// Set cache TTL to 30 minutes (1800 seconds)
const CACHE_TTL_SECONDS = 1800;
const cache = createCache({ ttl: CACHE_TTL_SECONDS });

// Base URL for FBI Wanted API
const FBI_API_BASE = 'https://api.fbi.gov/wanted/v1';

export type WantedPerson = {
  uid: string;
  title: string;
  description?: string;
  field_offices?: string[];
  images?: Array<{ large?: string; thumb?: string; caption?: string }>;
};

export type WantedListResponse = {
  items: WantedPerson[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type WantedListFilters = {
  search?: string;
  field_offices?: string;
};

/**
 * Fetches a paginated list of wanted persons from the FBI Wanted API.
 * Supports general search and filter by state/office.
 * Handles rate-limiting errors gracefully.
 */

export async function getWantedList(
  page = 1,
  pageSize = 20,
  filters: WantedListFilters = {},
): Promise<WantedListResponse> {
  const params = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
  });
  if (filters.search) {
    params.append('title', filters.search);
  }
  if (filters.field_offices) {
    params.append('field_offices', filters.field_offices);
  }

  const url = `${FBI_API_BASE}/list?${params.toString()}`;

  // Check cache
  const cacheKey = `list:${url}`;

  const cached = await cache.get<WantedListResponse>(cacheKey);

  if (cached) {
    return {
      items: Array.isArray(cached.items) ? cached.items : [],
      total: typeof cached.total === 'number' ? cached.total : 0,
      page: page,
      pageSize: pageSize,
      totalPages: Math.ceil((cached.total || 0) / pageSize),
    };
  }

  const response = await fetch(url);

  if (response.status === 429) {
    throw new Error('Rate limit exceeded. Please try again later.');
  }

  if (!response.ok) {
    throw new Error(`FBI API error: ${response.status}`);
  }

  const data = await response.json();

  // Store in cache
  await cache.set(cacheKey, data);

  return {
    items: Array.isArray(data.items) ? data.items : [],
    total: typeof data.total === 'number' ? data.total : 0,
    page: page,
    pageSize: pageSize,
    totalPages: Math.ceil((data.total || 0) / pageSize),
  };
}
