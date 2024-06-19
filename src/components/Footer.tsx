import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Instagram from './Instagram';
import Youtube from './Youtube';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('Index');
  return (
    <nav className='w-full bg-white py-3 border-t border-tertiary'>
      <div className='max-w-6xl px-6 mx-auto flex flex-col md:flex-row items-center justify-between'>
        <div className='flex space-x-3 items-center md:flex-1'>
          <div className='w-6 h-auto'>
            <a href='https://www.youtube.com/c/SHARPFIT/playlists' target='_blank'>
              <Youtube />
            </a>
          </div>
        </div>

        <div className='flex justify-center md:flex-1 mt-3 md:mt-0'>
          <small>{t('footer.copyRightYear', { currentYear })}</small>
        </div>

        <div className='flex space-x-8 items-center md:flex-1 justify-end mt-3 md:mt-0'>
          <Link href='/careers'>
            <small>{t('footer.careers')}</small>
          </Link>
          <Link href='/contact-us'>
            <small>{t('footer.contactUs')}</small>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
