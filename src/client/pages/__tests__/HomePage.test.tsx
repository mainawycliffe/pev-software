import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { server } from '../../../test/mswSetup';
import { HomePage } from '../HomePage';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function renderWithQuery(ui: React.ReactElement) {
  const queryClient = new QueryClient();
  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
}

describe('HomePage', () => {
  it('renders wanted list from API', async () => {
    renderWithQuery(<HomePage />);
    // There are multiple elements with this text, check header specifically
    const headings = screen.getAllByText(/FBI Most Wanted/i);
    expect(headings[0].tagName).toMatch(/h1/i);

    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  });

  it('shows loading indicator', async () => {
    renderWithQuery(<HomePage />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
