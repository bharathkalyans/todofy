import { useState, useEffect } from "react";

type ValueTypes =
  | string
  | number
  | boolean
  | Record<string, unknown>
  | Array<unknown>;

type UseLocalStorageReturnType<T> = [
  T,
  React.Dispatch<React.SetStateAction<T>>
];

const useLocalStorage = <T extends ValueTypes>(
  key: string,
  defaultValue: T
): UseLocalStorageReturnType<T> => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
