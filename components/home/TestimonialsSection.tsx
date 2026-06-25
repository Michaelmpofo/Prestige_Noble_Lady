import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import ScrollReveal from '@/components/ScrollReveal';
import { testimonials } from '@/lib/data/testimonials';

const featured = testimonials.slice(0, 3);

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-label">Client Testimonials</p>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-charcoal mb-4">
            What Our Clients Say
          </h2>
          <div className="gold-divider" />
          <p className="font-inter text-charcoal-mid/70 text-base max-w-lg mx-auto mt-4">
            From luxury homeowners to hotel general managers — our clients agree on one thing: Prestige Noble Lady sets the standard.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((testimonial, i) => (
            <ScrollReveal key={testimonial.id} delay={i * 120} direction="up">
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center mt-12" delay={200}>
          <Link href="/reviews" className="btn-outline-gold text-xs px-8 py-3.5">
            Read All Reviews
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
