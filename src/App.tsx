import Display from 'components/Display/Display';
import Keypad from 'components/Keypad/Keypad';

import styles from 'styles/App.module.scss';

const App = () => {
  return (
    <main className={styles.Container}>
      <Display />
      <Keypad />
    </main>
  );
};

export default App;
