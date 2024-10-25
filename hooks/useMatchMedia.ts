import {useCallback, useSyncExternalStore} from 'react';

const MatchMediaQuery = '(prefers-color-scheme: dark)';

const subscribe = (cb: () => void) => {
  const result = window.matchMedia(MatchMediaQuery);

  function handleChange(e: MediaQueryListEvent) {
    if (e.matches) {
      cb();
    } else {
      cb();
    }
  }

  result.addEventListener('change', handleChange);

  return () => {
    result.removeEventListener('change', handleChange);
  };
};

const snapshot = (): 'light' | 'dark' => {
  const result = window.matchMedia(MatchMediaQuery);

  if (result.matches) {
    return 'dark';
  } else {
    return 'light';
  }
}

  const serverSnapshot = (): 'light' => {
    return 'light';
  }

/**
 * Will return the current match media value as a string.
 * The string is either 'light' or 'dark'.
 * @returns 'light' | 'dark'
 */
const useMatchMedia = (): 'light' | 'dark' => {
  return useSyncExternalStore<'light' | 'dark'>(subscribe, snapshot, serverSnapshot);
};

export default useMatchMedia;