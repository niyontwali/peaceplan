import { useTranslations } from 'next-intl';

import Hero from '@/sections/Hero';
import WhoWeAre from '@/sections/WhoWeAre';
import OutreachAndProjects from '@/sections/OutreachAndProjects';
import TestimonialsHighlights from '@/sections/TestimonialsHighlights';

export default function Home() {
  return (
    <main>
      <section id='home' className='pt-2 px-4 md:px-5 lg:px-4 xl:px-0 container mx-auto'>
        <Hero />
      </section>
      <section id='whoWeAre' className='px-4 md:px-5 lg:px-4 xl:px-0 container mx-auto'>
        <WhoWeAre />
      </section>
      <section id='whoWeAre' className=''>
        <OutreachAndProjects />
      </section>
      <section id='whoWeAre' className=''>
        <TestimonialsHighlights />
      </section>
    </main>
  );
}
