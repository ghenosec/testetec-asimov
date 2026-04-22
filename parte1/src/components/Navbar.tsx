'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';
import { siteLinks, useSiteNavigation } from '@/lib/site-navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, handleNavigation, navigateTo } = useSiteNavigation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container py-6 flex items-center justify-between">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={(event) => handleNavigation(event, '/')}
        >
          <img src={Logo.src} alt="Positivus Logo" className="h-6 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {siteLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.href)}
              className="text-lg hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button 
            className="btn btn-outline"
            onClick={() => {
              if (pathname !== '/') {
                navigateTo('/#contact');
              } else {
                navigateTo('#contact');
              }
            }}
          >
            Request a quote
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-grey py-6 px-4 flex flex-col gap-4">
          {siteLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium"
              onClick={(event) => handleNavigation(event, link.href, () => setIsOpen(false))}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="btn btn-outline w-full"
            onClick={() => {
              if (pathname !== '/') {
                navigateTo('/#contact');
              } else {
                navigateTo('#contact');
              }
              setIsOpen(false);
            }}
          >
            Request a quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
