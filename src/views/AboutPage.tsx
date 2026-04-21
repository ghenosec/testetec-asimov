'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Heart, Lightbulb, Users, Eye, Trophy } from 'lucide-react';
import TogetherForSuccessImage from '@/assets/TogetherForSuccess.png';
import CTAIllustration from '@/assets/Illustration/Illustration.png';
import GreenStar from '@/assets/Services/GreenStar.png';
import SectionIntro from '@/components/shared/SectionIntro';

const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      });

      const unsubscribe = rounded.on('change', (currentValue) => setDisplayValue(currentValue));

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, value, count, rounded]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const AboutPage = () => {
  const journeyRef = useRef(null);
  const isJourneyInView = useInView(journeyRef, { once: true, margin: '-100px' });

  return (
    <div className="pt-[100px] md:pt-[150px] pb-0">
      <section className="mb-10 md:mb-[140px]">
        <div className="container">
          <div className="bg-grey rounded-[45px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl md:text-6xl font-medium leading-tight">
                Together for Success
              </h1>
              <p className="text-xl text-dark leading-relaxed max-w-xl">
                At Positivus, we are committed to providing top-tier digital marketing services that help businesses of all sizes achieve their full potential.
              </p>
            </div>
            <div className="flex-1 relative">
              <motion.img
                src={TogetherForSuccessImage.src}
                alt="Together for Success"
                className="w-full h-auto object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 md:mb-[140px]">
        <div className="container">
          <SectionIntro
            title="Our Impact in Numbers"
            description="A glimpse into the milestones we've achieved through dedication and strategic excellence."
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center">
            {[
              { value: 8, suffix: '+', label: 'Years Experience' },
              { value: 50, suffix: '+', label: 'Experts' },
              { value: 100, suffix: '+', label: 'Projects Completed' },
              { value: 20, suffix: '+', label: 'Awards Won' },
              { value: 500, suffix: '%', label: 'ROI for Clients' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${index === 4 ? 'col-span-2 justify-self-center md:col-span-1 md:justify-self-auto' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-dark mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-dark/60 font-space whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10 md:mb-[140px]">
        <div className="container">
          <SectionIntro
            title="Our Journey"
            description="How we started, where we've been, and our vision for the future of digital marketing."
          />

          <div ref={journeyRef} className="relative mt-20 px-4 md:px-0">
            <div className="absolute left-1/2 top-0 bottom-0 hidden w-1 -translate-x-1/2 bg-dark/10 md:block" />

            <div className="space-y-16 md:space-y-24">
              {[
                { year: '2019', title: 'The Beginning', desc: 'Positivus was founded by a small team of passionate marketers with a vision to revolutionize the digital landscape.' },
                { year: '2021', title: 'Industry Recognition', desc: 'We received our first major industry award and expanded our team to over 20 experts across multiple disciplines.' },
                { year: '2023', title: 'Innovation and Growth', desc: 'Launched several proprietary marketing tools and expanded our services to include AI-driven data analytics.' },
                { year: '2024', title: 'Leading the Future', desc: 'Now a leading agency with global reach, helping hundreds of clients navigate the ever-evolving digital world.' },
              ].map((item, index) => (
                <div key={index} className={`flex flex-col items-center gap-12 md:flex-row md:gap-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex flex-1 items-center justify-center ${index % 2 !== 0 ? 'md:justify-start md:pl-20' : 'md:justify-end md:pr-20'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isJourneyInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-primary px-8 py-3 rounded-full border border-dark shadow-[4px_4px_0px_#191A23] text-2xl font-bold text-dark"
                    >
                      {item.year}
                    </motion.div>
                  </div>

                  <div className="relative z-10 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-dark bg-white shadow-sm md:flex">
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
                  </div>

                  <div className="w-full flex-1">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      animate={isJourneyInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="group relative overflow-hidden rounded-[45px] border-2 border-dark bg-white p-8 shadow-[0px_8px_0px_#191A23] transition-transform duration-300 hover:translate-y-[-5px] md:p-10"
                    >
                      <div className="absolute top-0 right-0 -mr-12 -mt-12 h-24 w-24 rounded-full bg-primary/5 transition-colors group-hover:bg-primary/10" />

                      <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                        <span className="h-8 w-2 rounded-full bg-primary" />
                        {item.title}
                      </h3>
                      <p className="font-space text-lg leading-relaxed text-dark/80">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 md:mb-[140px]">
        <div className="container">
          <SectionIntro
            title="Core Values"
            description="The principles that guide our work, our relationships, and our commitment to excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Client Success First', icon: Heart, desc: 'Your growth is our primary metric. We align our strategies with your business objectives.' },
              { title: 'Innovation', icon: Lightbulb, desc: 'We continuously explore new technologies and creative approaches to keep you ahead.' },
              { title: 'Collaboration', icon: Users, desc: 'We believe in the power of working togetherâ€”as a team and as a partner to our clients.' },
              { title: 'Transparency', icon: Eye, desc: 'Honest communication and clear reporting are at the heart of everything we do.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[45px] border-2 border-dark bg-white p-10 shadow-[0px_8px_0px_#191A23] transition-colors duration-300 hover:bg-primary/5"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary p-4 shadow-[4px_4px_0px_#191A23] transition-transform group-hover:rotate-6">
                    <value.icon size={32} className="text-dark" strokeWidth={2.5} />
                  </div>

                  <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                    {value.title}
                  </h3>

                  <p className="font-space text-lg leading-relaxed text-dark/80">
                    {value.desc}
                  </p>
                </div>

                <div className="absolute bottom-0 left-10 right-10 h-1 scale-x-0 rounded-t-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10 md:mb-[140px]">
        <div className="container">
          <div className="bg-dark rounded-[45px] p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <blockquote className="text-3xl md:text-4xl font-medium text-white leading-tight italic">
                  "At Positivus, we believe that success is built on innovation, collaboration, and a relentless focus on delivering results."
                </blockquote>
                <div className="text-primary text-xl font-medium">â€” John Smith, Founder of Positivus</div>
              </div>
              <div className="w-32 md:w-48 relative">
                <motion.img
                  src={GreenStar.src}
                  alt="Decoration"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 blur-2xl" />
          </div>
        </div>
      </section>

      <section className="mb-10 md:mb-[140px]">
        <div className="container">
          <SectionIntro
            title="Awards & Recognition"
            description="Celebrating the milestones and industry accolades that validate our commitment to excellence."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { year: '2023', name: 'Global Marketing Award', org: 'Best Agency' },
              { year: '2022', name: 'Digital Excellence', org: 'Top Performer' },
              { year: '2021', name: 'Innovation Hub', org: 'Future Leader' },
              { year: '2020', name: 'Client Choice', org: 'Highest Rated' },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  y: -15,
                  rotate: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 },
                }}
                className="group relative h-[380px]"
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[45px] bg-dark transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:bg-primary" />

                <div className="absolute inset-0 overflow-hidden rounded-[45px] border-2 border-dark bg-white p-10 transition-colors duration-300 group-hover:bg-dark">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-[60px] transition-all duration-500 group-hover:bg-primary/30" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="pointer-events-none absolute -right-4 -top-4 text-7xl font-bold text-dark/5 transition-colors group-hover:text-white/5">
                      {award.year}
                    </div>

                    <div className="mb-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary shadow-[4px_4px_0px_#191A23] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                      <Trophy size={40} className="text-dark" strokeWidth={2.5} />
                    </div>

                    <div className="mt-auto">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-1 w-8 rounded-full bg-primary transition-all duration-500 group-hover:w-16" />
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-dark/40 transition-colors group-hover:text-primary">
                          {award.year}
                        </span>
                      </div>

                      <h3 className="mb-3 text-2xl font-bold leading-tight text-dark transition-colors group-hover:text-white">
                        {award.name}
                      </h3>

                      <p className="font-space text-lg text-dark/60 transition-colors group-hover:text-white/70">
                        {award.org}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-8 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="h-12 w-12 rounded-br-xl border-b-4 border-r-4 border-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-0">
        <div className="container">
          <div className="bg-primary rounded-[45px] p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl space-y-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-medium leading-tight text-dark">
                Join Our Team
              </h2>
              <p className="text-xl text-dark/80 leading-relaxed">
                Whether you're an experienced professional or a rising star, we're always looking for talent to help us shape the future of digital marketing.
              </p>
              <button className="btn-secondary w-full md:w-auto">
                Explore Careers
              </button>
            </div>
            <div className="w-full md:w-[400px] relative z-10">
              <img src={CTAIllustration.src} alt="Join Our Team" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[40px] border-white/10" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
