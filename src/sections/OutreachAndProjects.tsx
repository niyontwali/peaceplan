'use client';
import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ChurchIcon, UsersIcon, ClipboardListIcon } from 'lucide-react';

interface OutreachProjectData {
  title: string;
  number: number;
  content: string;
  rowspan: number;
  colspan: number;
  backgroundColor: string;
  textColor: string;
  icon: React.ReactNode;
}

const outreachProjectsData: OutreachProjectData[] = [
  {
    title: 'Churches',
    number: 10000,
    content: 'Impacted to build a strong reconciliation initiatives',
    rowspan: 1,
    colspan: 2,
    backgroundColor: '#b8cedc',
    textColor: '#184363',
    icon: <ChurchIcon size={24} />,
  },
  {
    title: 'People',
    number: 3000,
    content: 'Trained in servant leadership orphan care/parenting, savings group and early childhood program',
    rowspan: 2,
    colspan: 1,
    backgroundColor: '#f9a474',
    textColor: '#582615',
    icon: <UsersIcon size={24} />,
  },
  {
    title: 'Projects',
    number: 10000,
    content: 'Built houses, pre-school classrooms, orphan care sponsorship, water catchment systems etc..',
    rowspan: 1,
    colspan: 2,
    backgroundColor: '#f682a5',
    textColor: '#52225e',
    icon: <ClipboardListIcon size={24} />,
  },
];

const OutreachAndProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containers = containerRef.current?.querySelectorAll('.countup-item');
    containers?.forEach(container => {
      gsap.from(container, {
        y: 20,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      });
    });
  }, []);

  return (
    <div className='py-10'>
      <div className='container mx-auto pb-8 lg:px-[15rem]'>
        <h2 className='mb-10 flex justify-center font-heading text-2xl font-bold capitalize sm:text-center sm:text-3xl lg:text-start lg:text-6xl'>
          Outreach and Projects
        </h2>
        <div ref={containerRef} className='flex flex-col gap-2 px-4 md:px-0'>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {outreachProjectsData.map((coreValue, i) => (
              <div
                key={i + 1}
                className={`countup-item rounded-xl p-6 ${
                  coreValue.colspan === 2 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                style={{
                  gridRow: `span ${coreValue.rowspan}`,
                  backgroundColor: coreValue.backgroundColor,
                  color: coreValue.textColor,
                }}
              >
                <div className='mb-4 flex items-start justify-between'>
                  <div className='flex items-center gap-4'>
                    <div className='text-5xl font-bold'>
                      <CountUp start={1} end={Math.round(coreValue.number / 1000)} duration={2} suffix='K' />+
                      <h3 className='text-2xl font-bold'>{coreValue.title}</h3>
                    </div>
                  </div>
                  {coreValue.icon}
                </div>

                <p className='text-lg'>{coreValue.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutreachAndProjects;
