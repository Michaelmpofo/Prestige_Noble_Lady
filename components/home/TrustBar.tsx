import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const pillars = [
  { label: 'Premium Materials', desc: 'Egyptian cotton & premium microfiber' },
  { label: 'Nationwide Delivery', desc: 'Fast shipping across Ghana' },
  { label: 'Hospitality Supply', desc: 'Hotels, hospitals & guest houses' },
  { label: 'Custom Orders', desc: 'Bespoke sizing & bulk pricing' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal py-10 border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gold/20">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.label} delay={i * 100} direction="up">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 lg:px-8 text-center sm:text-left">
                <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-inter text-white text-sm font-semibold">{pillar.label}</p>
                  <p className="font-inter text-white/45 text-xs mt-0.5">{pillar.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
