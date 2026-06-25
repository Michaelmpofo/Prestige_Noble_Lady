import { Medal, Gem, Truck, Settings2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const reasons = [
  {
    Icon: Gem,
    title: 'Premium Quality',
    desc: 'Every product is crafted from carefully selected materials — Egyptian cotton, premium microfiber, and silk-touch fabrics that stand the test of time.',
  },
  {
    Icon: Medal,
    title: 'Luxury Design',
    desc: 'Our collections are inspired by top hospitality brands. Each piece balances aesthetic refinement with everyday practicality.',
  },
  {
    Icon: Truck,
    title: 'Fast Delivery',
    desc: 'We understand that your time is valuable. Prompt nationwide delivery with professional packaging on every order.',
  },
  {
    Icon: Settings2,
    title: 'Custom Orders',
    desc: 'Need a specific size, colour, or quantity? We offer fully customised solutions for homeowners and hospitality businesses.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <ScrollReveal direction="left">
            <p className="section-label">Why Prestige Noble Lady</p>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              The Standard of
              <br />
              <span className="text-gold">True Luxury</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="gold-divider-left hidden lg:block" />
            <p className="font-inter text-charcoal-mid/70 text-base leading-relaxed mt-4">
              For years, we have set the standard for premium home linen in Ghana — delivering quality that rivals the world&apos;s finest hospitality brands at accessible prices.
            </p>
          </ScrollReveal>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 100} direction="up">
              <div className="group bg-white p-8 border border-ivory-dark hover:border-gold/30 transition-all duration-400 hover:shadow-xl hover:-translate-y-1">
                {/* Icon */}
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <reason.Icon
                    size={20}
                    className="text-gold group-hover:text-charcoal transition-colors duration-300"
                  />
                </div>
                <div className="w-8 h-px bg-gold mb-4" />
                <h3 className="font-playfair text-charcoal text-xl font-bold mb-3">{reason.title}</h3>
                <p className="font-inter text-charcoal-mid/65 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
