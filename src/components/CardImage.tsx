export default function CardImage({ src, heading }: { src: string; heading: string }) {
  return (
    <figure className="relative">
      <img src={src} alt={heading} className="h-48 w-full object-cover rounded-t-2xl" />
      {/* Hover overlay */}
      <figcaption
        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-t-2xl"
      >
          <span className="text-white font-semibold tracking-wide">Learn More →</span>
      </figcaption>
    </figure>
  );
}
