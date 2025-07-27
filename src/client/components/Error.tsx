type ErrorProps = {
  message?: string;
};

export function Error({ message }: ErrorProps) {
  return (
    <div className='text-red-600 bg-red-100 border border-red-300 rounded p-4 my-4'>
      {message || 'An error occurred. Please try again.'}
    </div>
  );
}
