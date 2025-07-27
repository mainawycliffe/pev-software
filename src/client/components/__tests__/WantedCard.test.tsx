import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WantedCard } from '../WantedCard';

describe('WantedCard', () => {
  const person = {
    uid: '123',
    title: 'John Doe',
    description: 'Wanted for testing',
    field_offices: ['NYC'],
    images: [{ large: 'https://example.com/image.jpg', caption: 'John Doe' }],
  };

  it('renders wanted person details', () => {
    render(<WantedCard person={person} />);
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Wanted for testing/i)).toBeInTheDocument();
    // If no image, check for SVG placeholder
    const img = screen.queryByAltText(/John Doe/i);
    if (img) {
      expect(img).toBeInTheDocument();
    } else {
      // Check for SVG placeholder
      expect(screen.getByText('FBI')).toBeInTheDocument();
    }
  });
});
