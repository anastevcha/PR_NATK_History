import React from 'react';

interface InputFieldProps {
  type: string; // Тип поля ввода (например, text, password)
  placeholder: string; // Текст-подсказка
  value: string; // Значение поля ввода
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Обработчик изменения значения
  bgColor?: string; // Цвет фона (необязательный)
  textColor?: string; // Цвет текста (необязательный)
  borderColor?: string; // Цвет рамки (необязательный)
  className?: string; // Дополнительные классы для кастомизации (необязательный)
  isDisabled?: boolean; // Флаг отключения поля ввода (необязательный)
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  bgColor = 'bg-gray-50', // Значение по умолчанию
  textColor = 'text-gray-900', // Значение по умолчанию
  borderColor = 'border-gray-300', // Значение по умолчанию
  className = '', // Значение по умолчанию
  isDisabled = false, // Значение по умолчанию
}) => {
  return (
    <input
      type={type} // Тип поля ввода
      placeholder={placeholder} // Подсказка для пользователя
      value={value} // Значение поля ввода
      onChange={onChange} // Обработчик изменения значения
      disabled={isDisabled} // Отключение поля ввода
      className={`w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${bgColor} ${textColor} ${borderColor} ${isDisabled ? 'cursor-not-allowed opacity-75' : ''} ${className} transition-all duration-200 ease-in-out hover:scale-105`}
    />
  );
};

export default InputField;