'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import GradientButton from '../components/Button';
import InputField from '../components/InputField';
import Image from 'next/image';

const LoginPage = () => {
  const [username, setUsername] = useState(''); // Состояние для логина пользователя
  const [password, setPassword] = useState(''); // Состояние для пароля
  const [error, setError] = useState(false); // Состояние для отображения ошибки
  const router = useRouter();

  // Функция для обработки входа в систему
  const handleLogin = () => {
    if (username === 'Admin' && password === 'pswrd') {
      router.push('/home');
    } else {
      setError(true); // Показать сообщение об ошибке
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Основной контейнер для формы */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-4xl mx-auto p-8 rounded-xl shadow-2xl bg-white">
        {/* Левая часть с изображением */}
        <div className="hidden md:block relative h-64 w-full">
          <Image
            src="/natk_logo1.jpg" //Путь к изображению
            alt="Авторизация"
            fill // Растягиваем изображение на всю область
            className="object-cover rounded-lg shadow-xl"
            priority // Приоритетная загрузка
          />
        </div>

        {/* Правая часть с формой авторизации */}
        <div className="md:p-8">
          {/* Заголовок формы */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Авторизация</h1>
          </div>

          {/* Сообщение об ошибке */}
          {error && (
            <p className="text-red-500 text-center font-medium mb-4">
              Неверный логин или пароль!
            </p>
          )}

          {/* Поле ввода для логина */}
          <InputField
            type="text"
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            bgColor="bg-gray-50"
            textColor="text-gray-900"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Поле ввода для пароля */}
          <InputField
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            bgColor="bg-gray-50"
            textColor="text-gray-900"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
          />

          {/* Кнопка для отправки формы */}
          <GradientButton
            onClick={handleLogin}
            gradientColors={['bg-gradient-to-r', 'from-blue-500', 'via-purple-500', 'to-pink-500']}
            textColor="text-white"
            text="Войти"
            className="w-full mt-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;