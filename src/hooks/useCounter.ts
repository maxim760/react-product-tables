import { useCallback, useState } from 'react';

export const useCounter = (initial = 0) => {
  const [counter, setCounter] = useState(initial);
  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);
  const decrement = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);
  return {counter, increment, decrement}
};
