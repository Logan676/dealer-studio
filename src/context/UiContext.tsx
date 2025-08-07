import { createContext, useContext, useState, type ReactNode } from 'react';

interface UiState {
  selectedId: number;
  setSelectedId: (id: number) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
const UiCtx = createContext<UiState>(null!);

export const UiProvider = ({ children }: { children: ReactNode }) => {
  // default will be set to the middle card once data loads
  const [selectedId, setSelectedId] = useState<number>(0);
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

// eslint-disable-next-line react-refresh/only-export-components
export const useUi = () => useContext(UiCtx);
