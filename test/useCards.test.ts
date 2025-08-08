import { renderHook, waitFor } from '@testing-library/react';
import { useCards } from '@/hooks/useCards';

// ensure msw mock data is used

it('fetches cards from API', async () => {
  const { result } = renderHook(() => useCards());
  await waitFor(() => expect(result.current.status).toBe('done'));
  expect(result.current.cards).toHaveLength(1);
  expect(result.current.cards[0].heading).toBe('Test Card');
});
