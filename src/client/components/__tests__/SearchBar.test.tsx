import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { SearchBar } from '../SearchBar';

describe('SearchBar', () => {
  it('renders input and calls onChange', () => {
    const handleChange = vi.fn();
    render(<SearchBar value='' onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledWith('test');
  });
});
