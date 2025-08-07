import { useEffect, useState } from 'react';
import type { CardDto } from '@/types';

export const useCards = () => {
  const [cards, setCards] = useState<CardDto[]>([]);
  const [status, setStatus] = useState<'idle'|'loading'|'error'|'done'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus('loading');
    fetch('/data/cards.json')
      .then(r => {
        if (!r.ok) throw new Error('Network response was not ok');
        return r.json();
      })
      .then(setCards)
      .then(() => setStatus('done'))
      .catch(() => {
        setStatus('error');
        setError('Could not load cards. Please try again later.');
      });
  }, []);

  return { cards, status, error };
};
