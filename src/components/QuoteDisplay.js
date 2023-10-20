import { useEffect, useState } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'nDzwqTka6swjBQQbFR+ujA==lQfhCoGOjI3pUI5v',
            },
            contentType: 'application/json',
          },
        );
        const result = await data.json();
        setQuote(result[0].quote);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);
  useEffect(() => {
    setIsLoading(false);
  }, [quote]);
  return (
    <div className="quote-container">
      <p className="quote">{isLoading ? 'Loading' : quote}</p>
      <p className="error">{error}</p>
    </div>
  );
};

export default QuoteDisplay;
