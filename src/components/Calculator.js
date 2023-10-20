import React, { useState, useEffect } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtons from './CalculatorButtons';
import calculate from '../logic/calculate';
import './style.css';

const Calculator = () => {
  const [obj, setObj] = useState({});
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (obj.next) {
      setDisplay(obj.next);
    } else if (obj.total) {
      setDisplay(obj.total);
    } else {
      setDisplay('');
    }
  }, [obj]);

  const handleClick = (event) => {
    const newObj = calculate(obj, event.target.innerText);
    setObj(newObj);
  };

  return (
    <>
      <section className="calculator">
        <h2>Let&apos;s do some Math!</h2>
        <div className="calculator-content">
          <CalculatorDisplay displayValue={display} />
          <CalculatorButtons onButtonClick={handleClick} />
        </div>
      </section>
    </>
  );
};

export default Calculator;
