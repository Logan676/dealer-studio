import { createContext, useContext, useState, ReactNode } from 'react';

interface UiState {
  selectedId: number;
  setSelectedId: (id: number) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
const UiCtx = createContext<UiState>(null!);

export const UiProvider = ({ children }: { children: ReactNode }) => {
  const [selectedId, setSelectedId] = useState<number>(2); // middle card default
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.theme === 'dark' ? 'dark' : 'light',
  );

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.theme = next;
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <UiCtx.Provider value={{ selectedId, setSelectedId, theme, toggleTheme }}>
      {children}
    </UiCtx.Provider>
  );
};

export const useUi = () => useContext(UiCtx);
