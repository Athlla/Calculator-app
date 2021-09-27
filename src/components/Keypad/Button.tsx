import styles from './Button.module.scss';

interface Props {
  children: string;
  width?: 'single' | 'double';
  color?: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({ children, color, width }: Props) => {
  const buttonColor =
    color === 'tertiary'
      ? styles.Tertiary
      : color === 'secondary'
      ? styles.Secondary
      : styles.Primary;

  const buttonWidth = width === 'double' && styles.Double;

  return (
    <button className={`${styles.Button} ${buttonWidth} ${buttonColor}`}>
      {children}
    </button>
  );
};

export default Button;
