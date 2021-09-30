import { CalculatorContext } from 'context/Calculator';
import { useContext } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: string;
  width?: 'single' | 'double';
  color?: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({ children, color, width }: Props) => {
  const { calculate } = useContext(CalculatorContext);

  const buttonColor =
    color === 'tertiary'
      ? styles.Tertiary
      : color === 'secondary'
      ? styles.Secondary
      : styles.Primary;

  const buttonWidth = width === 'double' && styles.Double;

  const clickHandler = () => {
    calculate(children);
  };

  return (
    <button
      className={`${styles.Button} ${buttonWidth} ${buttonColor}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
