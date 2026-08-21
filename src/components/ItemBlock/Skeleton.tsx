import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={480}
    viewBox="0 0 300 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Картинка (высота 280px) */}
    <rect x="0" y="0" rx="0" ry="0" width="300" height="280" /> 

    {/* Заголовок (отступ 20px от картинки) */}
    <rect x="85" y="300" rx="4" ry="4" width="130" height="22" /> 

    {/* Звездочки рейтинга (отступ 12px от заголовка) */}
    <rect x="100" y="334" rx="3" ry="3" width="100" height="16" /> 

    {/* Цена (отступ 14px от звезд) */}
    <rect x="90" y="364" rx="4" ry="4" width="120" height="22" /> 

    {/* Кнопка Add to Cart (отступ 18px от цены) */}
    <rect x="20" y="404" rx="8" ry="8" width="260" height="48" /> 
  </ContentLoader>
);

export default Skeleton;