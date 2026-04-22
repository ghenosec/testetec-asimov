'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AccordionItem from '@/components/shared/AccordionItem';
import SectionIntro from '@/components/shared/SectionIntro';

const processes = [
  {
    number: '01',
    title: 'Consultation',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will help us understand your needs and tailor our services to your requirements.',
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    description: 'We conduct thorough market research and competitor analysis to develop a customized strategy that aligns with your business objectives.',
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our team of experts will implement the agreed-upon strategy, ensuring all campaigns are set up correctly and optimized for success.',
  },
  {
    number: '04',
    title: 'Monitoring and Optimization',
    description: 'We continuously monitor campaign performance and make data-driven adjustments to optimize results and ensure you get the best return on investment.',
  },
  {
    number: '05',
    title: 'Reporting and Communication',
    description: 'We provide regular reports and updates on campaign performance, so you can track progress and understand the impact of our marketing efforts.',
  },
  {
    number: '06',
    title: 'Continual Improvement',
    description: 'We are committed to continuous improvement, staying up-to-date with the latest industry trends and best practices to ensure your business stays ahead of the competition.',
  },
];

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="process" className="py-10 md:py-[70px] bg-white">
      <div className="container">
        <SectionIntro
          title="Our Working Process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
          descriptionClassName="w-[292px] h-[46px] flex-none grow-0"
        />

        <div className="flex flex-col gap-6 max-w-[1234px] mx-auto">
          {processes.map((process, index) => (
            <motion.div
              key={process.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <AccordionItem
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                leading={<span className="text-4xl font-medium md:text-6xl">{process.number}</span>}
                title={process.title}
              >
                <p className="text-lg md:text-xl leading-relaxed text-dark">
                  {process.description}
                </p>
              </AccordionItem>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
