import { ReactNode, useState } from 'react';
import { createContext } from 'react';

type themeType = 'dark-blue' | '9009' | 'dark-purple';

interface ThemeContextType {
  theme: themeType;
  changeTheme: () => void;
}

const initialState: ThemeContextType = {
  theme: 'dark-blue',
  changeTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<themeType>('dark-blue');

  const changeThemeHandler = () => {
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

    // document.documentElement.setAttribute('data-theme', theme);
  };

  const value: ThemeContextType = {
    theme,
    changeTheme: changeThemeHandler,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
