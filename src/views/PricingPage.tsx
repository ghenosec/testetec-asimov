'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import AccordionItem from '@/components/shared/AccordionItem';
import SectionIntro from '@/components/shared/SectionIntro';

const pricingPlans = [
  {
    name: 'Basic Plan',
    price: '$500',
    period: '/ month',
    description: 'Great for small businesses looking for an effective online presence.',
    features: [
      'Website optimization',
      'Social media management (2 platforms)',
      'Monthly progress report',
      'Email support',
      'Basic content creation',
      '1440/80 px',
    ],
    buttonText: 'Get started',
    bgColor: 'bg-white',
    textColor: 'text-dark',
    isPro: false,
    btn1Color: 'bg-dark text-white',
    btn2Color: 'bg-white text-dark border-dark',
  },
  {
    name: 'Pro Plan',
    price: '$1000',
    period: '/ month',
    description: 'Ideal for growing companies needing advanced marketing strategies.',
    features: [
      'Advanced SEO & keyword research',
      'Social media management (4 platforms)',
      'PPC ad campaign management',
      'Weekly performance report',
      'Priority email & chat support',
      'Custom content production',
      'Marketing strategy',
    ],
    buttonText: 'Get started',
    bgColor: 'bg-dark',
    textColor: 'text-white',
    isPro: true,
    btn1Color: 'bg-primary text-dark',
    btn2Color: 'bg-dark text-white border-white/20',
  },
  {
    name: 'Elite Plan',
    price: '$2000',
    period: '/ month',
    description: 'Comprehensive digital marketing solutions for industry dominance.',
    features: [
      'Full-funnel marketing strategy',
      'Multi-platform social media',
      'Comprehensive SEO & technical audits',
      'Detailed analytics and custom reporting',
      '24/7 dedicated account manager',
      'Extensive content and video production',
      'Full brand analysis and reputation',
    ],
    buttonText: 'Get started',
    bgColor: 'bg-white',
    textColor: 'text-dark',
    isPro: false,
    btn1Color: 'bg-dark text-white',
    btn2Color: 'bg-white text-dark border-dark',
  },
];

type FAQ = { question: string; answer: string };

const faqs: FAQ[] = [
  {
    question: 'Are there any additional fees or charges that may apply?',
    answer: 'At Positivus, we believe in transparent pricing. The monthly fee covers all the digital marketing services listed in your selected plan. There are no hidden charges. However, third-party costs like advertising spend (Google Ads, Meta Ads) are not included in the retainer and will be billed separately by the respective platforms.',
  },
  {
    question: 'Can I change or cancel my plan at any time?',
    answer: 'Yes, our plans are flexible. You can upgrade, downgrade, or cancel your subscription at the end of each billing cycle without any penalties.',
  },
  {
    question: 'Do you offer a free trial or consultation?',
    answer: 'We provide a free initial consultation to analyze your current online presence and recommend the best strategy for your business goals.',
  },
  {
    question: 'How do you bill and invoice your clients?',
    answer: 'Invoicing is done on a monthly basis. We accept various payment methods, including bank transfers and major credit cards.',
  },
  {
    question: 'Are your services guaranteed to deliver results?',
    answer: 'While we cannot guarantee specific market outcomes, we use data-driven methodologies and proven strategies to ensure the highest possible ROI for our clients.',
  },
  {
    question: 'Do you offer contract-based or monthly retainer-based pricing?',
    answer: 'Most of our clients prefer our monthly retainer model for its flexibility, but we also offer fixed-term contracts for large-scale enterprise projects.',
  },
];

const PricingPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="pt-[100px] md:pt-[150px]">
      <section className="mb-10 md:mb-[140px]">
        <div className="container">
          <div className="mb-20 flex flex-col text-center md:text-left">
            <h1 className="text-5xl md:text-[60px] font-medium leading-tight">Pricing</h1>
            <p className="max-w-[580px] font-space text-[18px] font-normal leading-[23px] text-black">
              Simple and Transparent Pricing for Every Business Need. No Hidden Fees.
            </p>
          </div>

          <div className="grid items-stretch gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-[45px] border border-dark p-10 shadow-[0px_5px_0px_#191A23] ${plan.bgColor} ${plan.textColor} ${plan.isPro ? 'md:z-10 md:scale-105' : 'md:my-6'}`}
              >
                {plan.isPro ? (
                  <div className="absolute right-10 top-8 rounded-full border border-dark bg-primary px-4 py-1.5 text-xs font-bold text-dark">
                    POPULAR
                  </div>
                ) : null}

                <div className="mb-8">
                  <h3 className="mb-4 text-3xl font-medium">{plan.name}</h3>
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-lg font-medium opacity-60">{plan.period}</span>
                  </div>
                  <p className="mb-8 text-lg opacity-70">{plan.description}</p>

                  <div className="mb-10 space-y-4">
                    <button className={`w-full rounded-2xl border-2 border-dark py-4 font-bold shadow-[0px_4px_0px_#191A23] transition-all hover:translate-y-[-2px] hover:shadow-[0px_6px_0px_#191A23] active:translate-y-[0px] ${plan.btn1Color}`}>
                      {plan.buttonText}
                    </button>
                    <button className={`w-full rounded-2xl border-2 py-4 font-bold shadow-[0px_4px_0px_#191A23] transition-all hover:translate-y-[-2px] hover:shadow-[0px_6px_0px_#191A23] active:translate-y-[0px] ${plan.btn2Color}`}>
                      Request a quote
                    </button>
                  </div>

                  <div className="mb-10 h-[1px] w-full border-t border-dashed border-dark/20 bg-dark/10" />

                  <ul className="space-y-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-dark bg-primary">
                          <Check size={14} className="text-dark" strokeWidth={4} />
                        </div>
                        <span className="text-lg leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10 md:mb-[70px]">
        <div className="container">
          <SectionIntro
            title="Frequently Asked Questions"
            description="Step-by-Step Guide to Achieving Your Business Goals"
            descriptionClassName="max-w-[292px]"
          />

          <div className="flex w-full flex-col gap-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                leading={<span className="text-4xl font-medium md:text-6xl">{`0${index + 1}`}</span>}
                title={<span className="pr-8">{faq.question}</span>}
              >
                <p className="text-lg md:text-xl leading-relaxed text-dark">{faq.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
