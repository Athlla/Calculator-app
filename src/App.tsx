import Keypad from './components/Keypad/Keypad';

import styles from './styles/App.module.scss';

const App = () => {
  return (
    <main className={styles.Container}>
      <Keypad />
    </main>
  );
};

export default App;
