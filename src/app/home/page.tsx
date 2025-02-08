'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isReadingMode, setIsReadingMode] = useState(false);

  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ease-in-out ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-black'
      }`}
    >
      {/* Компонент Header */}
      <Header
        systemName="История НАТК"
        onLogout={handleLogout}
        onToggleDarkMode={(checked) => setIsDarkMode(checked)}
        onToggleReadingMode={(checked) => setIsReadingMode(checked)}
      />

      {/* Основное содержимое страницы */}
      <main
        className={`flex-grow p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mx-4 md:mx-auto md:w-11/12 lg:w-3/4 xl:w-1/2`}
      >
        {/* Заголовок страницы */}
        <h1 className="text-4xl font-bold text-center mb-8">
          История колледжа
        </h1>

        {/* Горизонтальный блок с изображениями и текстом */}
        {!isReadingMode ? (
          <>
            {/* Первый блок */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Изображение */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/natk_image1.jpg"
                  alt="Здание колледжа"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
                <p className="mt-4 text-center text-lg text-black dark:text-gray-300">
                  Колледж в наше время
                </p>
              </div>
              {/* Текст */}
              <div className="flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-black dark:text-gray-300 max-w-md mx-auto">
                  В 1929 году был открыт Новосибирский машиностроительный техникум. В 1937 году учебное заведение переходит под управление Наркома оборонной промышленности, техникум переименовывают в авиационный.
                  С 1938 по 1940 год ведётся строительство учебного корпуса учреждения, в котором принимают активное участие преподаватели и учащиеся техникума.
                </p>
              </div>
            </div>

            {/* Второй горизонтальный блок */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Изображение */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/natk_image2.jpg"
                  alt="Колледж 1960 год"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
                <p className="mt-4 text-center text-lg text-black dark:text-gray-300">
                  Колледж 1960 год
                </p>
              </div>
              {/* Текст */}
              <div className="flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-black dark:text-gray-300 max-w-md mx-auto">
                  В 1941 году из Москвы в Новосибирск эвакуируют ЦАГИ, его располагают в здании авиационного техникума, после чего учебное заведение на непродолжительное время закрывается. Но уже в декабре 1941 года решением ГК обороны техникум размещают в одном корпусе вместе с Московским авиационным технологическим институтом, занятия возобновляются.
                  В 1945 году на учебное заведение возлагается новая обязанность — техникум начинает проводить методические работы с учителями техникумов Новосибирской области.
                  В 1964 году руководителем авиационного техникума становится В. Н. Тихомиров, который формирует долгосрочную образовательную политику, направленную на совершенствование деятельности учреждения.
                </p>
              </div>
            </div>

            {/* Третий горизонтальный блок */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Изображение */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/natk_image3.png"
                  alt="Колледж 2018 год"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
              {/* Текст */}
              <div className="flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-black dark:text-gray-300 max-w-md mx-auto">
                  С 1983 года в техникуме начинает работать Музей авиации и космонавтики имени Ю. В. Кондратюка.
                  В 1991 году техникум получает статус колледжа, в этом же году учреждение было включено в состав НАПО им. В. П. Чкалова на правах юридического лица.
                </p>
              </div>
            </div>
          </>
        ) : (
          // Режим чтения
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Центрируем текст и добавляем отступы */}
            <p className="max-w-4xl text-lg leading-relaxed text-center text-black dark:text-gray-300 px-8">
              В 1929 году был открыт Новосибирский машиностроительный техникум. В 1937 году учебное заведение переходит под управление Наркома оборонной промышленности, техникум переименовывают в авиационный.
              С 1938 по 1940 год ведётся строительство учебного корпуса учреждения, в котором принимают активное участие преподаватели и учащиеся техникума.
            </p>
            <p className="max-w-4xl text-lg leading-relaxed text-center text-black dark:text-gray-300 px-8">
              В 1941 году из Москвы в Новосибирск эвакуируют ЦАГИ, его располагают в здании авиационного техникума, после чего учебное заведение на непродолжительное время закрывается. Но уже в декабре 1941 года решением ГК обороны техникум размещают в одном корпусе вместе с Московскими авиационными технологическими институтами, занятия возобновляются.
              В 1945 году на учебное заведение возлагается новая обязанность — техникум начинает проводить методические работы с учителями техникумов Новосибирской области.
              В 1964 году руководителем авиационного техникума становится В. Н. Тихомиров, который формирует долгосрочную образовательную политику, направленную на совершенствование деятельности учреждения.
            </p>
            <p className="max-w-4xl text-lg leading-relaxed text-center text-black dark:text-gray-300 px-8">
              С 1983 года в техникуме начинает работать Музей авиации и космонавтики имени Ю. В. Кондратюка.
              В 1991 году техникум получает статус колледжа, в этом же году учреждение было включено в состав НАПО им. В. П. Чкалова на правах юридического лица.
            </p>
          </div>
        )}
      </main>

      {/* Компонент Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default HomePage;