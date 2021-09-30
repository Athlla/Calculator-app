import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';
import ThemeProvider from 'context/Theme';
import CalculatorProvider from 'context/Calculator';

import 'styles/global.css';

ReactDOM.render(
  <ThemeProvider>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
