import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCards } from '@/hooks/useCards';

// ensure msw mock data is used

it('fetches cards from API', async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result } = renderHook(() => useCards(), { wrapper });
  await waitFor(() => expect(result.current.status).toBe('success'));
  expect(result.current.data).toHaveLength(1);
  expect(result.current.data![0].heading).toBe('Test Card');
});
