import React from 'react';

interface ButtonProps {
  onClick: () => void; // Функция, которая будет вызвана при клике на кнопку
  gradientColors?: string[]; // Цвета градиента (необязательный)
  textColor: string; // Цвет текста кнопки
  text: string; // Текст, который будет отображаться на кнопке
  className?: string; // Дополнительные классы для кастомизации (необязательный)
}

const GradientButton: React.FC<ButtonProps> = ({
  onClick,
  gradientColors = ['bg-gradient-to-r', 'from-blue-500', 'via-purple-500', 'to-pink-500'], // Значение по умолчанию
  textColor,
  text,
  className,
}) => {
  return (
    <button
      onClick={onClick} // Вызов функции onClick при клике на кнопку
      className={`relative inline-block px-8 py-4 font-bold text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:translate-y-[-4px] hover:shadow-xl active:translate-y-0 active:shadow-md focus:outline-none ${gradientColors.join(' ')} ${textColor} ${className}`}
    >
      {text || 'Текст по умолчанию'} {/* Если text не передан, отобразится fallback текст */}
    </button>
  );
};

export default GradientButton;