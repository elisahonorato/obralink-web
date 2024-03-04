'use client';
import { useState } from 'react';
import { useLocale } from 'next-intl';
import type { ChangeEventHandler } from 'react';

import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';
import { FaBeer } from 'react-icons/fa';

export default function LocaleSwitcher() {

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(pathname, { locale: event.target.value });
    router.refresh();
  };

  return (
    <div className="flex space-x-2">
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="border font-medium focus:outline-none focus-visible:ring"
    >
      {AppConfig.locales.map((elt) => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
    </div>
  );
}