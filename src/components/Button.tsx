export default function Button({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
