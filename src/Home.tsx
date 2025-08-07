import { useCards } from '@/hooks/useCards';
import Card from '@/components/Card';
import { useUi } from '@/store/uiStore';
import clsx from 'clsx';

export default function Home() {
  const { cards, status } = useCards();
  const { toggleTheme, theme } = useUi();

  /* ----- data states ----- */
  if (status === 'loading') return <p className="text-center mt-10">Loading…</p>;
  if (status === 'error')   return <p className="text-center mt-10">Failed to load cards.</p>;

  return (
    <>
      {/* ─────────────────────────────  HERO  ───────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4"
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
        <div className="relative z-10 max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Welcome to G Automotive
            </h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button
            className="mx-auto px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
              Contact Us
            </button>
        </div>
      </section>

      {/* ──────────────────────────  CARD GRID  ────────────────────────── */}
      <section className="py-16 px-4 flex flex-col items-center">
        {/* light / dark switch – optional */}
        <button
          onClick={toggleTheme}
          className="mb-6 px-4 py-2 border rounded-md text-sm"
        >
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>

        <div
          className={clsx(
            'grid gap-8 mt-8 w-full max-w-6xl',
            // 1‑col: mobile (<768)  |  2‑col: md (≥768)  |  3‑col: lg (≥1024)
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {cards.slice(0, 3).map((c) => (
            <Card key={c.id} data={c} />
          ))}
        </div>
      </section>
    </>
  );
}
