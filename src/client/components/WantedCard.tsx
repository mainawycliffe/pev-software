import type { WantedPerson } from '../../types/wanted.zod';

export function WantedCard({ person }: { person: WantedPerson }) {
  return (
    <div className='bg-[#0a1f44] border-2 border-[#d1a100] rounded-xl shadow-lg p-4 flex flex-col items-center justify-between min-h-[400px] w-full mx-auto transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10 hover:border-4 hover:border-[#ffd700] focus-within:border-4 focus-within:border-[#ffd700] cursor-pointer'>
      <div className='w-full h-[264px] bg-[#1a2a4f] flex items-center justify-center overflow-hidden rounded mb-2'>
        {person.images && person.images.length > 0 ? (
          person.images[0].thumb ? (
            <img
              src={person.images[0].thumb}
              alt={person.title ? `${person.title} - Wanted person photo` : 'Wanted person photo'}
              className='object-cover w-full h-full'
              style={{ aspectRatio: '3/4' }}
            />
          ) : person.images[0].original ? (
            <img
              src={person.images[0].original}
              alt={person.title ? `${person.title} - Wanted person photo` : 'Wanted person photo'}
              className='object-cover w-full h-full'
              style={{ aspectRatio: '3/4' }}
            />
          ) : (
            <svg
              viewBox='0 0 80 106'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-full h-full text-gray-400'
              style={{ aspectRatio: '3/4' }}>
              <rect width='80' height='106' rx='12' fill='#1a2a4f' />
              <circle cx='40' cy='40' r='22' fill='#d1a100' />
              <ellipse cx='40' cy='80' rx='28' ry='18' fill='#d1a100' />
              <text x='40' y='60' textAnchor='middle' fill='#1a2a4f' fontSize='16' fontWeight='bold' dy='.3em'>
                FBI
              </text>
            </svg>
          )
        ) : (
          <svg
            viewBox='0 0 80 106'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full h-full text-gray-400'
            style={{ aspectRatio: '3/4' }}>
            <rect width='80' height='106' rx='12' fill='#1a2a4f' />
            <circle cx='40' cy='40' r='22' fill='#d1a100' />
            <ellipse cx='40' cy='80' rx='28' ry='18' fill='#d1a100' />
            <text x='40' y='60' textAnchor='middle' fill='#1a2a4f' fontSize='16' fontWeight='bold' dy='.3em'>
              FBI
            </text>
          </svg>
        )}
      </div>
      <h2
        className='font-bold text-lg text-[#d1a100] mb-1 text-center drop-shadow truncate max-w-full'
        title={person.title}>
        {person.title}
      </h2>
      <p className='text-sm text-gray-200 mb-2 text-center line-clamp-4 break-words'>{person.description}</p>
      <a
        className='mt-auto text-[#d1a100] hover:text-white font-semibold underline underline-offset-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-[#ffd700] rounded'
        tabIndex={0}
        aria-label={`View details for ${person.title}`}>
        View Details
      </a>
    </div>
  );
}
