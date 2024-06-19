import React from 'react';
import Image from 'next/image';

import governingBoard from '@/assets/common/governingboard.jpg';

const WhoWeAre = () => {
  return (
    <div className='container mx-auto px-4 md:px-0 lg:px-[180px] w-full'>
      <h2 className='mt-10 flex justify-center font-heading text-2xl font-bold capitalize  sm:text-center sm:text-3xl lg:text-start lg:text-6xl '>
        Who we Are
      </h2>
      <div className='flex flex-col justify-between py-20 lg:flex-row lg:items-start'>
        <div className='mb-8 lg:mb-0 lg:w-1/2'>
          <div className='relative mx-0 h-[70vh] max-w-[600px] sm:mx-auto sm:h-[60vh] sm:w-full lg:mx-0 lg:h-[70vhpx]'>
            <Image
              src={governingBoard}
              alt='image'
              fill
              priority={true}
              className='rounded-[10%] object-cover'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='w-full px-[20px] sm:px-[60px] lg:w-1/2 lg:px-0 lg:pl-20 '>
          <p className='mb-4 sm:mb-6'>
            The PEACE Plan Rwanda is a faith-based organization that was established in the country in 2009 by different
            Church Councils in Rwanda namely Conseil Protestant au Rwanda (CPR), Alliance Evangelique au Rwanda (AER),
            Eglise Anglicane au Rwanda (EAR), Forum of Born Again Churches of Rwanda (FOBACOR) and National Unity
            Fellowship (NUF) and partnering with other church Councils operating in Rwanda. Our purpose is to bring
            about holistic transformation among communities.
          </p>
          <p>
            The PEACE plan Rwanda views the role of the Church as not only to address spiritual emptiness, but also to
            deal with other rampant problems of corrupt leadership extreme poverty pandemic diseases and illiteracy. It
            is from this perspective that our approach to community development is through empowering our members to
            effectively fulfill our vision of transforming communities
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
