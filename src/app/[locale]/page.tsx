import { useTranslations } from 'next-intl';

import Hero from '@/sections/Hero';
import WhoWeAre from '@/sections/WhoWeAre';
import OutreachAndProjects from '@/sections/OutreachAndProjects';
import TestimonialsHighlights from '@/sections/TestimonialsHighlights';
import CallToAction from '@/sections/CallToAction';

export default function Home() {
  return (
    <main>
      <section className='pt-2 px-4 md:px-5 lg:px-4 xl:px-0 container mx-auto'>
        <Hero />
      </section>
      <section id='whoWeAre'>
        <WhoWeAre />
      </section>
      <section>
        <OutreachAndProjects />
      </section>
      <section className='pt-2 px-4 md:px-5 lg:px-4 xl:px-0 container mx-auto'>
        <TestimonialsHighlights />
      </section>
      <section>
        <CallToAction />
      </section>
    </main>
  );
}
