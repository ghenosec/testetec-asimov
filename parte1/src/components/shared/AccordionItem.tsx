'use client';

import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/cn';

type AccordionItemProps = {
  isOpen: boolean;
  onToggle: () => void;
  leading: ReactNode;
  title: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  iconSize?: number;
  iconWrapperClassName?: string;
  titleClassName?: string;
};

const AccordionItem = ({
  isOpen,
  onToggle,
  leading,
  title,
  children,
  className,
  contentClassName,
  iconSize = 32,
  iconWrapperClassName,
  titleClassName,
}: AccordionItemProps) => {
  return (
    <div
      className={cn(
        'flex flex-col rounded-[45px] border border-dark px-8 py-8 shadow-[0px_5px_0px_#191A23] transition-all duration-300 md:px-[60px] md:py-[41px]',
        isOpen ? 'bg-primary' : 'bg-grey',
        className,
      )}
    >
      <button
        type="button"
        className="flex items-center justify-between text-left"
        onClick={onToggle}
      >
        <div className="flex items-center gap-6 md:gap-10">
          {leading}
          <div className={cn('text-2xl font-medium md:text-3xl', titleClassName)}>{title}</div>
        </div>
        <div
          className={cn(
            'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-dark bg-grey md:h-16 md:w-16',
            iconWrapperClassName,
          )}
        >
          {isOpen ? <Minus size={iconSize} /> : <Plus size={iconSize} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={cn('pt-[30px]', contentClassName)}>
              <div className="mb-8 h-px w-full bg-dark opacity-20" />
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
