import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Error } from '../Error';

describe('Error', () => {
  it('renders default error message', () => {
    render(<Error />);
    expect(screen.getByText(/An error occurred/i)).toBeInTheDocument();
  });

  it('renders custom error message', () => {
    render(<Error message='Custom error' />);
    expect(screen.getByText(/Custom error/i)).toBeInTheDocument();
  });
});
