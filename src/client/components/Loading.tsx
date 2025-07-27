export function Loading() {
  return (
    <div className='flex justify-center items-center py-8'>
      <div role='status' className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500'></div>
      <span className='ml-2 text-blue-500'>Loading...</span>
    </div>
  );
}
