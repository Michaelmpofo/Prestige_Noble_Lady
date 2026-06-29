'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { products } from '@/lib/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-charcoal text-3xl font-bold mb-4">Product Not Found</h1>
            <Link href="/products" className="btn-gold text-sm px-8 py-3">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Get images array from product, fallback to single image
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      <Navbar />

      {/* Product Detail Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2">
            <Link href="/products" className="text-gold font-inter text-sm hover:underline">
              Products
            </Link>
            <span className="text-charcoal-mid/50">/</span>
            <span className="text-charcoal-mid text-sm">{product.category}</span>
            <span className="text-charcoal-mid/50">/</span>
            <span className="text-charcoal font-semibold text-sm">{product.name}</span>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Image Slider */}
            <div className="flex flex-col gap-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-ivory border border-ivory-dark overflow-hidden group">
                <img
                  src={images[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-charcoal p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-charcoal p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-charcoal/80 text-white text-xs font-inter px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {images.slice(0, 8).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`aspect-square border-2 overflow-hidden transition-all duration-300 ${
                        currentImageIndex === i
                          ? 'border-gold'
                          : 'border-ivory-dark hover:border-charcoal/30'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-between">
              {/* Header */}
              <div>
                {/* Category & Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold font-inter text-[10px] font-semibold tracking-widest uppercase">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="bg-gold text-charcoal text-[10px] font-inter font-bold tracking-widest uppercase px-2.5 py-1">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="font-playfair text-charcoal text-4xl font-bold mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating ? 'text-gold fill-gold' : 'text-gray-300'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-inter text-charcoal-mid/70 text-sm">
                    ({product.reviewCount} reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="font-inter text-charcoal-mid/80 text-base leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Divider */}
                <div className="w-10 h-px bg-gold mb-8" />
              </div>

              {/* Pricing Section */}
              <div className="space-y-6">
                {/* Price */}
                <div className="bg-ivory p-6 border border-gold/20">
                  <p className="font-inter text-charcoal-mid/70 text-xs uppercase tracking-widest mb-2">
                    Price
                  </p>
                  {product.price ? (
                    <div className="space-y-2">
                      <p className="font-playfair text-charcoal text-3xl font-bold">
                        GH₵ {product.price.toLocaleString()}
                      </p>
                      {product.wholesalePrice && (
                        <p className="font-inter text-gold text-sm font-semibold">
                          Wholesale: GH₵ {product.wholesalePrice} <span className="text-charcoal-mid">(from 5 pieces)</span>
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="font-inter text-gold text-lg font-semibold">
                      {product.priceLabel || 'Contact for Price'}
                    </p>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/233549678391?text=I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-sm flex-1 text-center py-4 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Order on WhatsApp
                  </a>
                  <a
                    href="/contact#order"
                    className="btn-outline-gold text-sm flex-1 text-center py-4"
                  >
                    Order via Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-charcoal text-2xl font-bold mb-8">
            Other {product.category} Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group bg-white border border-ivory-dark p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden mb-3 bg-ivory">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-playfair text-charcoal font-bold text-sm mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="font-inter text-charcoal text-lg font-semibold text-gold">
                    GH₵ {relatedProduct.price?.toLocaleString()}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
