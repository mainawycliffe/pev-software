import { useState } from 'react';
import { Error } from './components/Error';
import { Loading } from './components/Loading';
import { Pagination } from './components/Pagination';
import { SearchBar } from './components/SearchBar';
import { WantedCard } from './components/WantedCard';
import { useWantedList } from './hooks/wanted';

export function HomePage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { data, isLoading, error } = useWantedList({ page, search });

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>FBI Most Wanted</h1>
      <SearchBar value={search} onChange={setSearch} />
      {isLoading && <Loading />}
      {error && <Error message='Error loading data' />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
        {data?.items?.map((person: import('../types/wanted.zod').WantedPerson) => (
          <WantedCard key={person.uid} person={person} />
        ))}
      </div>
      {data && <Pagination page={data.page ?? 1} totalPages={data.totalPages ?? 1} onPage={setPage} />}
    </div>
  );
}
