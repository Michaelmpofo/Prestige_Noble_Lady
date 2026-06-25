import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const collections = [
  {
    name: 'Bedsheets',
    desc: 'Hotel-quality cotton bedsheets for the perfect night\'s rest',
    image: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=600',
    href: '/products?category=Bedsheets',
  },
  {
    name: 'Duvet Sets',
    desc: 'Premium duvet covers crafted for warmth and elegance',
    image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600',
    href: '/products?category=Duvet+Sets',
  },
  {
    name: 'Curtains',
    desc: 'Flowing drapes that transform any room into a sanctuary',
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600',
    href: '/products?category=Curtains',
  },
  {
    name: 'Pillowcases',
    desc: 'Silk-touch pillowcases for effortless daily luxury',
    image: 'https://images.pexels.com/photos/6186745/pexels-photo-6186745.jpeg?auto=compress&cs=tinysrgb&w=600',
    href: '/products?category=Pillowcases',
  },
  {
    name: 'Mattress Covers',
    desc: 'Waterproof protection with the comfort you deserve',
    image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600',
    href: '/products?category=Mattress+Covers',
  },
];

export default function CollectionsSection() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-label">Our Collections</p>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Crafted For Every
            <br />
            <span className="text-gold">Room In Your Home</span>
          </h2>
          <div className="gold-divider" />
          <p className="font-inter text-charcoal-mid/70 text-base max-w-xl mx-auto mt-4">
            Explore our curated collections, each piece selected to deliver unmatched comfort and timeless elegance.
          </p>
        </ScrollReveal>

        {/* Collections Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {collections.map((col, i) => (
            <ScrollReveal key={col.name} delay={i * 80} direction="up">
              <Link href={col.href} className="group block overflow-hidden relative aspect-[3/4] bg-charcoal">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-playfair text-white text-lg font-bold mb-1">{col.name}</h3>
                  <p className="font-inter text-white/60 text-xs leading-relaxed mb-3 max-h-0 overflow-hidden group-hover:max-h-10 transition-all duration-500">
                    {col.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-gold">
                    <span className="font-inter text-[10px] font-semibold tracking-widest uppercase">Shop Now</span>
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All */}
        <ScrollReveal className="text-center mt-12" delay={200}>
          <Link href="/products" className="btn-dark text-xs px-10 py-3.5">
            View All Collections
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
