import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Building2, HeartPulse, Home, Users, Briefcase, Check, Star, ArrowRight } from 'lucide-react';

const clientTypes = [
  {
    Icon: Building2,
    title: 'Hotels',
    desc: 'From boutique properties to large hotel chains — we supply consistent, premium-grade linen for every room at competitive bulk pricing.',
  },
  {
    Icon: HeartPulse,
    title: 'Hospitals & Clinics',
    desc: 'Waterproof, hospital-grade mattress covers and linen meeting strict hygiene standards for medical and care facilities.',
  },
  {
    Icon: Home,
    title: 'Guest Houses',
    desc: 'Affordable luxury for guest house owners who want to offer their guests a truly memorable stay.',
  },
  {
    Icon: Users,
    title: 'Airbnb Hosts',
    desc: 'Top-rated Airbnb properties choose our linen to consistently impress guests and earn 5-star reviews.',
  },
  {
    Icon: Briefcase,
    title: 'Corporate Housing',
    desc: 'Professional-grade linen for serviced apartments, corporate accommodation, and executive housing.',
  },
];

const benefits = [
  'Dedicated bulk order pricing',
  'Minimum order flexibility',
  'Consistent quality across all units',
  'Custom sizing available',
  'Waterproof options for medical use',
  'Priority delivery scheduling',
  'Dedicated account manager',
  'Regular restocking support',
];

const steps = [
  {
    num: '01',
    title: 'Submit Your Requirements',
    desc: 'Tell us about your business — the type of institution, number of rooms or units, product types needed, and any special requirements.',
  },
  {
    num: '02',
    title: 'Receive a Custom Quote',
    desc: 'Our team will review your requirements and send a detailed bulk pricing quote within 24 hours.',
  },
  {
    num: '03',
    title: 'Review Samples',
    desc: 'We can arrange sample products so you can verify quality before committing to a full order.',
  },
  {
    num: '04',
    title: 'Confirm & Deliver',
    desc: 'Once approved, your order is processed with priority fulfillment and delivered professionally across Ghana.',
  },
];

export default function HospitalityPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        label="Hospitality Solutions"
        title="Premium Linen For"
        titleAccent="Every Institution"
        subtitle="Trusted by hotels, hospitals, guest houses, and Airbnb operators across Ghana. Bulk pricing, custom orders, and dedicated support."
        bgImage="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="section-label">Why Institutions Choose Us</p>
              <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold leading-tight mb-2">
                The Hospitality
                <br />
                <span className="text-gold">Linen Partner</span>
                <br />
                You Can Trust
              </h2>
              <div className="gold-divider-left" />
              <p className="font-inter text-charcoal-mid/70 text-sm leading-relaxed mb-6">
                We understand the unique demands of the hospitality and healthcare industries. Consistency, durability, hygiene, and professional presentation are non-negotiable — and we deliver on all fronts.
              </p>
              <p className="font-inter text-charcoal-mid/70 text-sm leading-relaxed mb-8">
                With dedicated bulk pricing, flexible minimum orders, and a team committed to your satisfaction, Prestige Noble Lady Luxury is the partner you need to elevate your guest experience.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <Check size={13} className="text-gold flex-shrink-0" />
                    <span className="font-inter text-charcoal-mid/75 text-xs">{b}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact#quote" className="btn-gold text-xs px-8 py-3.5">
                Request a Bulk Quote
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury hotel room with premium linen"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />
                {/* Floating testimonial */}
                <div className="absolute -bottom-6 -left-6 bg-gold p-5 max-w-[220px] shadow-2xl">
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={11} className="text-charcoal fill-charcoal" />
                    ))}
                  </div>
                  <p className="font-playfair text-charcoal text-sm font-semibold leading-snug mb-2">
                    &ldquo;Guest satisfaction scores have never been higher.&rdquo;
                  </p>
                  <p className="font-inter text-charcoal/70 text-[10px]">
                    Hotel GM, Kumasi
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Who We Serve</p>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Built For Every
              <br />
              <span className="text-gold">Hospitality Business</span>
            </h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.map((client, i) => (
              <ScrollReveal key={client.title} delay={i * 80} direction="up">
                <div className="group bg-white border border-ivory-dark p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-400">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <client.Icon size={20} className="text-gold group-hover:text-charcoal transition-colors duration-300" />
                  </div>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <h3 className="font-playfair text-charcoal text-xl font-bold mb-3">{client.title}</h3>
                  <p className="font-inter text-charcoal-mid/65 text-sm leading-relaxed">{client.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="font-inter text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">
              The Process
            </p>
            <h2 className="font-playfair text-white text-4xl md:text-5xl font-bold">
              How Bulk Ordering Works
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100} direction="up">
                <div className="relative border border-white/10 p-6 hover:border-gold/30 transition-colors duration-300 h-full">
                  <span className="font-playfair text-gold/15 text-6xl font-bold absolute top-4 right-4">
                    {step.num}
                  </span>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <h4 className="font-playfair text-white text-lg font-bold mb-3">{step.title}</h4>
                  <p className="font-inter text-white/50 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14" delay={200}>
            <p className="font-inter text-white/60 text-sm mb-6">
              Ready to get started? Contact us today for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact#quote" className="btn-gold text-xs px-8 py-3.5">
                Request Bulk Quote
              </Link>
              <a
                href="https://wa.me/233549678391?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20bulk%20order%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white text-xs px-8 py-3.5"
              >
                WhatsApp Us Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
