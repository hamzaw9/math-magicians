/* eslint-disable react/prop-types */
import React from 'react';

const CalculatorButtons = ({ onButtonClick }) => (
  <div className="buttons">
    <button type="button" id="btnClear" onClick={onButtonClick}>
      AC
    </button>
    <button type="button" id="btnPlusMinus" onClick={onButtonClick}>
      +/-
    </button>
    <button type="button" id="btnPercent" onClick={onButtonClick}>
      %
    </button>
    <button
      className="btn-orange"
      type="button"
      id="btnDivide"
      onClick={onButtonClick}
    >
      &#247;
    </button>

    <button type="button" id="btn7" onClick={onButtonClick}>
      7
    </button>
    <button type="button" id="btn8" onClick={onButtonClick}>
      8
    </button>
    <button type="button" id="btn9" onClick={onButtonClick}>
      9
    </button>
    <button
      className="btn-orange"
      type="button"
      id="btnMultiply"
      onClick={onButtonClick}
    >
      x
    </button>

    <button type="button" id="btn4" onClick={onButtonClick}>
      4
    </button>
    <button type="button" id="btn5" onClick={onButtonClick}>
      5
    </button>
    <button type="button" id="btn6" onClick={onButtonClick}>
      6
    </button>
    <button
      className="btn-orange"
      type="button"
      id="btnMinus"
      onClick={onButtonClick}
    >
      -
    </button>

    <button type="button" id="btn1" onClick={onButtonClick}>
      1
    </button>
    <button type="button" id="btn2" onClick={onButtonClick}>
      2
    </button>
    <button type="button" id="btn3" onClick={onButtonClick}>
      3
    </button>
    <button
      className="btn-orange"
      type="button"
      id="btnPlus"
      onClick={onButtonClick}
    >
      +
    </button>

    <button
      type="button"
      className="span-two"
      id="btn0"
      onClick={onButtonClick}
    >
      0
    </button>
    <button type="button" id="btnDecimal" onClick={onButtonClick}>
      .
    </button>
    <button
      className="btn-orange"
      type="button"
      id="btnEquals"
      onClick={onButtonClick}
    >
      =
    </button>
  </div>
);

export default CalculatorButtons;
