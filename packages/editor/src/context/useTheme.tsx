import type { ReactNode} from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'dark' | 'light';
export type ThemeContext = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const ThemeContextInstance = createContext<ThemeContext>({ mode: 'light', setMode: () => {} });
export const useTheme = (): ThemeContext => useContext(ThemeContextInstance);

export const ThemeContextProvider = ({ children, theme }: { children: ReactNode; theme: ThemeMode }) => {
  const [themeMode, setThemeMode] = useState(theme);
  useEffect(() => {
    setThemeMode(theme);
  }, [theme]);
  return <ThemeContextInstance.Provider value={{ mode: themeMode, setMode: setThemeMode }}>{children}</ThemeContextInstance.Provider>;
};
