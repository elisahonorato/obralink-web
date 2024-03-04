"use client"
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

interface TextChangeProps {
  startText: string;
  texts: string[];
  className?: string;
  classChange?: string;
  id: string;
  velocity?: number;
}

export default function TextChange({ startText, texts, className, classChange, id, velocity = 0.5 }: TextChangeProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [displayedLetters, setDisplayedLetters] = useState('');

  useEffect(() => {
    const textChangeAnimation = gsap.to({}, {
      duration: velocity,
      repeat: -1,
      onRepeat: () => {
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setDisplayedText('');
        setDisplayedLetters('');
      },
    });

    return () => {
      textChangeAnimation.kill();
    };
  }, [currentTextIndex, texts]);

  useEffect(() => {
    if (!displayedText) return;

    let currentIndex = 0;
    const textTypingAnimation = gsap.to({}, {
      duration: 5,
      repeat: displayedText.length - 1,
      onUpdate: () => {
        setDisplayedLetters(displayedText.substring(0, currentIndex + 1));
        currentIndex++;
      },
    });

    return () => {
      textTypingAnimation.kill();
    };
  }, [displayedText]);

  useEffect(() => {
    if (!texts[currentTextIndex]) return;

    setDisplayedText(texts[currentTextIndex] + " ");

    return () => {
      setDisplayedText('');
    };
  }, [currentTextIndex, texts]);

  return (
    <h1 id={id} className={className}>
      {startText + " "}
      <span className={classChange}>{displayedLetters}</span>
    </h1>
  );
}
