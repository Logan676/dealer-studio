export default function CardBody({
  heading,
  sub,
  paragraphs,
}: {
  heading: string;
  sub?: string;
  paragraphs: string[];
}) {
  return (
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{heading}</h3>
      {sub && <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{sub}</p>}
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-gray-700 dark:text-gray-300 mb-3 last:mb-0">
          {p}
        </p>
      ))}
    </div>
  );
}
