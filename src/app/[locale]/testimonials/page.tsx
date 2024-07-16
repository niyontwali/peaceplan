'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { stories } from '@/constants';
import Image from 'next/image';
import { truncateString } from '@/lib/utils';

const Testimonials = () => {
  return (
    <>
      <div className=''>
        <div className='container mx-auto px-8 py-[15svh] text-center'>
          <h1 className='mb-4 font-heading text-3xl font-bold text-core-900 md:text-4xl lg:text-5xl'>
          Stories of Transformation through <br />  the PEACE Plan Rwanda
          </h1>
          <p>Empowering Communities, Changing Lives.</p>
        </div>
      </div>

      <section className=' bg-tertiary rounded-t-[50px] mx-auto px-8 py-16'>
        <div className='container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {stories.map(story => (
            <div key={story.id} className='bg-white flex flex-col justify-between  h-full  rounded-[20px] pb-6 overflow-hidden shadow'>
              <Image
                src={story.thumbnail}
                alt={story.title}
                className='mb-4 w-full h-[300px] object-cover rounded'
                priority
                placeholder='blur'
              />
              <div className=' px-4'>
                <h3 className='mb-2  font-heading text-xl font-bold'>{story.title}</h3>
                <p className='text-gray-600 mb-4 '>{truncateString(story.description, 260)}</p>
              </div>

              <Link
                href="#"
                className='group group relative flex mx-4 w-fit  rounded-md px-3 py-1 text-sm leading-6 bg-secondary text-white hover:bg-secondary/95'
              >
                Read More
                <span className='flex items-center pl-2'>
                  <svg
                    className='stroke-current text-primary-700'
                    width='10'
                    height='10'
                    strokeWidth='2'
                    viewBox='0 0 10 10'
                    aria-hidden='true'
                    fill='#fff'
                  >
                    <g fillRule='evenodd'>
                      <path
                        className='opacity-0 transition duration-200 ease-in-out group-hover:opacity-100'
                        d='M0 5h7'
                      ></path>
                      <path
                        className='opacity-100 transition duration-200 ease-in-out group-hover:translate-x-1 group-hover:transform'
                        d='M1 1l4 4-4 4'
                      ></path>
                    </g>
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
