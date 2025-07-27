type Props = {
  value: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
};

export function SearchBar({ value, onChange, ariaLabel }: Props) {
  return (
    <input
      className='w-full p-2 border rounded mb-2 bg-[#1a2a4f] text-[#d1a100] placeholder:text-[#d1a2a4f] focus:outline-none focus:ring-2 focus:ring-[#d1a100]'
      type='text'
      placeholder='Search by name or alias...'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={ariaLabel || 'Search'}
    />
  );
}
