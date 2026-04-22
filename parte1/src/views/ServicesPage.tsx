'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroImage from '@/assets/Services.png';
import CTAIllustration from '@/assets/Ready to Elevate Your Search Rankings.png';
import GrayStar from '@/assets/Services/GrayStar.png';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import SectionIntro from '@/components/shared/SectionIntro';
import AccordionItem from '@/components/shared/AccordionItem';

type SEOProcessStep = { id: string; title: string; desc: string };

const seoProcess: SEOProcessStep[] = [
  { id: '01', title: 'Website Audit & Analysis', desc: 'We perform a comprehensive audit of your website to identify technical issues and optimization opportunities.' },
  { id: '02', title: 'Keyword Research & Strategy', desc: 'Our team researches high-intent keywords that will drive targeted traffic to your business.' },
  { id: '03', title: 'On-Page Optimization', desc: 'We optimize your website content, meta tags, and structure to improve search engine visibility.' },
  { id: '04', title: 'Content Creation & Optimization', desc: 'High-quality, SEO-friendly content is created to engage your audience and rank for key terms.' },
  { id: '05', title: 'Link Building', desc: 'We develop a strategic link-building campaign to increase your domain authority and rankings.' },
  { id: '06', title: 'Monitoring & Reporting', desc: 'Regular monitoring and detailed reporting ensure we track progress and refine strategies.' },
];

const ProcessItem = ({ item, index }: { item: SEOProcessStep; index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <AccordionItem
      isOpen={isOpen}
      onToggle={() => setIsOpen((current) => !current)}
      leading={
        <div className="relative flex items-center justify-center">
          <img src={GrayStar.src} alt="Star" className="h-12 w-12 brightness-0 md:h-16 md:w-16" />
          <span className="absolute text-xl font-bold text-white md:text-2xl">{item.id}</span>
        </div>
      }
      title={item.title}
      className="mb-6"
      iconSize={28}
      iconWrapperClassName="h-10 w-10 md:h-14 md:w-14"
    >
      <p className="text-lg md:text-xl leading-relaxed text-dark">{item.desc}</p>
    </AccordionItem>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-[100px] md:pt-[150px]">
      <section className="mb-10 md:mb-[140px]">
        <div className="container">
          <div className="bg-grey rounded-[45px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
            <div className="flex-1">
              <motion.img
                src={HeroImage.src}
                alt="Services Hero"
                className="w-full h-auto object-contain"
                initial={{ opacity: 0, scale: 0.9, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                loading="lazy"
              />
            </div>
            <div className="flex-1 space-y-8 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-[60px] font-medium leading-tight">
                Expert Digital Marketing Services
              </h1>
              <p className="text-lg sm:text-xl text-dark leading-relaxed max-w-xl mx-auto md:mx-0">
                Boost your business with our data-driven marketing strategies tailored for success in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 md:mb-[140px]">
        <div className="container">
          <div className="bg-dark rounded-[45px] p-12 md:p-20 relative overflow-hidden group">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute -right-20 -top-20 opacity-10"
            >
              <img src={GrayStar.src} alt="" className="h-[400px] w-[400px] invert" />
            </motion.div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-[0px_0px_20px_rgba(185,255,102,0.3)]">
                    <img src={GrayStar.src} alt="SEO" className="h-6 w-6 brightness-0" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary md:text-base">
                    Premium SEO Services
                  </span>
                </div>

                <h2 className="text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
                  Unlock your business potential with <span className="text-primary">Expert SEO</span>
                </h2>

                <p className="max-w-2xl font-space text-lg leading-relaxed text-white/70 md:text-xl">
                  We don't just optimize for search engines; we optimize for humans and results. Get a custom strategy tailored to your industry.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6 lg:items-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-[20px] bg-primary px-12 py-6 text-xl font-bold text-dark shadow-[0px_8px_0px_#191A23] transition-all duration-300 hover:bg-white md:w-auto md:text-2xl"
                >
                  Get the Strategy
                </motion.button>
                <span className="text-center text-sm italic text-white/40 font-space lg:text-right">
                  * 30-min free audit included
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      </section>

      <section className="mb-10 md:mb-[70px]">
        <div className="container">
          <SectionIntro
            title="How We Work: SEO Process"
            description="A Step-by-Step Guide to Achieving Your Search Engine Optimization Goals"
          />
          <div className="flex flex-col gap-2">
            {seoProcess.map((item, index) => (
              <ProcessItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />
      <Services />

      <section className="mt-10 mb-10 md:mt-[70px] md:mb-[140px]">
        <div className="container">
          <div className="relative overflow-hidden rounded-[45px] border border-dark bg-white p-8 shadow-[0px_8px_0px_#191A23] md:p-16">
            <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="relative z-10 max-w-xl space-y-8 text-center md:text-left">
                <h2 className="text-4xl font-medium leading-tight text-dark md:text-5xl">
                  Ready to Elevate Your Search Rankings?
                </h2>
                <p className="font-space text-xl leading-relaxed text-dark/70">
                  Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </p>
                <button className="w-full rounded-2xl border-2 border-dark bg-primary px-10 py-5 font-bold text-dark shadow-[0px_4px_0px_#191A23] transition-all hover:translate-y-[-2px] md:w-auto">
                  Get Your Free Quote
                </button>
              </div>
              <div className="relative z-10 w-full md:w-[450px]">
                <img src={CTAIllustration.src} alt="Elevate Rankings" className="w-full h-auto" loading="lazy" />
              </div>
            </div>
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-dark/5" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
