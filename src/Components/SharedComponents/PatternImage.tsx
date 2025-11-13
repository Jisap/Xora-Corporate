import React, { FC } from 'react';

interface PatternImageProps {
  src: string;
  positionClasses: string;
  containerClasses?: string;
}

const PatternImage: FC<PatternImageProps> = ({ src, positionClasses, containerClasses = 'w-[300px]' }) => {
  return (
    <div className={`shape absolute z-30 h-auto flex items-start ${positionClasses} ${containerClasses}`}>
      <img
        src={src}
        alt="element-image"
      />
    </div>
  );
};

export default PatternImage;

