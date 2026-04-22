'use client';

import { motion } from 'framer-motion';
import Illustration from '../../assets/Illustration/Illustration.png';
import HeartIcon from '../../assets/Illustration/heart.png';
import ShareIcon from '../../assets/Illustration/share.png';
import PlayIcon from '../../assets/Illustration/play.png';
import LocationIcon from '../../assets/Illustration/location.png';

import AmazonLogo from '../../assets/CompanyLogo/amazon.png';
import DribbbleLogo from '../../assets/CompanyLogo/clrribbble.png';
import HubSpotLogo from '../../assets/CompanyLogo/hubspot.png';
import NetflixLogo from '../../assets/CompanyLogo/netflix.png';
import NotionLogo from '../../assets/CompanyLogo/notion.png';
import ZoomLogo from '../../assets/CompanyLogo/zoom.png';

const logos = [
  { src: AmazonLogo.src, alt: 'Amazon' },
  { src: DribbbleLogo.src, alt: 'Dribbble' },
  { src: HubSpotLogo.src, alt: 'HubSpot' },
  { src: NotionLogo.src, alt: 'Notion' },
  { src: NetflixLogo.src, alt: 'Netflix' },
  { src: ZoomLogo.src, alt: 'Zoom' },
];

const Hero = () => {
  return (
    <section className="relative pt-[100px] md:pt-[100px] pb-10 md:pb-[70px] overflow-hidden flex flex-col items-start gap-[70px] max-w-[1440px] mx-auto min-h-[771px]">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-[35px] md:w-[531px] md:h-[481px]"
        >
          <h1 className="text-4xl md:text-[60px] md:leading-[77px] font-medium text-black">
            Navigating the digital landscape for success
          </h1>
          <p className="text-xl md:text-2xl text-dark leading-relaxed">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="btn btn-primary text-lg px-8 py-4">
            Book a consultation
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[800px]">
            <img src={Illustration.src} alt="Positivus Illustration" className="w-full h-auto" fetchPriority="high" />
            
            <motion.div
              className="absolute min-w-[60px] sm:min-w-[70px] min-[1080px]:min-w-[100px] top-[0%] right-[16%] w-[10%] z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{ 
                scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.8 },
                opacity: { duration: 0.2, delay: 0.8 },
                y: { 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.3
                }
              }}
            >
              <img src={HeartIcon.src} alt="Floating Heart" className="w-full h-auto drop-shadow-md" fetchPriority="high" />
            </motion.div>

            <motion.div
              className="absolute min-w-[60px] sm:min-w-[70px] min-[1080px]:min-w-[100px] top-[2%] right-[0%] w-[10%] z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                y: [0, 10, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ 
                scale: { type: "spring", stiffness: 260, damping: 20, delay: 1.0 },
                opacity: { duration: 0.2, delay: 1.0 },
                y: { 
                  duration: 3.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.5
                },
                rotate: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }
              }}
            >
              <img src={ShareIcon.src} alt="Floating Share" className="w-full h-auto drop-shadow-md" fetchPriority="high" />
            </motion.div>

            <motion.div
              className="absolute min-w-[60px] sm:min-w-[70px] min-[1080px]:min-w-[100px] top-[23%] right-[2%] w-[10%] z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: 1,
              }}
              transition={{ 
                duration: 0.45,
                ease: "easeOut",
                delay: 1.2,
              }}
            >
               <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.7
                }}
               >
                  <img src={PlayIcon.src} alt="Pulse Play" className="w-full h-auto drop-shadow-md cursor-pointer" fetchPriority="high" />
               </motion.div>
            </motion.div>

            <motion.div
              className="absolute min-w-[60px] sm:min-w-[70px] min-[1080px]:min-w-[100px] bottom-[37%] right-[4%] w-[10%] z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                y: [0, -8, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                scale: { type: "spring", stiffness: 260, damping: 20, delay: 1.4 },
                opacity: { duration: 0.2, delay: 1.4 },
                y: { 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.9
                },
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.9
                }
              }}
            >
              <img src={LocationIcon.src} alt="Floating Location" className="w-full h-auto drop-shadow-md" fetchPriority="high" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="container mt-0 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <motion.div 
          className="flex items-center gap-12 md:gap-24 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {logos.map((logo, index) => (
            <img 
              key={`logo-1-${index}`} 
              src={logo.src} 
              alt={logo.alt} 
              className="h-8 md:h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              loading="lazy"
            />
          ))}
          {logos.map((logo, index) => (
            <img 
              key={`logo-2-${index}`} 
              src={logo.src} 
              alt={logo.alt} 
              className="h-8 md:h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
