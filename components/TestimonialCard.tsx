import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/data/testimonials';

type Props = {
  testimonial: Testimonial;
  variant?: 'default' | 'dark';
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? 'text-gold fill-gold' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

const typeBadge: Record<string, string> = {
  hotel: 'Hospitality',
  corporate: 'Corporate',
  individual: 'Home',
};

export default function TestimonialCard({ testimonial, variant = 'default' }: Props) {
  const isDark = variant === 'dark';

  return (
    <article
      className={`relative flex flex-col p-8 h-full transition-all duration-400 ${
        isDark
          ? 'bg-charcoal border border-gold/20 hover:border-gold/40'
          : 'bg-white border border-ivory-dark hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {/* Type Badge */}
      <div className="absolute top-6 right-6">
        <span className="text-gold font-inter text-[9px] font-bold tracking-widest uppercase border border-gold/40 px-2 py-0.5">
          {typeBadge[testimonial.type] || testimonial.type}
        </span>
      </div>

      {/* Quote Icon */}
      <div className="mb-5">
        <Quote size={28} className="text-gold/40 fill-gold/10" />
      </div>

      {/* Stars */}
      <StarRating rating={testimonial.rating} />

      {/* Quote Text */}
      <blockquote
        className={`font-inter text-sm leading-relaxed mt-4 mb-6 flex-1 ${
          isDark ? 'text-white/80' : 'text-charcoal-mid/80'
        }`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Divider */}
      <div className="w-10 h-px bg-gold mb-5" />

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar Placeholder */}
        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
          <span className="font-playfair text-gold font-bold text-base">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className={`font-playfair font-semibold text-base ${isDark ? 'text-white' : 'text-charcoal'}`}>
            {testimonial.name}
          </p>
          <p className={`font-inter text-xs mt-0.5 ${isDark ? 'text-white/50' : 'text-charcoal-mid/60'}`}>
            {testimonial.role} &bull; {testimonial.location}
          </p>
        </div>
      </div>
    </article>
  );
}
