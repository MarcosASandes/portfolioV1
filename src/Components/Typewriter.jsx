import React, { useState, useEffect } from 'react';
{/*
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
    return <h1 className={`font-weight-bold display-1 ${option === 1 ? 'texto-remarcado' : ''}`}>{displayText}</h1>;
    {return <h1 className="font-weight-bold display-1 text-white">{displayText}</h1>;}
  } else if (option === 2) {
    return <p>{displayText}</p>;
  } else {
    return null; // Opción inválida
  }
};

export default Typewriter;
*/}


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

  const remarcado = 'Marcos!'; // Texto que quieres remarcado

  return (
    <h1 className="font-weight-bold text-white display-1">
      {displayText.split(remarcado).map((part, index) => (
        <span key={index}>
          {part}
          {index !== displayText.split(remarcado).length - 1 && (
            <strong style={{backgroundColor: 'white', color: 'black', fontStyle: 'italic', borderRadius: 10}}>{remarcado}</strong>
          )}
        </span>
      ))}
    </h1>
  );
};


export default Typewriter;





