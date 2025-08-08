import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UiProvider } from '@/context/UiContext';
import Card from '@/components/Card';
import type { CardDto } from '@/types';

const stub: CardDto = { id: 99, heading: 'X', body: ['Y'], img: 'z', cta: 'Select' };

test('border switches on click', async () => {
  render(
    <UiProvider>
      <Card data={stub} />
    </UiProvider>,
  );
  const btn = screen.getByRole('button', { name: /select/i });
  expect(btn.closest('article')).not.toHaveClass('border-blue-500');
  await userEvent.click(btn);
  expect(btn.closest('article')).toHaveClass('border-blue-500');
});

test('default border is gray when unselected', () => {
  render(
    <UiProvider>
      <Card data={stub} />
    </UiProvider>,
  );
  const btn = screen.getByRole('button', { name: /select/i });
  expect(btn.closest('article')).toHaveClass('border-gray-200');
});
