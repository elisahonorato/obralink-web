"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LocaleSwitcher from '../Switchers/LocaleSwitcher';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ColoredLinkButton, RegularLinkButton } from '../customElements/Button/LinkButton';
import { RegularMenuLink } from '../customElements/Menu/MenuLink';
import { text } from 'stream/consumers';

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

      <RegularMenuLink className='group-hover:block hidden' text={t('clients_link')}>
        <RegularLinkButton href="/clients/" className='group'>
          {t('clients_link')}
        </RegularLinkButton>
      </RegularMenuLink>

      <RegularLinkButton href="/products/" className="border-none text-gray-700 hover:text-gray-900">
        {t('products_link')}
      </RegularLinkButton>
      <RegularLinkButton href="/blog/" className="border-none text-gray-700 hover:text-gray-900">
        {t('blog_link')}
      </RegularLinkButton>
      <LocaleSwitcher />
      <ColoredLinkButton href="https://proxy.obralink.com/system/dashboard/manager/console/login/" colorIntensity="light">
        {t('sign_up_link')}
      </ColoredLinkButton>

    </>
  );
  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-10 py-10 ${visible ? 'flex' : 'hidden'}`}>
      <div className="container mx-auto flex items-center justify-between">
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
