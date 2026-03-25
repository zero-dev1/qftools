import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2500) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: number;
    const currentWord = words[loopNum % words.length];
    
    if (isDeleting) {
      timer = setTimeout(() => setText(currentWord.substring(0, text.length - 1)), deletingSpeed);
    } else {
      timer = setTimeout(() => setText(currentWord.substring(0, text.length + 1)), typingSpeed);
    }
    
    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
