export default function Button({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="m-4 py-2 rounded-md w-[90%] self-center bg-blue-600 
                 text-white font-medium hover:bg-blue-700 transition-colors"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
