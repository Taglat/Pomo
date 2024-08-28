import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Хук useState с начальным значением из localStorage или initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Получаем значение из localStorage по ключу
      const item = localStorage.getItem(key);
      // Если значение есть, парсим его, если нет - возвращаем initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage', error);
      return initialValue;
    }
  });

  // useEffect для сохранения значения в localStorage при его изменении
  useEffect(() => {
    try {
      // Сохраняем новое значение в localStorage
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error setting localStorage', error);
    }
  }, [key, storedValue]);

  // Функция для обновления значения и сохранения его в localStorage
  const setValue = (value) => {
    try {
      // Поддержка функций в setValue аналогично useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    } catch (error) {
      console.error('Error setting value', error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
