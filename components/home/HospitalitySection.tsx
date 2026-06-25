import Link from 'next/link';
import { Building2, HeartPulse, Home, Users, Briefcase, Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const clients = [
  { Icon: Building2, label: 'Hotels' },
  { Icon: HeartPulse, label: 'Hospitals' },
  { Icon: Home, label: 'Guest Houses' },
  { Icon: Users, label: 'Airbnb Hosts' },
  { Icon: Briefcase, label: 'Corporate Housing' },
];

const benefits = [
  'Consistent quality across all units',
  'Competitive bulk order pricing',
  'Custom sizing and branding options',
  'Dedicated account management',
  'Priority fulfillment and fast delivery',
  'Hospital-grade waterproof options',
];

const steps = [
  { num: '01', title: 'Submit Request', desc: 'Send us your requirements via WhatsApp or our contact form.' },
  { num: '02', title: 'Get a Quote', desc: 'Receive a tailored bulk quote within 24 hours.' },
  { num: '03', title: 'Review & Confirm', desc: 'Approve samples or specifications before production.' },
  { num: '04', title: 'Delivery', desc: 'Your order delivered on time, professionally packaged.' },
];

export default function HospitalitySection() {
  return (
    <section id="hospitality" className="py-24 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury hotel room with premium linen"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              {/* Gold border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-gold px-6 py-5 shadow-2xl">
                <p className="font-playfair text-charcoal text-3xl font-bold">50+</p>
                <p className="font-inter text-charcoal text-xs font-semibold tracking-widest uppercase mt-0.5">
                  Institutions Served
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal direction="right">
            <div>
              <p className="section-label text-gold">Hospitality Solutions</p>
              <h2 className="font-playfair text-white text-4xl md:text-5xl font-bold leading-tight mb-2">
                Trusted By Ghana&apos;s
                <br />
                <span className="text-gold">Leading Hospitality</span>
                <br />
                Businesses
              </h2>
              <div className="gold-divider-left" />

              <p className="font-inter text-white/65 text-sm leading-relaxed mb-8">
                We supply premium linen to hotels, hospitals, guest houses, Airbnb operators, and corporate housing providers across Ghana. Bulk orders, custom sizing, and institutional pricing available.
              </p>

              {/* Client Types */}
              <div className="flex flex-wrap gap-3 mb-8">
                {clients.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 border border-gold/30 px-3 py-1.5 text-white/70"
                  >
                    <Icon size={13} className="text-gold" />
                    <span className="font-inter text-xs">{label}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5">
                    <Check size={13} className="text-gold flex-shrink-0" />
                    <span className="font-inter text-white/70 text-xs">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact#quote" className="btn-gold text-xs px-8 py-3.5">
                Request Bulk Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Process Steps */}
        <div className="mt-24">
          <ScrollReveal className="text-center mb-12">
            <p className="font-inter text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">
              How It Works
            </p>
            <h3 className="font-playfair text-white text-3xl font-bold">
              Simple Bulk Order Process
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100} direction="up">
                <div className="relative border border-white/10 p-6 hover:border-gold/30 transition-colors duration-300">
                  <span className="font-playfair text-gold/20 text-5xl font-bold absolute top-4 right-4">
                    {step.num}
                  </span>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <h4 className="font-playfair text-white text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="font-inter text-white/50 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
