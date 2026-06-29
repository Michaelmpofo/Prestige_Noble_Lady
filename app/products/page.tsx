'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import { products, categories } from '@/lib/data/products';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category') || 'All';
    setActiveCategory(cat);
  }, [searchParams]);

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Tabs */}
      <div className="bg-ivory border-b border-ivory-dark sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 font-inter text-xs font-semibold tracking-widest uppercase px-5 py-4 border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'border-gold text-gold'
                    : 'border-transparent text-charcoal-mid/60 hover:text-charcoal hover:border-charcoal/30'
                }`}
                style={{ letterSpacing: '0.12em' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Result Count */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="font-inter text-charcoal-mid/50 text-sm">
                Showing{' '}
                <span className="text-charcoal font-semibold">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'product' : 'products'}
                {activeCategory !== 'All' && (
                  <span>
                    {' '}in{' '}
                    <span className="text-gold font-semibold">{activeCategory}</span>
                  </span>
                )}
              </p>
            </div>
            <a
              href="https://wa.me/233549678391?text=Hello%2C%20I%20have%20a%20bulk%20order%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex btn-outline-gold text-[10px] px-5 py-2"
            >
              Bulk Order Enquiry
            </a>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-playfair text-charcoal text-2xl mb-2">No products found</p>
              <p className="font-inter text-charcoal-mid/60 text-sm">
                Try selecting a different category
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <ScrollReveal key={product.id} delay={Math.min(i * 60, 400)} direction="up">
                  <ProductCard product={product} priority={i < 4} />
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Bulk CTA Banner */}
          <ScrollReveal className="mt-20" delay={100}>
            <div className="relative bg-charcoal p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
              <div>
                <p className="font-inter text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">
                  For Hotels, Hospitals & Guest Houses
                </p>
                <h3 className="font-playfair text-white text-3xl font-bold mb-2">
                  Need a Bulk Order?
                </h3>
                <p className="font-inter text-white/60 text-sm max-w-lg">
                  We supply institutions across Ghana with premium linen. Contact us for bulk pricing, custom orders, and dedicated account support.
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact#quote"
                  className="btn-gold text-xs px-8 py-3.5"
                >
                  Request Quote
                </a>
                <a
                  href="https://wa.me/233549678391?text=Hello%2C%20I%20am%20interested%20in%20a%20bulk%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white text-xs px-8 py-3.5"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        label="Our Collections"
        title="Premium Home"
        titleAccent="Linen Collections"
        subtitle="Browse our full range of luxury bedsheets, duvet sets, curtains, water mattress covers, sofa covers and funnel blankets."
        bgImage="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Suspense fallback={
        <div className="py-20 text-center font-inter text-charcoal-mid/60">Loading products...</div>
      }>
        <ProductsContent />
      </Suspense>
      <Footer />
    </main>
  );
}
