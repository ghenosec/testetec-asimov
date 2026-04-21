import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CTA from '@/components/sections/CTA';
import CaseStudies from '@/components/sections/CaseStudies';
import WorkingProcess from '@/components/sections/WorkingProcess';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
