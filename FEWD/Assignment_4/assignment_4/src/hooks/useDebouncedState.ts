import { useState, useEffect } from 'react';

export function useDebouncedState<T>(
  initialValue: T,
  debounceTime: number
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(initialValue);
  const [debouncedState, setDebouncedState] = useState<T>(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedState(state);
    }, debounceTime);

    return () => {
      clearTimeout(timer);
    };
  }, [state, debounceTime]);

  return [debouncedState, setState];
}
