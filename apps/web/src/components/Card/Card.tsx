import type { CardDto } from '@/types';
import { useUi } from '@/context/UiContext';
import CardImage from './CardImage';
import CardBody from './CardBody';
import Button from '../Button';
import clsx from 'clsx';

export default function Card({ data, className = '' }: { data: CardDto, className?: string }) {
  const { selectedId, setSelectedId } = useUi();
  const isSelected = selectedId === data.id;

  return (
    <article
      className={clsx(
        'flex flex-col rounded-2xl shadow-lg transition-all duration-300 bg-white dark:bg-gray-900',
        isSelected
          ? 'border-4 border-blue-500 shadow-xl scale-105'
          : 'border border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:shadow-xl',
        'max-w-sm mx-auto',
        'mb-2',
        'overflow-hidden',
        className
      )}
    >
      <CardImage src={data.img} heading={data.heading} />
      <CardBody heading={data.heading} paragraphs={data.body} />
      <div className="px-4 pb-4 mt-auto">
        <Button onClick={() => setSelectedId(data.id)} label={data.cta} />
      </div>
    </article>
  );
}
