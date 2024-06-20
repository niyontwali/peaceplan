import React from 'react';
import { CheckCircleIcon, EyeIcon, HeartIcon, FlagIcon } from 'lucide-react';

interface DataInterface {
  title: string;
  content: string;
  rowspan: number;
  colspan: number;
  backgroundColor: string;
  textColor: string;
  icon: React.ReactNode;
}

const data: DataInterface[] = [
  {
    title: 'Our Vision',
    content: 'A nationwide movement of healthy churches that transform communities.',
    rowspan: 1,
    colspan: 2,
    backgroundColor: '#b8cedc',
    textColor: '#184363',
    icon: <EyeIcon size={24} />, // Vision icon
  },
  {
    title: 'Our Values',
    content: '',
    rowspan: 2,
    colspan: 1,
    backgroundColor: '#f9a474',
    textColor: '#582615',
    icon: <HeartIcon size={24} />, // Values icon
  },
  {
    title: 'Our Mission',
    content:
      'To contribute in building a purpose-driven nation by building the capacity of the church to Promote reconciliation, equip servant leaders, Assist the poor, Care for the sick, and Educate the next generation.',
    rowspan: 1,
    colspan: 2,
    backgroundColor: '#f682a5',
    textColor: '#52225e',
    icon: <FlagIcon size={24} />, // Mission icon
  },
];

const valuesWithIcons = [
  { text: 'Bold and Doable Faith', icon: <CheckCircleIcon size={16} /> },
  { text: 'Unity', icon: <CheckCircleIcon size={16} /> },
  { text: 'Integrity / Authenticity', icon: <CheckCircleIcon size={16} /> },
  { text: 'Reproducible Holistic Sustainability', icon: <CheckCircleIcon size={16} /> },
  { text: 'Stewardship', icon: <CheckCircleIcon size={16} /> },
  { text: 'Intentionality', icon: <CheckCircleIcon size={16} /> },
  { text: 'Flexibility', icon: <CheckCircleIcon size={16} /> },
];

const VisionMissionValues = () => {
  return (
    <div className='py-10'>
      <div className='container mx-auto pb-8 lg:px-[15rem]'>
        <div className='flex flex-col gap-2 px-4 md:px-0'>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((coreValue, i) => (
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
                    <h3 className='text-2xl font-bold'>{coreValue.title}</h3>
                  </div>
                  {coreValue.icon}
                </div>
                {coreValue.title === 'Our Values' ? (
                  <ul className='text-lg'>
                    {valuesWithIcons.map((value, idx) => (
                      <li key={idx} className='flex items-center gap-2'>
                        {value.icon}
                        {value.text}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='text-lg'>{coreValue.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValues;
