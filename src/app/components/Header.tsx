'use client';
import React from 'react';
import Switch from './Switch';

interface HeaderProps {
  systemName: string; // Название системы, которое будет отображаться в заголовке
  onLogout: () => void; // Функция для выхода из системы
  onToggleDarkMode: (isDarkMode: boolean) => void; // Функция для переключения темной темы
  onToggleReadingMode: (isReadingMode: boolean) => void; // Функция для переключения режима чтения
}

const Header: React.FC<HeaderProps> = ({
  systemName,
  onLogout,
  onToggleDarkMode,
  onToggleReadingMode,
}) => {
  return (
    <header
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center shadow-lg"
    >
      {/* Название системы */}
      <h1 className="text-2xl font-bold tracking-wide">{systemName}</h1>

      {/* Правая часть с переключателями и кнопкой выхода */}
      <div className="flex items-center gap-4">
        {/* Переключатель для темной темы */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Темная тема</span>
          <Switch
            text="" // Текст не используется для этого переключателя
            bgColor="bg-gray-600" // Цвет фона для темной темы
            textColor="text-white" // Цвет текста для темной темы
            onChange={onToggleDarkMode} // Обработчик для изменения состояния темной темы
          />
        </div>

        {/* Переключатель для режима чтения */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Режим чтения</span>
          <Switch
            text="" // Текст не используется
            bgColor="bg-green-400" // Цвет фона
            textColor="text-white" // Цвет текста
            onChange={onToggleReadingMode} // Обработчик для изменения состояния
          />
        </div>

        {/* Кнопка для выхода из системы */}
        <button
          onClick={onLogout} // Вызов функции onLogout при клике на кнопку
          className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out shadow-md active:shadow-lg focus:outline-none"
        >
          Выйти
        </button>
      </div>
    </header>
  );
};

export default Header;