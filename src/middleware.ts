import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';

export default createMiddleware({
  defaultLocale: AppConfig.defaultLocale,
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
