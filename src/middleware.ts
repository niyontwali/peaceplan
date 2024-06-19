import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'kiny'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'never',
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/what-is-the-peace-plan',
    '/training-and-coaching',
    '/testimonials',
    '/our-team',
    '/contact-us',
    '/careers',
    '/(en|fr|kiny)/:path*',
  ],
};
