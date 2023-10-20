/* eslint-disable react/prop-types */
import React from 'react';

const CalculatorDisplay = ({ displayValue }) => (
  <input value={displayValue} type="text" id="calculator-display" readOnly />
);

export default CalculatorDisplay;
