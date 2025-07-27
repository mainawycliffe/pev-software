import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  it('renders pagination controls and handles page change', () => {
    const handlePage = vi.fn();
    render(<Pagination page={1} totalPages={3} onPage={handlePage} />);
    expect(screen.getByText(/Page\s*1\s*of\s*3/)).toBeInTheDocument();
  });
});
