import {renderHook} from '@testing-library/react';

import useMatchMedia from '../hooks/useMatchMedia';

describe('useMatchMedia', () => {
  it('should return the current match media value -- light', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(), 
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const {result} = renderHook(() => useMatchMedia());
    expect(result.current).toBe('light');
  });

  it('should return the current match media value -- dark', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(), 
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const {result} = renderHook(() => useMatchMedia());
    expect(result.current).toBe('dark');
  });
});
