import { CalculatorContext } from 'context/Calculator';
import { useContext } from 'react';
import styles from './Display.module.scss';

const Display = () => {
  const { operand1, operand2, operator, result } =
    useContext(CalculatorContext);

  return (
    <div className={styles.Display}>
      <div className={styles.Operator}>{operator}</div>
      <div className={styles.Result}>
        {operand2 === '' && operand1}
        {operand2}
        {operand1 === '' && result.toLocaleString(['ban', 'id'])}
      </div>
    </div>
  );
};

export default Display;
