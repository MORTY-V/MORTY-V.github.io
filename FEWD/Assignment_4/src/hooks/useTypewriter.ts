import { useState, useEffect } from 'react';

export function useTypewriter(text: string, delay: number): string {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    setDisplayedText('');
    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [text, delay]);

  return displayedText;
}

