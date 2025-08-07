export default function CardBody({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <div className="p-4 flex-1">
      <h3 className="font-bold text-lg mb-2">{heading}</h3>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-gray-700 dark:text-gray-300 mb-2">
          {p}
        </p>
      ))}
    </div>
  );
}
