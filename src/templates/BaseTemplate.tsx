import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  nav: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="">
        <header>
          <ul className="px-2 sm:px-20 mt-10">
            {props.nav}
          </ul>
        </header>

        <main className='mx-auto px-2 sm:px-20'>{props.children}</main>

      </div>
    </div>
  );
};

export { BaseTemplate };
