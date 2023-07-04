import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStoredValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

function getStoredValue(key, defaultValue) {
  const storedValue = JSON.parse(localStorage.getItem(key));

  return storedValue || defaultValue;
}

export default useLocalStorage;