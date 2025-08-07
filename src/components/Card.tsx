import type { CardDto } from '@/types';
import { useUi } from '@/store/uiStore';
import CardImage from './CardImage';
import CardBody from './CardBody';
import Button from './Button';
import clsx from 'clsx';

export default function Card({ data }: { data: CardDto }) {
  const { selectedId, setSelectedId } = useUi();
  const isSelected = selectedId === data.id;

  return (
    <article
      className={clsx(
        'flex flex-col rounded-lg shadow-lg transition-colors duration-300 bg-white dark:bg-gray-800',
        isSelected
          ? 'border-4 border-blue-500'
          : 'border border-gray-200 dark:border-gray-700 hover:border-blue-500',
        'max-w-sm w-full',
      )}
    >
      <CardImage src={data.img} heading={data.heading} />
      <CardBody heading={data.heading} sub={data.sub} paragraphs={data.body} />
      <div className="mt-auto p-4 pt-0">
        <Button onClick={() => setSelectedId(data.id)} label={data.cta} />
      </div>
    </article>
  );
}
