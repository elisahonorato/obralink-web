import React from 'react';
import NextLink from 'next/link';
import { FaAngleDoubleRight, FaAngleRight, FaArrowRight } from 'react-icons/fa';

interface RegularLinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

// RegularLinkButton component
const RegularLinkButton: React.FC<RegularLinkButtonProps> = ({ href, children, className }) => {
  const linkStyle = 'text-black font-heading bg-white cursor-pointer rounded-full px-2 py-1 text-base'; // Nuevo estilo para el enlace
  const hoverStyle = 'hover:bg-gray-200 hover:text-black hover:animate-pulse ease-in-out duration-300'; // Nuevo estilo para el hover

  return (
    <NextLink href={href} className={`${linkStyle} ${hoverStyle} ${className}`}>
        {children}
    </NextLink>
  );
};

// ArrowLinkButton component
const ArrowLinkButton: React.FC<RegularLinkButtonProps> = ({ href, children, className }) => {
  const iconStyle = 'inline-block'; // Estilo específico para el icono
  return (
    <RegularLinkButton href={href} className={className + ' group'}>
      {children}
        <FaAngleRight className={iconStyle + ' group-hover:hidden'} />
        <FaAngleDoubleRight className={iconStyle + ' hidden group-hover:inline-block'} />
    </RegularLinkButton>
  );
};

// ColoredLinkButton component
const ColoredLinkButton: React.FC<{ href: string; children: React.ReactNode; className?: string; colorIntensity: 'light' | 'dark' }> = ({ href, children, className, colorIntensity }) => {
  let coloredLinkStyle = 'transition-colors duration-300 transform'; // Estilo específico para el enlace 
  let colorStyle = '';

  if (colorIntensity === 'light') {
    colorStyle = 'bg-colored-light text-gray-800'; // Color claro
  } else {
    colorStyle = 'bg-colored-dark text-primary-light'; // Color oscuro
  }

  return (
    <ArrowLinkButton href={href} className={`${className} ${coloredLinkStyle} ${colorStyle}`}>
      {children}
    </ArrowLinkButton>
  );
};

export { RegularLinkButton, ColoredLinkButton };
