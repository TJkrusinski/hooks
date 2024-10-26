import {renderHook, act} from "@testing-library/react";
import useArrayItemLoop from "../hooks/useArrayItemLoop";


describe("useArrayItemLoop", () => {
  // these timers could be mocked, but it's pretty simple to just use the real timers
  it('should return the current item in the array', async () => {
    const {result, rerender} = renderHook(() => {
      return useArrayItemLoop(['a', 'b', 'c'], 100)
    });

    expect(result.current).toBe('a');

    await act(async () => {

      setTimeout(() => {
        rerender();
        expect(result.current).toBe('b');
      }, 100);

      setTimeout(() => {
        rerender();
        expect(result.current).toBe('c');
      }, 200);

      setTimeout(() => {
        rerender();
        expect(result.current).toBe('a');
      }, 300);
    });

  });

});