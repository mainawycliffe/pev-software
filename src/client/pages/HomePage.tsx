import { useState } from 'react';
import { WantedPerson } from '../../types/wanted.zod';
import { AppLayout } from '../components/AppLayout';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';
import { Pagination } from '../components/Pagination';
import { SearchBar } from '../components/SearchBar';
import { WantedCard } from '../components/WantedCard';
import WantedDetailModal from '../components/WantedDetailModal';
import { useWantedList } from '../hooks/wanted';

export function HomePage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { data, isLoading, error } = useWantedList({ page, search });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<WantedPerson | null>(null);

  return (
    <AppLayout>
      <div className='mb-4 p-2'>
        <SearchBar value={search} onChange={setSearch} aria-label='Search wanted persons' />
      </div>
      {isLoading && <Loading />}
      {error && <Error message='Error loading data' />}
      <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 mt-6 overflow-x-auto p-2'
        role='list'>
        {data?.items && data.items.length > 0
          ? data.items.map((person: WantedPerson) => (
              <button
                key={person.uid}
                type='button'
                className='text-left h-[440px] w-full flex items-stretch'
                onClick={() => {
                  setSelectedPerson(person);
                  setModalOpen(true);
                }}
                aria-label={`View details for ${person.title}`}>
                <WantedCard person={person} />
              </button>
            ))
          : !isLoading && (
              <div className='col-span-full flex flex-col items-center justify-center py-16 text-[#d1a100]'>
                <svg width='80' height='80' fill='none' viewBox='0 0 80 80' className='mb-4' aria-hidden='true'>
                  <circle cx='40' cy='40' r='38' stroke='#d1a100' strokeWidth='4' fill='#1a2a4f' />
                  <text x='40' y='48' textAnchor='middle' fill='#d1a100' fontSize='24' fontWeight='bold'>
                    🤔
                  </text>
                </svg>
                <div className='text-xl font-bold mb-2'>No Most Wanted found!</div>
                <div className='text-sm text-[#d1a100] text-center'>
                  {search ? (
                    <>
                      No results for &quot;{search}&quot;. The FBI is scratching their heads.
                      <br />
                      Try a different search!
                    </>
                  ) : (
                    <>
                      Either everyone is behaving, or the FBI is taking a coffee break.
                      <br />
                      Try a different search or check back later!
                    </>
                  )}
                </div>
              </div>
            )}
      </div>
      <WantedDetailModal open={modalOpen} onClose={() => setModalOpen(false)} person={selectedPerson} />
      {data && data.items && data.items.length > 0 && (
        <Pagination page={data.page ?? 1} totalPages={data.totalPages ?? 1} onPage={setPage} />
      )}
    </AppLayout>
  );
}
