"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LocaleSwitcher from '../LocaleSwitcher';

export default function Navbar() {
  const t = useTranslations('RootLayout');
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-10 ${visible ? 'flex' : 'hidden'}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/assets/logo/logo.png" alt="Logo" width={120} height={20} className="object-contain" />
        </Link>
        {/* Hamburger (screen = sm) */}
        <div className="sm:hidden">
          <button type="button" className="text-gray-600 hover:text-gray-900 focus:outline-none" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Links (screen > sm) */}
        <div className={`sm:flex sm:space-x-4 mt-2 ${menuOpen ? 'block' : 'hidden'}`}>
          <Link href="/products/" className="border-none text-gray-700 hover:text-gray-900">
            {t('products_link')}
          </Link>
          <Link href="/contact/" className="border-none text-gray-700 hover:text-gray-900">
            {t('contact_link')}
          </Link>
          <LocaleSwitcher />

        </div>
      </div>
    </nav>
  );
}
