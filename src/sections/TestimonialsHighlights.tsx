'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const TestimonialsHighlights: React.FC = () => {
  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 0,
      controls: 1,
      loop: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div className='bg-secondary/30 py-24  px-10 rounded-[40px]'>
      <div className='mx-auto container'>
        <div className='gap-8 lg:flex lg:items-center lg:justify-between'>
          <div className='lg:w-1/2'>
            <h2 className='font-heading text-4xl font-bold text-core-950 xl:text-5xl'>
              In Association with Mackrell International
            </h2>
            <p className='animate-fade-in mt-3 max-w-3xl text-lg text-core-600 delay-200'>
              Shield Associates is proud to be associated with Mackrell International, a leading global network of
              independent legal and advisory firms.
            </p>
            <Link href='/testimonials'>
              <Button className='mt-5'>More Stories {'>>'}</Button>
            </Link>
          </div>
          <div className='mt-8 lg:ml-6 lg:mt-0 lg:w-1/2'>
            <div className='animate-fade-in  overflow-hidden rounded-3xl relative'>
              <YouTube videoId='90JUHEqm6WY' opts={opts} loading='lazy' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsHighlights;
