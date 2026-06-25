import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import { products } from '@/lib/data/products';

const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

export default function BestSellers() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-label">Top Picks</p>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our Best Sellers
          </h2>
          <div className="gold-divider" />
          <p className="font-inter text-charcoal-mid/70 text-base max-w-xl mx-auto mt-4">
            The most loved pieces in our collection — chosen by homeowners and hospitality professionals alike.
          </p>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 100} direction="up">
              <ProductCard product={product} priority={i === 0} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center mt-12" delay={200}>
          <Link href="/products" className="btn-outline-gold text-xs px-10 py-3.5">
            Browse All Products
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
