import { ReactNode, useState } from 'react';
import { createContext } from 'react';

type themeType = 'dark-blue' | '9009' | 'dark-purple';

interface ThemeContextType {
  theme: themeType;
  nextTheme: () => void;
  setTheme: (reqTheme: string) => void;
}

const initialState: ThemeContextType = {
  theme: 'dark-blue',
  nextTheme: () => {},
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<themeType>('dark-blue');

  const nextThemeHandler = () => {
    let data: themeType = 'dark-blue';
    if (theme === 'dark-blue') {
      data = '9009';
    }
    if (theme === '9009') {
      data = 'dark-purple';
    }
    if (theme === 'dark-purple') {
      data = 'dark-blue';
    }

    setTheme(data);
    document.documentElement.setAttribute('data-theme', data);
    localStorage.setItem('theme', data);
  };

  const setThemeHandler = (reqTheme: string) => {
    setTheme(reqTheme as themeType);
    document.documentElement.setAttribute('data-theme', reqTheme);
  };

  const value: ThemeContextType = {
    theme,
    nextTheme: nextThemeHandler,
    setTheme: setThemeHandler,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
