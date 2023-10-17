const CalculatorButton = () => (
  <div className="calculator-content">
    <input type="text" id="calculator-display" readOnly />
    <div className="buttons">
      <button type="button" id="btnClear">
        AC
      </button>
      <button type="button" id="btnPlusMinus">
        +/-
      </button>
      <button type="button" id="btnPercent">
        %
      </button>
      <button className="btn-orange" type="button" id="btnDivide">
        &#247;
      </button>

      <button type="button" id="btn7">
        7
      </button>
      <button type="button" id="btn8">
        8
      </button>
      <button type="button" id="btn9">
        9
      </button>
      <button className="btn-orange" type="button" id="btnMultiply">
        x
      </button>

      <button type="button" id="btn4">
        4
      </button>
      <button type="button" id="btn5">
        5
      </button>
      <button type="button" id="btn6">
        6
      </button>
      <button className="btn-orange" type="button" id="btnMinus">
        -
      </button>

      <button type="button" id="btn1">
        1
      </button>
      <button type="button" id="btn2">
        2
      </button>
      <button type="button" id="btn3">
        3
      </button>
      <button className="btn-orange" type="button" id="btnPlus">
        +
      </button>

      <button type="button" className="span-two" id="btn0">
        0
      </button>
      <button type="button" id="btnDecimal">
        .
      </button>
      <button className="btn-orange" type="button" id="btnEquals">
        =
      </button>
    </div>
  </div>
);

export default CalculatorButton;
