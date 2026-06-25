'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
          alt="Luxury bedroom with premium linen"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        {/* Gold accent overlay at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Pre-headline */}
        <div
          className={`transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-flex items-center gap-3 font-inter text-[10px] font-semibold tracking-[0.35em] uppercase text-gold mb-8">
            <span className="w-8 h-px bg-gold" />
            Where Luxury Meets Comfort
            <span className="w-8 h-px bg-gold" />
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`font-playfair text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Transform Every Night
          <br />
          <span className="text-gold">Into A Five-Star</span>
          <br />
          Experience
        </h1>

        {/* Subheadline */}
        <p
          className={`font-inter text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Premium bedsheets, duvet sets, curtains, pillowcases and mattress covers
          crafted for luxury living — trusted by homeowners and top hotels across Ghana.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link href="/products" className="btn-gold text-sm px-10 py-4">
            Shop Collection
          </Link>
          <Link href="/contact#quote" className="btn-outline-white text-sm px-10 py-4">
            Request Hotel Quote
          </Link>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto transition-all duration-700 delay-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '50+', label: 'Hotels Served' },
            { value: '5★', label: 'Avg. Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-playfair text-gold text-2xl font-bold">{stat.value}</div>
              <div className="font-inter text-white/50 text-[11px] tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="font-inter text-white/40 text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown size={16} className="text-gold animate-bounce" />
      </div>
    </section>
  );
}
