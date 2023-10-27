// operate.test.js
import operate from './operate';

describe('operate function', () => {
  it('adds two numbers', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('subtracts two numbers', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('multiplies two numbers', () => {
    expect(operate('4', '6', 'x')).toBe('24');
  });

  it('divides two numbers', () => {
    expect(operate('8', '2', '÷')).toBe('4');
  });

  it('handles division by zero', () => {
    expect(operate('6', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('finds modulo of two numbers', () => {
    expect(operate('10', '3', '%')).toBe('1');
  });

  it('throws an error for unknown operation', () => {
    expect(() => operate('2', '3', '^')).toThrowError("Unknown operation '^'");
  });
});
