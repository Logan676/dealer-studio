import type { CardDto } from '@/types';
import { useUi } from '@/store/uiStore';
import CardImage from './CardImage';
import CardBody from './CardBody';
import Button from './Button';
import clsx from 'clsx';

export default function Card({ data, index }: { data: CardDto; index: number }) {
  const { selectedId, setSelectedId } = useUi();
  const isSelected = selectedId === data.id;

  return (
    <article
      className={clsx(
        'flex flex-col rounded-lg shadow-lg transition-[border] duration-300',
        isSelected ? 'border-4 border-blue-500' : 'border border-gray-200 dark:border-gray-700',
        'max-w-sm w-full',
      )}
    >
      <CardImage src={data.img} heading={data.heading} />
      <CardBody heading={data.heading} sub={data.sub} paragraphs={data.body} />
      <Button onClick={() => setSelectedId(data.id)} label={data.cta} />
    </article>
  );
}
