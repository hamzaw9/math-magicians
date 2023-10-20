import { useState, useEffect } from 'react';
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
        <div className="calculator-content">
          <input value={display} type="text" id="calculator-display" readOnly />
          <div className="buttons">
            <button type="button" id="btnClear" onClick={handleClick}>
              AC
            </button>
            <button type="button" id="btnPlusMinus" onClick={handleClick}>
              +/-
            </button>
            <button type="button" id="btnPercent" onClick={handleClick}>
              %
            </button>
            <button
              className="btn-orange"
              type="button"
              id="btnDivide"
              onClick={handleClick}
            >
              &#247;
            </button>

            <button type="button" id="btn7" onClick={handleClick}>
              7
            </button>
            <button type="button" id="btn8" onClick={handleClick}>
              8
            </button>
            <button type="button" id="btn9" onClick={handleClick}>
              9
            </button>
            <button
              className="btn-orange"
              type="button"
              id="btnMultiply"
              onClick={handleClick}
            >
              x
            </button>

            <button type="button" id="btn4" onClick={handleClick}>
              4
            </button>
            <button type="button" id="btn5" onClick={handleClick}>
              5
            </button>
            <button type="button" id="btn6" onClick={handleClick}>
              6
            </button>
            <button
              className="btn-orange"
              type="button"
              id="btnMinus"
              onClick={handleClick}
            >
              -
            </button>

            <button type="button" id="btn1" onClick={handleClick}>
              1
            </button>
            <button type="button" id="btn2" onClick={handleClick}>
              2
            </button>
            <button type="button" id="btn3" onClick={handleClick}>
              3
            </button>
            <button
              className="btn-orange"
              type="button"
              id="btnPlus"
              onClick={handleClick}
            >
              +
            </button>

            <button
              type="button"
              className="span-two"
              id="btn0"
              onClick={handleClick}
            >
              0
            </button>
            <button type="button" id="btnDecimal" onClick={handleClick}>
              .
            </button>
            <button
              className="btn-orange"
              type="button"
              id="btnEquals"
              onClick={handleClick}
            >
              =
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
