'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { stories } from '@/constants';

const Testimonials = () => {
  const [backgroundColor, setBackgroundColor] = useState('bg-background-200');

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition <= scrollHeight * 0.05) {
      setBackgroundColor('bg-secondary/20 transition-colors duration-1000');
    } else if (scrollPosition > scrollHeight * 0.05 && scrollPosition <= scrollHeight * 0.5) {
      setBackgroundColor('bg-primary/20 transition-colors duration-1000');
    } else if (scrollPosition > scrollHeight * 0.5) {
      setBackgroundColor('bg-primary/20 transition-colors duration-1000');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div className={`${backgroundColor}`}>
        <div className='container mx-auto px-8 py-[22svh] text-center'>
          <h1 className='mb-4 font-heading text-4xl font-bold text-core-900 md:text-5xl lg:text-6xl'>
            Explore Our Stories
          </h1>
          <p className='mb-8 text-lg md:text-xl lg:text-2xl'>A business approach to legal service</p>
          <a
            href='#services'
            className='inline-block rounded-full bg-accent-500 px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-accent-600'
          >
            Discover More
          </a>
        </div>
      </div>

      <section id='services' className='container mx-auto px-8 py-8'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {stories.map(story => (
            <div key={story.id} className='bg-neutral-900 flex h-full flex-col rounded-lg p-6 shadow'>
              <img src={story.thumbnail} alt={story.title} className='mb-4 w-full h-40 object-cover rounded' />
              <div className='flex flex-grow flex-col items-center'>
                <h3 className='mb-2 text-center font-heading text-lg font-bold'>{story.title}</h3>
                <p className='text-gray-600 mb-4 text-center'>{story.description}</p>
              </div>

              <Link
                href={`practice/${story.link}`}
                className='group group relative mx-auto flex w-fit items-center rounded-full px-3 py-1 text-sm leading-6 text-primary-700 ring-1 ring-primary-700 hover:bg-primary-50 hover:ring-primary-700'
              >
                More Details
                <span className='flex items-center pl-2'>
                  <svg
                    className='stroke-current text-primary-700'
                    width='10'
                    height='10'
                    strokeWidth='2'
                    viewBox='0 0 10 10'
                    aria-hidden='true'
                    fill='#daa931'
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
