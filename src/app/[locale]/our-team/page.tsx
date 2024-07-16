'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { teamMembers } from '@/constants';
import Image from 'next/image';

const OurTeam = () => {
  const [backgroundColor, setBackgroundColor] = useState('bg-background-300');

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;

    // Change the background color at specific scroll heights
    if (scrollPosition <= scrollHeight * 0.1) {
      setBackgroundColor('bg-white transition-colors duration-1000');
    } else if (scrollPosition > scrollHeight * 0.1 && scrollPosition <= scrollHeight * 0.5) {
      setBackgroundColor('bg-secondary/10 transition-colors duration-1000');
    } else if (scrollPosition > scrollHeight * 0.5) {
      setBackgroundColor('bg-secondary/10 transition-colors duration-1000');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  const renderTeamMembers = (filterKey: string) => {
    return teamMembers
      .filter(member => member.positionKey.includes(filterKey))
      .map(member => (
        <div key={member.label} className='flex flex-col items-center mb-8 cursor-pointer' onClick={() => null}>
          <Image
            src={member.image}
            alt={member.name}
            className='w-[150px] h-[150px] bg-tertiary rounded-full object-cover'
            width={130}
            height={130}
          />
          <h2 className='mt-4 text-lg font-bold'>{member.name}</h2>
          <h3 className='mt-2 text-sm '>{member.positionKey}</h3>
        </div>
      ));
  };

  return (
    <section className={`${backgroundColor}`}>
      <div className='mx-auto flex pt-[10vh] flex-col justify-center px-4 md:w-[50rem] md:px-0'>
        <p className='text-center text-sm font-bold capitalize'>Meet</p>
        <h1 className='text-center font-heading font-bold text-3xl md:text-5xl'>THE PEACE PLAN TEAM</h1>
        <p className='text-center text-sm font-bold capitalize'>Rwanda</p>
      </div>
      <Tabs defaultValue='board' className='py-10 px-4 md:px-0'>
        <TabsList className='grid w-full grid-cols-3 md:w-[500px] mx-auto mb-24'>
          <TabsTrigger value='board'>Governing Board</TabsTrigger>
          <TabsTrigger value='staff'>Staff</TabsTrigger>
          <TabsTrigger value='peaceLeaders'>Peace Leaders</TabsTrigger>
        </TabsList>
        <TabsContent value='board' className='mb-24 container mx-auto px-4 md:px-0 lg:px-[150px] w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>{renderTeamMembers('staff')}</div>
        </TabsContent>
        <TabsContent value='staff' className='container mx-auto px-4 md:px-0 lg:px-[150px] w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>{renderTeamMembers('staff')}</div>
        </TabsContent>
        <TabsContent value='peaceLeaders' className='container mx-auto px-4 md:px-0 lg:px-[150px] w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>{renderTeamMembers('staff')}</div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default OurTeam;
