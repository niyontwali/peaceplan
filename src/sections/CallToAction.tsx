'use client';

import { Button } from '@/components/ui/button';
import { CircleArrowUp } from 'lucide-react';
import React, { useState, FormEvent, ChangeEvent } from 'react';

const CallToAction = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted email:', email);
    // Reset the form
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='bg-white py-8 relative'>
      <div className='max-w-3xl mx-auto text-center '>
        <h2 className='text-4xl font-heading font-bold text-primary sm:text-5xl sm:tracking-tight'>
          Subscribe to Our Newsletter
        </h2>
        <p className='mt-4 text-md leading-6'>Stay up-to-date with our latest news, updates, and special offers.</p>
        <form onSubmit={handleSubmit} className='mt-8 sm:flex sm:max-w-md sm:mx-auto'>
          <div className='min-w-0 flex-1'>
            <label htmlFor='email' className='sr-only'>
              Email address
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className='border-primary border-[1px] w-full px-5 py-[7px] placeholder-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary/40 rounded-md'
            />
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-3'>
            <Button type='submit'>Subscribe</Button>
          </div>
        </form>
      </div>
      <div className='absolute right-12 bottom-10 cursor-pointer'>
        <CircleArrowUp onClick={scrollToTop} size='40' className='text-secondary' />
      </div>
    </div>
  );
};

export default CallToAction;
