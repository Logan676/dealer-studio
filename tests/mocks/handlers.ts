import { http, HttpResponse } from 'msw';
import type { CardDto } from '@/types';

const cards: CardDto[] = [
  { id: 1, heading: 'Test Card', body: ['Lorem ipsum'], img: '/img.jpg', cta: 'Select' }
];

export const handlers = [
  http.get('/data/cards.json', () => HttpResponse.json(cards)),
];
