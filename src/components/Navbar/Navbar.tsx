"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LocaleSwitcher from '../Switchers/LocaleSwitcher';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

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

  const links = (
    <>
      <Link href="/contact/" className="border-none text-gray-700 hover:text-gray-900">
        {t('contact_link')}
      </Link>
      <Link href="/products/" className="border-none text-gray-700 hover:text-gray-900">
        {t('products_link')}
      </Link>
      
      <LocaleSwitcher />
      <a href="https://proxy.obralink.com/system/dashboard/manager/console/login/" className="btn-primary px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        {t('sign_up_link')}
      </a>
      <button className="btn-secondary px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700">
        {t('demo_link')}
      </button>

    </>
  );
  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-10 ${visible ? 'flex' : 'hidden'}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3 flex">
        <div className="flex items-center space-x-3 justify-between w-full">
          {/* Botón de hamburguesa (solo visible en sm) */}
          <Link href="/">
            <Image src="/assets/logo/logo.png" alt="Logo" width={120} height={20} className="object-contain" />
          </Link>

          <button type="button" className="text-gray-600 hover:text-gray-900 focus:outline-none sm:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`hidden sm:flex sm:space-x-4 flex-row items-center justify-between ${menuOpen ? 'hidden' : 'flex'}`}>
          {links}
        </div>

        </div>
        {/* Enlaces (visible en sm y md) */}

        {/* Menú desplegable (visible solo en sm) */}
        {menuOpen && (
          <div className="absolute w-full h-full flex flex-col top-16 bg-white p-4 sm:hidden">
            {links}
          </div>
        )}
        
      </div>
    </nav>
  );
}
