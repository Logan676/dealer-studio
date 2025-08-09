import { useQuery } from '@tanstack/react-query';
import type { CardDto } from '@/types';

export const useCards = () => {
  const { data, status, error } = useQuery<CardDto[]>(
    {
      queryKey: ['cards'],
      queryFn: async () => {
        const res = await fetch('/data/cards.json');
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      },
    }
  );

  return { data, status, error };
};
