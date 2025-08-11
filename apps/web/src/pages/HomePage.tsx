import { useEffect } from 'react';
import { useCards } from '@/hooks/useCards';
import Card from '@/components/Card';
import { useUi } from '@/context/UiContext';
import clsx from 'clsx';

export default function Home() {
  const { data, status, error } = useCards();
  const { toggleTheme, theme, setSelectedId } = useUi();

  // highlight the middle card once cards are fetched
  useEffect(() => {
    if (data?.length) {
      const middle = data[Math.floor(data.length / 2)];
      setSelectedId(middle.id);
    }
  }, [data, setSelectedId]);

  /* ----- data states ----- */
  if (status === 'pending')
    return <p className="text-center mt-10">Loading…</p>;
  if (status === 'error')
    return (
      <p className="text-center mt-10">
        {error instanceof Error ? error.message : 'Failed to load cards.'}
      </p>
    );

  return (
    <>
      {/* ─────────────────────────────  HERO  ───────────────────────────── */}
      <section
        className="relative min-h-[70vh] w-full flex items-center justify-center px-0"
      >
        {/* background image */}
        <img
          src="/bg.jpg"
          alt="Blue Ford Raptor kicking dust"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
              Welcome to G Automotive
            </h1>
          <p className="mb-8 text-lg drop-shadow-md text-white max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
            <button className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 w-full max-w-xs mx-auto">
              Contact Us
            </button>
        </div>
      </section>

      {/* ──────────────────────────  CARD GRID  ────────────────────────── */}
      <section className="py-16 px-2 sm:px-4 flex flex-col items-center w-full max-w-6xl mx-auto">
        {/* light / dark switch – optional */}
        <button
          onClick={toggleTheme}
          className="mb-6 px-4 py-2 bg-blue-600 text-white border border-blue-600 rounded-md text-sm shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        <div
          className={clsx(
            'grid gap-8 w-full justify-items-center',

            // 1‑col: mobile (<768)  |  2‑col: md (≥768)  |  3‑col: lg (≥1024)
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
            'px-1 sm:px-0'
          )}
        >
          {data?.slice(0, 3).map((c, i) => (
            <Card
              key={c.id}
              data={c}
              className={
                i === 2
                  ? 'md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0'
                  : ''
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}
