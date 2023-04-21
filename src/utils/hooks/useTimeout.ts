import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type UseTimeout = {
  isTimeoutCleared: boolean;
  clearTimeout: () => void;
};

export const useTimeout = (
  callback: () => void,
  delay?: number,
): UseTimeout => {
  const timeout = useRef<NodeJS.Timeout>();
  const savedCallback = useRef(callback);
  const [isTimeoutCleared, setIsTimeoutCleared] = useState(false);

  const clear = (): void => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      setIsTimeoutCleared(true);
    }
  };

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) return;
    timeout.current = setTimeout(() => savedCallback.current(), delay);
    return () => clear();
  }, [delay]);

  return {
    isTimeoutCleared,
    clearTimeout: clear,
  };
};
