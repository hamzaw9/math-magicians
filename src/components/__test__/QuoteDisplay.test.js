import { render } from '@testing-library/react';
import QuoteDisplay from '../QuoteDisplay';

describe('QuoteDisplay', () => {
  it('QuoteDisplay component matches snapshot', () => {
    const { asFragment } = render(<QuoteDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });
});
