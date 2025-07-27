import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type { WantedPerson } from '../../types/wanted';

interface WantedDetailModalProps {
  open: boolean;
  onClose: () => void;
  person: WantedPerson | null;
}

export default function WantedDetailModal({ open, onClose, person }: WantedDetailModalProps) {
  if (!person) return null;
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='fixed inset-0 z-50 overflow-y-auto' onClose={onClose}>
        <div className='flex min-h-screen items-center justify-center p-4 text-center bg-black/40'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <Dialog.Panel className='w-full max-w-3xl transform overflow-hidden rounded-2xl bg-[#1a2a4f] p-0 text-left align-middle shadow-2xl transition-all border border-[#d1a2a4f]'>
              {/* Gallery */}
              {person.images && person.images.length > 0 && (
                <div
                  className='flex gap-4 overflow-x-auto snap-x px-6 pt-8 pb-8'
                  style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
                  tabIndex={0}
                  aria-label='Image gallery, scroll right to left'
                  onWheel={(e) => {
                    // Lock scroll direction to horizontal only
                    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                      e.currentTarget.scrollLeft += e.deltaY;
                      e.preventDefault();
                    }
                  }}>
                  {person.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.large || img.thumb}
                      alt={img.caption || person.title}
                      className='aspect-3/4 w-48 object-cover rounded-xl border-2 border-[#d1a100] shadow snap-center'
                      style={{ flex: '0 0 auto' }}
                    />
                  ))}
                </div>
              )}
              <div className='px-6 pb-6 pt-2'>
                <Dialog.Title
                  as='h2'
                  className='text-2xl font-extrabold mb-2 text-[#d1a100] drop-shadow bg-[#1a2a4f] rounded px-2 py-1 shadow border-b border-[#d1a100]'>
                  {person.title}
                </Dialog.Title>
                <div className='mb-4 text-[#fffbe6] bg-[#1a2a4f] rounded p-3 shadow-inner border border-[#d1a100]'>
                  {person.description || <span className='italic text-[#d1a100]'>No description available.</span>}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-[#fffbe6]'>
                  {person.sex && (
                    <div>
                      <span className='font-semibold'>Sex:</span> {person.sex}
                    </div>
                  )}
                  {person.race && (
                    <div>
                      <span className='font-semibold'>Race:</span> {person.race}
                    </div>
                  )}
                  {person.nationality && (
                    <div>
                      <span className='font-semibold'>Nationality:</span> {person.nationality}
                    </div>
                  )}
                  {person.hair && (
                    <div>
                      <span className='font-semibold'>Hair:</span> {person.hair}
                    </div>
                  )}
                  {person.eyes && (
                    <div>
                      <span className='font-semibold'>Eyes:</span> {person.eyes}
                    </div>
                  )}
                  {person.height_min && person.height_max && (
                    <div>
                      <span className='font-semibold'>Height:</span> {person.height_min} - {person.height_max} inches
                    </div>
                  )}
                  {person.weight_min && person.weight_max && (
                    <div>
                      <span className='font-semibold'>Weight:</span> {person.weight_min} - {person.weight_max} lbs
                    </div>
                  )}
                  {person.scars_and_marks && (
                    <div>
                      <span className='font-semibold'>Scars/Marks:</span> {person.scars_and_marks}
                    </div>
                  )}
                  {person.aliases && person.aliases.length > 0 && (
                    <div>
                      <span className='font-semibold'>Aliases:</span> {person.aliases.join(', ')}
                    </div>
                  )}
                  {person.field_offices && person.field_offices.length > 0 && (
                    <div>
                      <span className='font-semibold'>Field Offices:</span> {person.field_offices.join(', ')}
                    </div>
                  )}
                </div>
                {person.caution && (
                  <div className='mb-2 p-3 bg-[#1a2a4f] border-l-4 border-[#d32f2f] text-[#fffbe6] rounded shadow'>
                    <span className='font-bold text-[#d32f2f]'>Caution:</span>{' '}
                    <span dangerouslySetInnerHTML={{ __html: person.caution }} className='ml-1' />
                  </div>
                )}
                {person.reward_text && (
                  <div className='mb-2 p-3 bg-[#1a2a4f] border-l-4 border-[#d1a100] text-[#fffbe6] rounded shadow'>
                    <span className='font-bold text-[#d1a100]'>Reward:</span> {person.reward_text}
                  </div>
                )}
                {person.details && (
                  <div className='mb-2 p-3 bg-[#1a2a4f] border-l-4 border-[#1976d2] text-[#fffbe6] rounded shadow'>
                    <span className='font-bold text-[#1976d2]'>Details:</span>{' '}
                    <span dangerouslySetInnerHTML={{ __html: person.details }} className='ml-1' />
                  </div>
                )}
                {person.url && (
                  <div className='mt-4'>
                    <a
                      href={person.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block px-4 py-2 rounded bg-[#d1a100] text-[#1a2a4f] font-bold shadow hover:bg-[#bfa000] focus:outline-none focus:ring-2 focus:ring-[#d1a100]'>
                      View Official FBI Page
                    </a>
                  </div>
                )}
                <button
                  type='button'
                  className='mt-6 w-full rounded bg-[#d1a100] px-4 py-2 text-[#1a2a4f] font-bold hover:bg-[#bfa000] focus:outline-none focus:ring-2 focus:ring-[#d1a100]'
                  onClick={onClose}
                  aria-label='Close details modal'>
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
