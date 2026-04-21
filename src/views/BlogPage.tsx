'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, User, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Optimize Your Website for Search Engines',
    category: 'SEO',
    author: 'John Smith',
    date: 'March 15, 2026',
    readTime: '5 min read',
    excerpt: 'Discover the latest SEO techniques to improve your search engine rankings and drive more organic traffic to your site.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    bgColor: 'bg-white',
  },
  {
    id: 2,
    title: 'The Future of Social Media Marketing in 2026',
    category: 'Social Media',
    author: 'Jane Doe',
    date: 'March 10, 2026',
    readTime: '7 min read',
    excerpt: 'Stay ahead of the curve with our insights into the upcoming trends and technologies shaping the social media landscape.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    bgColor: 'bg-primary',
  },
  {
    id: 3,
    title: 'Mastering PPC: A Comprehensive Guide for Beginners',
    category: 'PPC',
    author: 'Michael Brown',
    date: 'March 05, 2026',
    readTime: '8 min read',
    excerpt: 'Learn how to create and manage effective Pay-Per-Click campaigns that deliver measurable results and high ROI.',
    image: 'https://asmarketingagency.com/wp-content/uploads/2023/10/Mastering-Japanese-Localization-PPC-1.png',
    bgColor: 'bg-dark',
    textColor: 'text-white',
  },
  {
    id: 4,
    title: 'Why Content Marketing is Essential for Brand Growth',
    category: 'Content Marketing',
    author: 'Emily Johnson',
    date: 'February 28, 2026',
    readTime: '6 min read',
    excerpt: 'Understand the power of high-quality content in building brand authority, engaging audiences, and driving conversions.',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop',
    bgColor: 'bg-grey',
  },
];

const BlogPage = () => {
  const featuredPost = blogPosts[1];

  return (
    <div className="pt-[100px] pb-20 md:pt-[150px]">
      <section className="bg-white">
        <div className="container">
          <div className="mb-10 flex flex-col text-center md:mb-20 md:text-left">
            <h1 className="text-5xl md:text-[60px] font-medium leading-tight">Blog</h1>
            <p className="max-w-[580px] font-space text-[18px] font-normal leading-[23px] text-black">
              Insights, news, and expert advice on all things digital marketing to help you grow your business.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col items-center gap-12 overflow-hidden rounded-[45px] border border-dark bg-dark p-8 shadow-[0px_5px_0px_#191A23] md:mb-16 md:p-12 lg:flex-row"
          >
            <div className="w-full lg:w-1/2">
              <img
                src={featuredPost.image}
                alt="Featured Post"
                className="h-[300px] w-full rounded-[30px] object-cover md:h-[400px]"
              />
            </div>
            <div className="w-full text-white lg:w-1/2">
              <span className="mb-6 inline-block rounded-md bg-primary px-4 py-1 text-sm font-bold text-dark">FEATURED</span>
              <h2 className="mb-6 text-3xl font-medium leading-tight md:text-5xl">
                {featuredPost.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-white/70">
                {featuredPost.excerpt}
              </p>
              <div className="mb-8 flex flex-wrap gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-primary" /> {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" /> {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" /> {featuredPost.readTime}
                </div>
              </div>
              <button className="group flex items-center gap-2 text-lg font-medium text-primary hover:underline">
                Read More <ArrowUpRight size={20} className="transition-all duration-300 ease-in-out group-hover:rotate-45" />
              </button>
            </div>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col rounded-[45px] border border-dark p-8 shadow-[0px_5px_0px_#191A23] ${post.bgColor} ${post.textColor || 'text-dark'}`}
              >
                <div className="mb-6 overflow-hidden rounded-[30px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <span className={`${post.bgColor === 'bg-dark' ? 'bg-primary text-dark' : 'bg-dark text-white'} rounded-md px-3 py-1 text-xs font-bold`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs opacity-60">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-medium leading-snug">
                  {post.title}
                </h3>
                <p className="mb-6 flex-grow leading-relaxed opacity-70">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="text-sm font-medium">By {post.author}</div>
                  <button className={`group flex items-center gap-2 font-medium hover:underline ${post.bgColor === 'bg-dark' ? 'text-primary' : 'text-dark'}`}>
                    Read <ArrowUpRight size={18} className="transition-all duration-300 ease-in-out group-hover:rotate-45" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-2 px-4 md:gap-4">
            <button className="group h-10 w-10 flex-shrink-0 rounded-full border border-dark transition-all hover:scale-110 hover:bg-primary md:h-12 md:w-12">
              <ChevronLeft size={20} className="mx-auto group-hover:text-dark md:h-6 md:w-6" />
            </button>
            <div className="flex items-center gap-1 md:gap-2">
              <button className="h-10 w-10 rounded-full border border-dark bg-primary text-sm font-bold text-dark shadow-[0px_3px_0px_#191A23] md:h-12 md:w-12 md:text-base">1</button>
              <button className="h-10 w-10 rounded-full border border-dark text-sm transition-colors hover:bg-primary md:h-12 md:w-12 md:text-base">2</button>
              <button className="h-10 w-10 rounded-full border border-dark text-sm transition-colors hover:bg-primary md:h-12 md:w-12 md:text-base">3</button>
              <span className="px-1 text-lg font-bold text-dark md:px-2 md:text-xl">...</span>
              <button className="h-10 w-10 rounded-full border border-dark text-sm transition-colors hover:bg-primary md:h-12 md:w-12 md:text-base">9</button>
              <button className="h-10 w-10 rounded-full border border-dark text-sm transition-colors hover:bg-primary md:h-12 md:w-12 md:text-base">10</button>
            </div>
            <button className="group h-10 w-10 flex-shrink-0 rounded-full border border-dark transition-all hover:scale-110 hover:bg-primary md:h-12 md:w-12">
              <ChevronRight size={20} className="mx-auto group-hover:text-dark md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
