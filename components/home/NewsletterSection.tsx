'use client';

import { useState } from 'react';
import { submitNewsletterSignup } from '@/lib/api/client';
import { CheckCircle2, Send } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    try {
      const result = await submitNewsletterSignup({ email });
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 40px)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="section-label text-gold">Stay Connected</p>
          <h2 className="font-playfair text-white text-4xl md:text-5xl font-bold mb-4">
            Join Our Luxury
            <br />
            <span className="text-gold">Living Community</span>
          </h2>
          <div className="gold-divider" />
          <p className="font-inter text-white/60 text-base leading-relaxed max-w-lg mx-auto mt-4 mb-10">
            Be the first to discover new collections, exclusive offers, and luxury living inspiration delivered straight to your inbox.
          </p>

          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle2 size={40} className="text-gold" />
              <p className="font-playfair text-white text-xl">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus('idle');
                  }}
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border border-white/20 text-white placeholder:text-white/35 font-inter text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200"
                  disabled={status === 'loading'}
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-gold text-xs px-8 py-3.5 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <span className="inline-block w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      Subscribe
                    </>
                  )}
                </button>
              </div>
              {status === 'error' && (
                <p className="font-inter text-red-400 text-xs mt-3">{message}</p>
              )}
              <p className="font-inter text-white/30 text-xs mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
