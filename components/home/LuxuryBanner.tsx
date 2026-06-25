import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function LuxuryBanner() {
  return (
    <section className="relative py-0 overflow-hidden">
      <div className="relative h-[55vh] min-h-[420px] flex items-center">
        {/* Background */}
        <img
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920&h=900&dpr=1"
          alt="Luxury bedroom morning"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/65" />

        {/* Gold left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <ScrollReveal direction="left">
              <p className="font-inter text-gold text-[10px] font-semibold tracking-[0.35em] uppercase mb-4">
                The Prestige Promise
              </p>
              <h2 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Wake Up To Luxury
                <br />
                <span className="text-gold">Every Morning</span>
              </h2>
              <p className="font-inter text-white/70 text-base leading-relaxed mb-8 max-w-lg">
                Every piece in our collection is thoughtfully designed to deliver the comfort of a five-star hotel — in your own home or your guests' rooms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-gold text-xs px-8 py-3.5">
                  Shop Now
                </Link>
                <Link href="/about" className="btn-outline-white text-xs px-8 py-3.5">
                  Our Story
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
