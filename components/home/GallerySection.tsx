import Link from 'next/link';
import { Instagram } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'Luxury master bedroom',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'White premium bedsheet',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/6186745/pexels-photo-6186745.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'Silk pillowcases',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'Elegant bedroom curtains',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'Morning luxury bedroom',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'Premium duvet set',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'Hotel room linen',
    span: '',
  },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-label">Gallery</p>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Luxury In Every Detail
          </h2>
          <div className="gold-divider" />
          <p className="font-inter text-charcoal-mid/70 text-base max-w-lg mx-auto mt-4">
            A glimpse into the world of Prestige Noble Lady Luxury — where every room tells a story of elegance.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <ScrollReveal direction="scale">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden bg-charcoal ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 border border-gold flex items-center justify-center">
                    <Instagram size={18} className="text-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Instagram CTA */}
        <ScrollReveal className="text-center mt-10" delay={100}>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 font-inter text-charcoal-mid/60 text-xs font-medium tracking-wider uppercase hover:text-gold transition-colors duration-200"
          >
            <Instagram size={14} />
            Follow Us on Instagram
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
