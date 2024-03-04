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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);


  

  return (
    <div className={`${visible ? 'flex' : 'hidden'} justify-between items-center font-body`}>
      <div className="flex items-center justify-between align-baseline gap-4">
        <>
          {/* Navbar */}
          <li>
            <Link href="/" className="border-none text-gray-700 hover:text-gray-900">
              <Image src="/assets/logo/logo.png" alt="Logo" width={120} height={20} className="object-contain" />
            </Link>
          </li>
          <li className='mt-4'>
            <Link href="/products/" className="border-none text-gray-700 hover:text-gray-900">
              {t('products_link')}
            </Link>
          </li>
          <li className='mt-4'>
            <Link href="/contact/" className="border-none text-gray-700 hover:text-gray-900">
              {t('contact_link')}
            </Link>
          </li>
        </>
      </div>
      <div>
        <LocaleSwitcher></LocaleSwitcher>
      </div>
      
    </div>
  );
}
