type PaginationProps = {
  page: number;
  totalPages: number;
  onPage: (p: number) => void;
};

export function Pagination({ page, totalPages, onPage }: PaginationProps) {
  return (
    <nav className='flex justify-center items-center gap-4 mt-4' aria-label='Pagination'>
      <button
        className='px-4 py-2 border-2 border-[#d1a100] bg-[#1a2a4f] text-[#d1a100] rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d1a100] hover:text-[#1a2a4f] focus:outline-none focus:ring-2 focus:ring-[#d1a100]'
        disabled={page === 1}
        onClick={() => onPage(page - 1)}
        aria-label='Previous page'>
        Prev
      </button>
      <span className='px-2 text-[#d1a100] font-bold text-lg' aria-live='polite'>
        Page {page} of {totalPages}
      </span>
      <button
        className='px-4 py-2 border-2 border-[#d1a100] bg-[#1a2a4f] text-[#d1a100] rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d1a100] hover:text-[#1a2a4f] focus:outline-none focus:ring-2 focus:ring-[#d1a100]'
        disabled={page === totalPages}
        onClick={() => onPage(page + 1)}
        aria-label='Next page'>
        Next
      </button>
    </nav>
  );
}
