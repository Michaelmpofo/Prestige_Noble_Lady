'use client';

import Link from 'next/link';
import { Star, MessageCircle } from 'lucide-react';
import type { Product } from '@/lib/data/products';

type Props = {
  product: Product;
  priority?: boolean;
};

const WHATSAPP_NUMBER = '233549678391';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? 'text-gold fill-gold' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product, priority }: Props) {
  const whatsappMessage = `Hello! I'm interested in the ${product.name}. Could you please provide more details?`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <article className="group bg-white border border-ivory-dark flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-ivory">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading={priority ? 'eager' : 'lazy'}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gold text-charcoal text-[10px] font-inter font-bold tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </div>
        )}

        {/* Quick WhatsApp Overlay */}
        <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-charcoal text-xs font-inter font-semibold tracking-wider uppercase px-5 py-2.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle size={14} />
            Enquire Now
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category */}
        <span className="text-gold font-inter text-[10px] font-semibold tracking-widest uppercase mb-2">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="font-playfair text-charcoal text-lg leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="font-inter text-charcoal-mid/70 text-xs leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <StarRating rating={product.rating} />
          <span className="font-inter text-[11px] text-charcoal-mid/60">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between border-t border-ivory-dark pt-4">
          <div>
            {product.price ? (
              <span className="font-playfair text-charcoal text-xl font-medium">
                GH₵ {product.price.toLocaleString()}
              </span>
            ) : (
              <span className="font-inter text-gold text-xs font-semibold tracking-wider uppercase">
                {product.priceLabel || 'Contact for Price'}
              </span>
            )}
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-[10px] px-4 py-2.5"
          >
            Order Now
          </a>
        </div>
      </div>
    </article>
  );
}
