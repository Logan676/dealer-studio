import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UiProvider } from '@/context/UiContext';
import Card from '@/components/Card';
import type { CardDto } from '@/types';

const stub: CardDto = { id: 99, heading: 'X', body: ['Y'], img: 'z', cta: 'Select' };

const renderCard = (data: CardDto = stub) => {
  render(
    <UiProvider>
      <Card data={data} />
    </UiProvider>,
  );

  const button = screen.getByRole('button', { name: /select/i });
  return { button, card: button.closest('article') };
};

describe('Card', () => {
  it('border switches on click', async () => {
    const { button, card } = renderCard();
    expect(card).not.toHaveClass('border-blue-500');
    await userEvent.click(button);
    expect(card).toHaveClass('border-blue-500');
  });

  it('default border is gray when unselected', () => {
    const { card } = renderCard();
    expect(card).toHaveClass('border-gray-200');
  });
});
