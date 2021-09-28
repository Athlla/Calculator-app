import Display from 'components/Display/Display';
import Header from 'components/Header/Header';
import Keypad from 'components/Keypad/Keypad';

import styles from 'styles/App.module.scss';

const App = () => {
  return (
    <main className={styles.Container}>
      <Header />
      <Display />
      <Keypad />
    </main>
  );
};

export default App;
