import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Loading } from '../Loading';

describe('Loading', () => {
  it('renders spinner and text', () => {
    render(<Loading />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
