import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Heart, Award, Leaf, Users } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years in Business', note: '*Please confirm before launch' },
  { value: '500+', label: 'Happy Clients', note: '*Please confirm before launch' },
  { value: '50+', label: 'Institutions Served', note: '*Please confirm before launch' },
  { value: '100%', label: 'Quality Guaranteed', note: '' },
];

const values = [
  {
    Icon: Heart,
    title: 'Passion for Quality',
    desc: 'Every piece we create reflects our deep commitment to excellence. We source only the finest materials and subject every product to rigorous quality checks before it reaches your hands.',
  },
  {
    Icon: Award,
    title: 'Uncompromising Standards',
    desc: 'Our products meet the demanding standards of Ghana\'s top hotels and healthcare institutions. If it\'s good enough for a five-star hotel, it\'s perfect for your home.',
  },
  {
    Icon: Leaf,
    title: 'Sustainable Sourcing',
    desc: 'We are committed to responsible sourcing practices, working with suppliers who share our values of quality, fairness, and environmental responsibility.',
  },
  {
    Icon: Users,
    title: 'Community First',
    desc: 'Based in Fetteh Kakaraba, Ghana, we are proud to be a Ghanaian business serving Ghanaian homes and businesses. Every purchase supports our local community.',
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        label="Our Story"
        title="Where Luxury"
        titleAccent="Meets Comfort"
        subtitle="A Ghanaian luxury home linen brand built on passion, quality, and an unwavering commitment to excellence."
        bgImage="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Brand Story */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Prestige Noble Lady Luxury premium bedding"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/20 pointer-events-none" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <p className="section-label">About Us</p>
              <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold mb-2 leading-tight">
                Born From A Passion
                <br />
                <span className="text-gold">For Luxury Living</span>
              </h2>
              <div className="gold-divider-left" />
              <div className="space-y-4 font-inter text-charcoal-mid/75 text-sm leading-relaxed">
                <p>
                  Prestige Noble Lady Luxury was founded with a singular vision: to make genuine luxury home linen accessible to every Ghanaian home — without compromising on quality or elegance.
                </p>
                <p>
                  We believe that the bedroom is the most personal space in any home. It is where you begin and end each day. It deserves to feel extraordinary. That conviction drives everything we do — from the threads we select to the packaging we use.
                </p>
                <p>
                  Operating from Fetteh Kakaraba, Ghana, we supply both individual homeowners seeking to elevate their personal spaces, and institutional buyers — including hotels, hospitals, guest houses, and corporate housing providers — who demand consistent, professional-grade quality at scale.
                </p>
                <p>
                  Our products have become a trusted choice for some of Ghana&apos;s finest hospitality businesses. We are proud of that trust, and we work every day to honour it.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-dark text-xs px-8 py-3.5">
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-gold/20">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100} direction="up">
                <div className="text-center lg:px-8">
                  <p className="font-playfair text-gold text-4xl font-bold">{stat.value}</p>
                  <p className="font-inter text-white text-sm font-medium mt-1">{stat.label}</p>
                  {stat.note && (
                    <p className="font-inter text-white/30 text-[10px] mt-1">{stat.note}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Our Values</p>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-charcoal mb-4">
              What We Stand For
            </h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100} direction="up">
                <div className="group bg-white border border-ivory-dark p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-400">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <value.Icon size={20} className="text-gold group-hover:text-charcoal transition-colors duration-300" />
                  </div>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <h3 className="font-playfair text-charcoal text-xl font-bold mb-3">{value.title}</h3>
                  <p className="font-inter text-charcoal-mid/70 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <p className="font-inter text-gold text-[10px] font-semibold tracking-[0.3em] uppercase mb-6">
              Founder&apos;s Note
            </p>
            <blockquote className="font-playfair text-charcoal text-xl md:text-2xl leading-relaxed mb-8">
              &ldquo;I started Prestige Noble Lady Luxury because I believed Ghanaians deserve the same quality of home linen found in the world&apos;s finest hotels. Every product we make is a promise that luxury is not a privilege &mdash; it is a standard.&rdquo;
            </blockquote>
            <div className="w-10 h-px bg-gold mx-auto mb-4" />
            <p className="font-playfair text-charcoal text-lg font-bold">The Prestige Noble Lady Team</p>
            <p className="font-inter text-charcoal-mid/50 text-xs tracking-widest uppercase mt-1">
              Fetteh Kakaraba, Ghana
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-white text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience True Luxury?
            </h2>
            <p className="font-inter text-white/60 text-sm mb-8 max-w-lg mx-auto">
              Browse our collections or contact us today to discuss your personal or institutional needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="btn-gold text-xs px-8 py-3.5">
                Shop Collection
              </Link>
              <Link href="/contact" className="btn-outline-white text-xs px-8 py-3.5">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
