'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { specialPath } from '@/constants';
import logo from '@/assets/common/logo.png';
import LanguageDropdown from './LanguageDropdown';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Contact } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathName = usePathname();
  const isLocationSpecial = specialPath.includes(pathName);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSection = (id: string) => {
    window.location.href = `/#${id}`;
    setIsOpen(false);
  };

  const isActive = (sectionId: string) => {
    return activeSection === sectionId;
  };

  const t = useTranslations('Index');

  return (
    <>
      {!isLocationSpecial && (
        <nav className='sticky top-0 z-40 w-full bg-white/70 py-3 backdrop-blur-md '>
          <div className='flex flex-row items-center justify-between px-4 md:px-5 lg:px-4 xl:px-0 container mx-auto'>
            <div>
              <Link href='/' onClick={isOpen ? toggleMenu : undefined}>
                <Image src={logo} alt='Peace Plan Logo' className='h-16 w-fit' priority />
              </Link>
            </div>
            <div className='hidden lg:flex'>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href='/' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {t('navbar.home')}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href='/what-is-the-peace-plan' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {t('navbar.what')}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href='/training-and-coaching' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {t('navbar.trainingAndCoaching')}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href='/testimonials' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {' '}
                        {t('navbar.testimonials')}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href='/our-team' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {' '}
                        {t('navbar.ourTeam')}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className='flex space-x-5 items-center'>
              <Link href='/contact-us'>
                <Contact />
              </Link>
              <LanguageDropdown />
            </div>
            <button
              id='menu-button'
              className={`${
                isOpen ? 'open' : ''
              } relative block size-6 self-center transition-all duration-300 focus:outline-none lg:hidden`}
              onClick={toggleMenu}
            >
              <span className='hamburger-top absolute left-0 top-0 h-[2px] w-6 rotate-0 bg-primary transition-all duration-300'></span>
              <span className='hamburger-middle absolute left-0 top-0 h-[2px] w-6 translate-y-2 rotate-0 bg-primary transition-all duration-300'></span>
              <span className='hamburger-bottom absolute left-0 top-0 h-[2px] w-6 translate-y-4 rotate-0 bg-primary transition-all duration-300'></span>
            </button>
          </div>

          <div id='mobile-menu'>
            <div
              id='menu'
              className={`${
                isOpen ? 'flex' : 'hidden'
              } absolute left-6 right-6 mt-4 flex-col items-center gap-6 self-end rounded-xl bg-white py-8 font-semibold drop-shadow-md sm:w-auto sm:self-center`}
            >
              <Button variant='link' onClick={() => navigateToSection('what-is-the-peace-plan')}>
                {t('navbar.what')}
              </Button>
              <Button variant='link' onClick={() => navigateToSection('training-and-coaching')}>
                {t('navbar.trainingAndCoaching')}
              </Button>
              <Button variant='link' onClick={() => navigateToSection('testimonials')}>
                {t('navbar.testimonials')}
              </Button>
              <Button variant='link' onClick={() => navigateToSection('our-team')}>
                {t('navbar.ourTeam')}
              </Button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              ' select-none space-y-1 rounded-md p-3 flex leading-none no-underline outline-none transition-colors hover:bg-tertiary hover:text-primary focus:bg-tertiary focus:text-white',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
