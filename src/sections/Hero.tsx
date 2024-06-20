'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/home/heroImage.png';
import { gsap } from 'gsap';

const Hero = () => {
  const t = useTranslations('Index');
  const texts = [t('hero.action1'), t('hero.action2'), t('hero.action3'), t('hero.action4'), t('hero.action5')];
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLDivElement | null>(null);
  const indicatorRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' });
    });

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % texts.length;
        gsap.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' });
        return newIndex;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, [texts.length]);

  useEffect(() => {
    if (indicatorRefs.current[currentIndex]) {
      gsap.to(indicatorRefs.current[currentIndex], { width: 24, backgroundColor: '#eb930a', duration: 0.5 });
      indicatorRefs.current.forEach((ref, index) => {
        if (index !== currentIndex && ref) {
          gsap.to(ref, { width: 8, backgroundColor: '#FFFFFF', duration: 0.5 });
        }
      });
    }
  }, [currentIndex]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    gsap.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' });
  };

  const handleClick = () => {
    if (typeof document !== 'undefined') {
      const whoWeAreElement = document.getElementById('whoWeAre');
      if (whoWeAreElement) {
        whoWeAreElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className='relative h-[38rem] overflow-hidden rounded-[40px] bg-primary z-10'>
      <Image
        src={heroImage}
        alt={t('hero.imageCaption')}
        className='absolute inset-0 w-full h-full object-cover object-bottom'
        placeholder='blur'
      />
      <div className='absolute inset-0 bg-primary/80 z-10'></div>
      <div className='relative flex flex-col justify-center items-center h-full text-white p-4 md:p-10 lg:p-16 xl:p-24 text-left  w-full  z-50 '>
        <h1 className='text-white text-md md:text-lg  p-1 rounded-full  mb-4 font-bold'>{t('hero.title')}</h1>
        <div
          ref={textRef}
          className='text-3xl md:text-5xl font-bold tracking-wide mb-4 break-words text-white font-heading'
        >
          {texts[currentIndex]}
        </div>
        <div className='flex space-x-2 mb-4'>
          {texts.map((_, index) => (
            <div
              key={index}
              ref={el => {
                indicatorRefs.current[index] = el;
              }}
              className={`w-2 h-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-secondary w-6' : 'bg-white'}`}
              onClick={() => handleIndicatorClick(index)}
            ></div>
          ))}
        </div>
        <Button onClick={handleClick} className='mt-4'>
          {t('hero.buttonText')}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
