import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'; // Импортируем социальные иконки

// Определяем интерфейс для пропсов компонента Footer
interface FooterProps {
  isDarkMode?: boolean; // Флаг темной темы (необязательный)
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer
      className={`py-6 px-4 text-center ${
        isDarkMode ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white' : 'bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-700'
      }`}
    >
      {/* Верхняя часть футера с ссылками на соцсети */}
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="#"
          className="text-2xl hover:text-blue-500 transition-colors duration-300"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-2xl hover:text-blue-400 transition-colors duration-300"
          title="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="text-2xl hover:text-blue-700 transition-colors duration-300"
          title="Facebook"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Текстовая информация */}
      <p className="text-sm font-medium">
        &copy; 2025 История НАТК. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;