import Display from 'components/Display/Display';
import Header from 'components/Header/Header';
import Keypad from 'components/Keypad/Keypad';
import { ThemeContext } from 'context/Theme';
import { useContext, useEffect } from 'react';

import styles from 'styles/App.module.scss';

const App = () => {
  const useTheme = useContext(ThemeContext);

  useEffect(() => {
    const { theme, setTheme } = useTheme;
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme')!);
      return;
    }
    setTheme(theme);
  }, [useTheme]);

  return (
    <main className={styles.Container}>
      <Header />
      <Display />
      <Keypad />
    </main>
  );
};

export default App;
