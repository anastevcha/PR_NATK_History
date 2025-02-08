'use client';
import React, { useState } from 'react';

interface SwitchProps {
    text: string; // Текст, который будет отображаться рядом с переключателем
    bgColor: string; // Цвет фона переключателя
    textColor: string; // Цвет текста
    position?: string; // Необязательная позиция для выравнивания
    onChange: (isChecked: boolean) => void; // Функция обратного вызова, которая будет вызвана при изменении состояния переключателя
}

const Switch: React.FC<SwitchProps> = ({ text, bgColor, textColor, position, onChange }) => {
    // Хук состояния для отслеживания состояния переключателя (включен/выключен)
    const [isChecked, setIsChecked] = useState(false);

    // Обработчик изменения состояния переключателя
    const handleChange = () => {
        // Меняем состояние на противоположное
        setIsChecked(!isChecked);
        // Вызываем функцию onChange с новым состоянием
        onChange(!isChecked);
    };

    return (
        <div className={`flex items-center ${position}`}> {/* Оборачиваем в контейнер для выравнивания с возможностью задать позицию */}
            <label className="flex items-center cursor-pointer"> {/* Лейбл, который будет реагировать на клик */}
                <div className="relative"> {/* Контейнер для переключателя, чтобы управлять его положением */}
                    {/* Скрытый чекбокс, который управляется только через визуальные элементы */}
                    <input type="checkbox" className="sr-only" checked={isChecked} onChange={handleChange} />
                    {/* Фон переключателя, цвет задается через bgColor */}
                    <div className={`block w-14 h-8 rounded-full ${bgColor}`}></div>
                    {/* Кружок, который перемещается в зависимости от состояния переключателя */}
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform transform ${
                        isChecked ? 'translate-x-6' : ''
                    }`}></div> {/* Используем translate-x-6 для перемещения точки в случае, если переключатель включен */}
                </div>
                {/* Текст, который отображается рядом с переключателем, цвет задается через textColor */}
                <div className={`ml-3 ${textColor}`}>{text}</div>
            </label>
        </div>
    );
};

export default Switch;