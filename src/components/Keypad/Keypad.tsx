import { useContext } from 'react';

import { CalculatorContext } from 'context/Calculator';
import Button from './Button';

import styles from './Keypad.module.scss';

const Keypad = () => {
  const { operand1, operand2, operator, result } =
    useContext(CalculatorContext);

  console.log(operand1);
  console.log(operand2);
  console.log(operator);
  console.log(result);

  return (
    <div className={styles.Keypad}>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button color="secondary">DEL</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>-</Button>
      <Button>.</Button>
      <Button>0</Button>
      <Button>/</Button>
      <Button>x</Button>
      <Button width="double" color="secondary">
        RESET
      </Button>
      <Button width="double" color="tertiary">
        =
      </Button>
    </div>
  );
};

export default Keypad;
