'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, User } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/products' },
  { label: 'Hospitality', href: '/hospitality' },
  { label: 'About Us', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navBg = isHome
    ? scrolled
      ? 'bg-charcoal/98 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
    : 'bg-charcoal shadow-md';

  const navIsBlack = scrolled || !isHome;

  const brandLink = (
    <Link href="/" className="flex items-center gap-3 group flex-shrink-0 -ml-1 sm:-ml-0.5">
      <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold/30 bg-black">
        <Image
          src="/logo.png"
          alt=""
          width={88}
          height={88}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] max-w-none h-auto"
          priority
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-playfair text-gold text-base sm:text-lg font-bold tracking-wide">
          Prestige Noble Lady
        </span>
        <span className="font-inter text-white/80 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">
          Luxury Linens
        </span>
      </div>
    </Link>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="px-3 sm:px-4 lg:px-5 py-0">
          <div className="flex items-center h-20 w-full justify-between lg:justify-start gap-0">
            {/* Logo and brand - far left, no flex grow */}
            <div className="flex-shrink-0">
              {brandLink}
            </div>

            {/* Desktop nav — centered with flex-grow */}
            <div 
              className="hidden lg:flex items-center gap-7 xl:gap-8 flex-1 justify-center px-8"
              onMouseEnter={() => setNavHovered(true)}
              onMouseLeave={() => setNavHovered(false)}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const shouldBeVisible = isHome || navHovered || isActive;
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-inter text-xs font-medium tracking-widest uppercase transition-all duration-200 ${
                      isActive
                        ? 'text-gold'
                        : navIsBlack
                        ? 'text-white hover:text-gold'
                        : 'text-white/85 hover:text-gold'
                    } ${
                      shouldBeVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{ letterSpacing: '0.12em' }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Separator and Desktop actions — far right */}
            <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
              <div className="w-px h-5 bg-white/15" aria-hidden="true" />
              <button
                aria-label="Search"
                className="text-white/70 hover:text-gold transition-colors duration-200"
              >
                <Search size={18} />
              </button>
              <Link
                href="/contact"
                aria-label="Account"
                className="text-white/70 hover:text-gold transition-colors duration-200"
              >
                <User size={18} />
              </Link>
              <Link
                href="/contact#quote"
                className="btn-gold text-xs py-2.5 px-6"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-1.5 hover:text-gold transition-colors ml-auto"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Gold accent line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />
        )}
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-charcoal flex flex-col transition-transform duration-400 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
              <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold/30 bg-black">
                <Image
                  src="/logo.png"
                  alt=""
                  width={72}
                  height={72}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] max-w-none h-auto"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-playfair text-gold text-sm font-bold">Prestige Noble Lady</span>
                <span className="font-inter text-white/50 text-[8px] tracking-widest uppercase">Luxury Linens</span>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white/60 hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm font-medium tracking-widest uppercase py-3.5 border-b border-white/5 transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-white/80 hover:text-gold'
                }`}
                style={{ letterSpacing: '0.12em' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="px-6 pb-8 flex flex-col gap-3">
            <Link href="/contact#quote" className="btn-gold w-full text-center text-xs py-3">
              Request Bulk Quote
            </Link>
            <a
              href="https://wa.me/233549678391?text=Hello%2C%20I%20am%20interested%20in%20your%20luxury%20linen%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white w-full text-center text-xs py-3"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
