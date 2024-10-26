import { useState } from "react";
import useInterval from "./useInterval";

/**
 * A hook that loops through an array of items at a specified delay.
 * @param items An array of items.
 * @param delay Delay in milliseconds.
 */
const useArrayItemLoop = <T>(items: T[], delay: number) => {
  const [index, setIndex] = useState<number>(0);

  useInterval(() => {
    setIndex((index + 1) % items.length);
  }, delay);

  return items[index];
};

export default useArrayItemLoop;