"use client";

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

interface TypewriterProps {
  text: string;
  className?: string;
  id: string;
}

export default function Typewriter({ text, className, id }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    const textWords = text.split(' '); // Dividir el texto en palabras

    let currentWordIndex = 0; // Índice de la palabra actual

    const typewriterAnimation = gsap.to({}, {
      duration: 0.5, // Duración de escritura para cada palabra
      repeat: textWords.length - 1, // Repetir para cada palabra, excepto la última
      onUpdate: () => {
        const nextWord = textWords[currentWordIndex]; // Obtener la palabra actual
        setDisplayedText(prevText => prevText + ' ' + nextWord); // Agregar la palabra al texto mostrado
        currentWordIndex++; // Avanzar al siguiente índice de palabra

        // Detener la animación al llegar al final del texto
        if (currentWordIndex === textWords.length) {
          typewriterAnimation.kill();
        }
      },
    });

    typewriterAnimation.play();

    return () => {
      typewriterAnimation.kill();
    };
  }, []);

  return (
    <h1 id={id} className={className}>{displayedText}</h1>
  );
}
