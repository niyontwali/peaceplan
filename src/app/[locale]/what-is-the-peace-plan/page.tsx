'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import aboutImage from '@/assets/common/about.jpg';
import modelImage from '@/assets/common/model.png';
import VisionMissionValues from '@/sections/VisionMissionValues';

const WhatIsThePeacePlan = () => {
  const t = useTranslations('Index');

  return (
    <div>
      <div className='relative h-[38rem] overflow-hidden rounded-[40px] bg-primary z-10  mt-2 px-4 md:px-5 lg:px-4 xl:px-0 container mx-auto'>
        <Image
          src={aboutImage}
          alt={t('about.imageCaption')}
          className='absolute inset-0 w-full h-full object-cover object-bottom'
          placeholder='blur'
        />
        <div className='absolute inset-0 bg-primary/80 z-10'></div>
        <div className='relative flex flex-col justify-center items-center h-full text-white p-4 md:p-10 lg:p-16 xl:p-24 text-left  w-full  z-50 '>
          <small className='text-white text-md md:text-lg  p-1 rounded-full  mb-4 font-bold'>{t('about.title')}</small>
          <h1 className='text-3xl md:text-5xl font-bold tracking-wide mb-4 break-words text-white font-heading'>
            {t('about.description')}
          </h1>
        </div>
      </div>
      <div className='max-w-3xl mx-auto text-center mt-10 '>
        <h2 className='text-4xl font-heading font-bold text-primary sm:text-5xl sm:tracking-tight'>
          {t('about.what')}
        </h2>
        <p className='mt-4 text-md leading-6'>{t('about.whatDescription')}</p>
      </div>
      <div className='my-10'>
        <div className='px-4 md:px-0 grid grid-cols-1 md:grid-cols-12 h-auto md:h-[30rem] max-w-6xl mx-auto items-center'>
          <div className='col-span-6 order-1 md:order-2 overflow-hidden max-w-6xl mx-auto'>
            <Image
              src={modelImage}
              alt='e-shop picture'
              className='w-full md:w-[80%]  h-auto md:h-auto object-fit'
              width={0}
              height={0}
              placeholder='blur'
            />
          </div>
          <div className='col-span-6 order-2 md:order-1 pt-8 md:pt-0 text-center md:text-left px-4 md:px-10 lg:px-12 xl:px-16 mb-8 md:mb-0 flex flex-col justify-center'>
            <div className='text-center'>
              <h1 className='text-3xl md:text-5xl font-bold mb-2 break-words font-heading'>{t('about.model')}</h1>
              <p className=''>{t('about.modelDescription')}</p>
            </div>
          </div>
        </div>
      </div>
      <VisionMissionValues />
    </div>
  );
};

export default WhatIsThePeacePlan;
