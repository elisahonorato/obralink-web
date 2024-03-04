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
        <header className="border-b border-gray-300 mt-10">
          <div className="flex justify-between">
            <nav>
              <ul className="">
                {props.nav}
              </ul>
            </nav>
          </div>
        </header>

        <main className='mx-auto px-2 sm:px-20'>{props.children}</main>

      </div>
    </div>
  );
};

export { BaseTemplate };
