import { useCards } from '@/hooks/useCards';
import Card from '@/components/Card';
import { useUi } from '@/store/uiStore';

export default function Home() {
  const { cards, status } = useCards();
  const { toggleTheme, theme } = useUi();

  if (status === 'loading') return <p className="text-center mt-10">Loading…</p>;
  if (status === 'error')   return <p className="text-center mt-10">Failed to load cards.</p>;

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[60vh] text-white flex flex-col items-center justify-center
                   bg-cover bg-center"
        style={{ backgroundImage: 'url(/bg.jpg)' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Welcome to G Automotive
        </h1>
        <p className="max-w-2xl text-center mb-6 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </p>
        <button className="px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700">
          Contact Us
        </button>
      </section>

      {/* Cards */}
      <section className="py-16 px-4 flex flex-col items-center">
        {/* theme switch */}
        <button
          onClick={toggleTheme}
          className="mb-6 px-4 py-2 border rounded-md text-sm"
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        <div
          className="grid gap-8 w-full max-w-6xl 
                     grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((c, i) => (
            <Card key={c.id} data={c} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
