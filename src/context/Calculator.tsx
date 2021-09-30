import { useState } from 'react';
import { createContext, ReactNode } from 'react';

interface calcContextType {
  operand1: string;
  operand2: string;
  operator: string;
  result: number;
  calculate: (input: string) => void;
}

const initialState: calcContextType = {
  operand1: '',
  operand2: '',
  operator: '',
  result: 0,
  calculate: () => {},
};

export const CalculatorContext = createContext<calcContextType>(initialState);

const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [calculator, setCalculator] = useState({
    operand1: '',
    operand2: '',
    operator: '',
  });
  const [result, setResult] = useState<number>(0);

  const resetResult = () => setResult(0);

  const reset = () => {
    setCalculator({
      operand1: '',
      operand2: '',
      operator: '',
    });
  };

  const deleteNumber = () => {
    if (calculator.operand2 === '') {
      return setCalculator({
        ...calculator,
        operand1: calculator.operand1.slice(0, -1),
      });
    }
    setCalculator({
      ...calculator,
      operand2: calculator.operand2.slice(0, -1),
    });
  };

  const calculateHandler = (input: string) => {
    const { operand1, operand2, operator } = calculator;
    const operatorList = ['+', '-', '/', 'x'];

    if (input === 'RESET') {
      resetResult();
      return reset();
    }

    if (input === 'DEL') {
      return deleteNumber();
    }

    if (input === '=') {
      switch (operator) {
        case '+':
          setResult(parseFloat(operand1) + parseFloat(operand2));
          return reset();
        case '-':
          setResult(parseFloat(operand1) - parseFloat(operand2));
          return reset();
        case 'x':
          setResult(parseFloat(operand1) * parseFloat(operand2));
          return reset();
        case '/':
          setResult(parseFloat(operand1) / parseFloat(operand2));
          return reset();
        default:
          setResult(parseFloat(operand1) + parseFloat(operand2));
          return reset();
      }
    }

    if (!operatorList.includes(input) && operator !== '' && operand1 !== '') {
      return setCalculator({
        ...calculator,
        operand2: operand2.concat(input),
      });
    }
    if (operatorList.includes(input) && operand1 !== '') {
      return setCalculator({
        ...calculator,
        operator: input,
      });
    }

    if (operatorList.includes(input) && operand1 === '') {
      return;
    }

    return setCalculator({
      ...calculator,
      operand1: operand1.concat(input),
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        ...calculator,
        result: result,
        calculate: calculateHandler,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
