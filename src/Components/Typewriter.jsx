import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, option }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const intervalId = setInterval(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100); // Velocidad de escritura (milisegundos)

      // Limpiar el intervalo cuando el texto esté completamente escrito
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, text]);

  if (option === 1) {
    return <h1 className="font-weight-bold display-4">{displayText}</h1>;
  } else if (option === 2) {
    return <p>{displayText}</p>;
  } else {
    return null; // Opción inválida
  }
};

export default Typewriter;



