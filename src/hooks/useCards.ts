import { useEffect, useState } from 'react';
import type { CardDto } from '@/types';

export const useCards = () => {
  const [cards, setCards] = useState<CardDto[]>([]);
  const [status, setStatus] = useState<'idle'|'loading'|'error'|'done'>('idle');

  useEffect(() => {
    setStatus('loading');
    fetch('/data/cards.json')
      .then(r => r.json())
      .then(setCards)
      .then(() => setStatus('done'))
      .catch(() => setStatus('error'));
  }, []);

  return { cards, status };
};
