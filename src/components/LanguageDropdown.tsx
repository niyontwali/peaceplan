import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { GlobeIcon } from 'lucide-react';

interface Language {
  label: string;
  locale: string;
}

const LanguageDropdown: React.FC = () => {
  const router = useRouter();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=3153600;SameSite=Lax`;
    router.refresh();
  };

  const languages: Language[] = [
    { label: 'English', locale: 'en' },
    { label: 'French', locale: 'fr' },
    { label: 'Kinyarwanda', locale: 'kiny' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative inline-block text-left' ref={dropdownContainerRef}>
      <button
        type='button'
        className='inline-flex justify-between items-center rounded-md border border-primary shadow-sm px-2 py-1 bg-white text-sm font-medium focus:outline-none focus:ring-offset-1 focus:ring-offset-primary/20 focus:ring-1 focus:ring-primary/20 transition-all duration-300 text-primary w-16 hover:bg-primary/10'
        onClick={() => setIsOpen(!isOpen)}
      >
        <GlobeIcon className='h-4 w-4 transition-transform duration-300 ' />
        <span>{locale}</span>
      </button>
      {isOpen && (
        <div
          className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all duration-300 scale-100 opacity-100'
          ref={dropdownRef}
        >
          <div className='py-1 transition-all duration-300 ease-in-out translate-y-0 opacity-100'>
            {languages.map(lang => (
              <button
                key={lang.locale}
                className={`${
                  locale === lang.locale ? ' text-green' : 'text-black'
                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray/10 focus:outline-none transition-colors duration-300`}
                onClick={() => handleLanguageChange(lang.locale)}
              >
                {lang.label}
                {locale === lang.locale && (
                  <span className='transition-transform duration-300 transform'>&#10003;</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
