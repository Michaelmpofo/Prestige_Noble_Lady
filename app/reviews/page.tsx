import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import TestimonialCard from '@/components/TestimonialCard';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

const overallStats = [
  { label: 'Overall Rating', value: '5.0' },
  { label: 'Total Reviews', value: '7' },
  { label: 'Recommend Us', value: '100%' },
];

export default function ReviewsPage() {
  const byType = {
    all: testimonials,
    individual: testimonials.filter((t) => t.type === 'individual'),
    hotel: testimonials.filter((t) => t.type === 'hotel'),
    corporate: testimonials.filter((t) => t.type === 'corporate'),
  };

  return (
    <main>
      <Navbar />
      <PageHeader
        label="Client Testimonials"
        title="What Our Clients"
        titleAccent="Are Saying"
        subtitle="Genuine reviews from homeowners, hotel managers, and corporate clients across Ghana."
        bgImage="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Stats Bar */}
      <section className="py-12 bg-charcoal border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Rating Overview */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-playfair text-gold text-6xl font-bold">5.0</p>
                <div className="flex items-center justify-center gap-0.5 my-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-inter text-white/50 text-xs">out of 5.0</p>
              </div>
              <div className="w-px h-16 bg-gold/20 hidden md:block" />
              <div className="space-y-2 min-w-[200px]">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="font-inter text-white/50 text-xs w-2">{star}</span>
                    <Star size={10} className="text-gold fill-gold" />
                    <div className="flex-1 h-1.5 bg-white/10">
                      <div
                        className="h-full bg-gold"
                        style={{ width: star === 5 ? '100%' : star === 4 ? '14%' : '0%' }}
                      />
                    </div>
                    <span className="font-inter text-white/30 text-xs w-4">
                      {star === 5 ? 6 : star === 4 ? 1 : 0}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center md:text-right">
              <p className="font-inter text-white/60 text-sm mb-4">
                Ready to experience the luxury yourself?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/products" className="btn-gold text-xs px-6 py-3">
                  Shop Now
                </Link>
                <a
                  href="https://wa.me/233549678391?text=Hello%2C%20I%27d%20like%20to%20order%20from%20Prestige%20Noble%20Lady%20Luxury."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white text-xs px-6 py-3"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Sections */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Home Customers */}
          <div className="mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px bg-gold" />
                <p className="font-inter text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">
                  Home Customers
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byType.individual.map((t, i) => (
                <ScrollReveal key={t.id} delay={i * 100} direction="up">
                  <TestimonialCard testimonial={t} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Hospitality Customers */}
          <div className="mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px bg-gold" />
                <p className="font-inter text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">
                  Hotels, Guest Houses & Airbnb
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byType.hotel.map((t, i) => (
                <ScrollReveal key={t.id} delay={i * 100} direction="up">
                  <TestimonialCard testimonial={t} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Corporate Customers */}
          {byType.corporate.length > 0 && (
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-px bg-gold" />
                  <p className="font-inter text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">
                    Corporate & Institutional
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {byType.corporate.map((t, i) => (
                  <ScrollReveal key={t.id} delay={i * 100} direction="up">
                    <TestimonialCard testimonial={t} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* Write a Review CTA */}
          <ScrollReveal className="mt-20">
            <div className="bg-charcoal p-10 md:p-14 text-center">
              <p className="font-inter text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">
                Share Your Experience
              </p>
              <h3 className="font-playfair text-white text-3xl font-bold mb-3">
                Experienced Our Luxury?
              </h3>
              <p className="font-inter text-white/60 text-sm mb-8 max-w-md mx-auto">
                We&apos;d love to hear from you. Contact us via WhatsApp or email to share your experience with Prestige Noble Lady Luxury.
              </p>
              <a
                href="https://wa.me/233549678391?text=Hello%2C%20I%20would%20like%20to%20share%20my%20experience%20with%20Prestige%20Noble%20Lady%20Luxury."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-8 py-3.5"
              >
                Share on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
