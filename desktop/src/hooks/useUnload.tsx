import { useEffect, useRef } from 'react';

export const useUnload = (fn: (e: BeforeUnloadEvent) => string) => {
  const cb = useRef(fn);

  useEffect(() => {
    const onUnload = cb.current;
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [cb]);
};
