import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionIntroProps = {
  title: ReactNode;
  description: ReactNode;
  className?: string;
  descriptionClassName?: string;
  titleClassName?: string;
};

const SectionIntro = ({
  title,
  description,
  className,
  descriptionClassName,
  titleClassName,
}: SectionIntroProps) => {
  return (
    <div className={cn('mb-20 flex flex-col items-start gap-10 md:flex-row', className)}>
      <h2
        className={cn(
          'section-title mb-0 flex h-auto min-h-[51px] flex-col items-start justify-center px-[7px]',
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'max-w-[580px] font-space text-[18px] font-normal leading-[23px] text-black',
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionIntro;
