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
    <div className="p-4 flex-1">
      <h3 className="font-bold text-lg mb-1">{heading}</h3>
      {sub && <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{sub}</p>}
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-gray-700 dark:text-gray-300 mb-2">
          {p}
        </p>
      ))}
    </div>
  );
}
