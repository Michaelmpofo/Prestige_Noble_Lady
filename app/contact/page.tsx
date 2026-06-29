'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';
import { submitContactForm } from '@/lib/api/client';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  orderType: 'individual' | 'bulk';
};

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  orderType: 'individual',
};

type FieldErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email';
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message is too short';
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setStatus('loading');
    try {
      const result = await submitContactForm(form);
      if (result.success) {
        setStatus('success');
        setServerMessage(result.message);
        setForm(initialForm);
      } else {
        setStatus('error');
        setServerMessage('Something went wrong. Please try again or contact us via WhatsApp.');
      }
    } catch {
      setStatus('error');
      setServerMessage('Something went wrong. Please try again or contact us via WhatsApp.');
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white border font-inter text-charcoal text-sm px-4 py-3 focus:outline-none transition-colors duration-200 placeholder:text-charcoal-mid/40 ${
      errors[field]
        ? 'border-red-400 focus:border-red-500'
        : 'border-ivory-dark focus:border-gold'
    }`;

  return (
    <main>
      <Navbar />
      <PageHeader
        label="Get In Touch"
        title="Contact"
        titleAccent="Us"
        subtitle="We'd love to hear from you. Reach out for product enquiries, bulk orders, or any questions."
        bgImage="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <p className="section-label">Our Details</p>
                <h2 className="font-playfair text-charcoal text-3xl font-bold mb-2">
                  Let&apos;s Talk
                  <br />
                  <span className="text-gold">Luxury Linen</span>
                </h2>
                <div className="gold-divider-left" />
                <p className="font-inter text-charcoal-mid/70 text-sm leading-relaxed mb-8">
                  Whether you&apos;re furnishing your dream home or sourcing linen for your hospitality business, our team is ready to assist you.
                </p>

                <ul className="space-y-6">
                  <li>
                    <a href="tel:+233549678391" className="group flex items-start gap-4">
                      <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                        <Phone size={16} className="text-gold group-hover:text-charcoal transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/50 mb-0.5">Phone</p>
                        <p className="font-inter text-charcoal text-sm font-medium">0549 678 391</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Prestigenobleladyluxury@gmail.com" className="group flex items-start gap-4">
                      <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                        <Mail size={16} className="text-gold group-hover:text-charcoal transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/50 mb-0.5">Email</p>
                        <p className="font-inter text-charcoal text-sm font-medium break-all">Prestigenobleladyluxury@gmail.com</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold text-base font-semibold">@</span>
                    </div>
                    <div>
                      <p className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/50 mb-0.5">TikTok</p>
                      <p className="font-inter text-charcoal text-sm font-medium">@prestigenoblelady.luxury</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/50 mb-0.5">Location</p>
                      <p className="font-inter text-charcoal text-sm font-medium">Fetteh Kakaraba, Ghana</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/50 mb-0.5">Hours</p>
                      <p className="font-inter text-charcoal text-sm font-medium">Mon–Sat: 8:00 AM – 8:00 PM</p>
                      <p className="font-inter text-charcoal-mid/50 text-xs mt-0.5">Sunday: Online orders & support only</p>
                    </div>
                  </li>
                </ul>

                {/* WhatsApp CTA */}
                <div className="mt-10 p-6 bg-charcoal">
                  <p className="font-inter text-white text-sm font-semibold mb-1">Prefer WhatsApp?</p>
                  <p className="font-inter text-white/50 text-xs mb-4">Chat with us instantly for fast responses.</p>
                  <a
                    href="https://wa.me/233549678391?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20luxury%20linen%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-[10px] w-full text-center py-3 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Open WhatsApp Chat
                  </a>
                </div>

                <div id="order" className="mt-8 p-6 bg-ivory border border-gold/20">
                  <p className="font-inter text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-3">
                    Order & Payment Instructions
                  </p>
                  <p className="font-inter text-charcoal-mid/80 text-sm mb-4">
                    Place your order through the form or WhatsApp. Use one of the payment options below and send proof of payment so we can confirm your order quickly.
                  </p>
                  <div className="grid gap-4 text-sm text-charcoal">
                    <div>
                      <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-charcoal-mid/60 mb-1">Mobile Money</p>
                      <p className="font-inter text-charcoal font-medium">0549678391 / 0597440453</p>
                      <p className="font-inter text-charcoal-mid/70 text-xs mt-1">Noble Ladies / Sakinatu Abdullai</p>
                    </div>
                    <div>
                      <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-charcoal-mid/60 mb-1">Bank Payments</p>
                      <p className="font-inter text-charcoal font-medium">Ecobank – 1441002611962</p>
                      <p className="font-inter text-charcoal-mid/70 text-xs">Account Name: Sakinatu Abdullai</p>
                      <p className="font-inter text-charcoal font-medium mt-3">GCB – 1341420000361</p>
                      <p className="font-inter text-charcoal-mid/70 text-xs">Account Name: A. S PRESTIGE NOBLE LADY</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-6 border border-ivory-dark bg-ivory-dark h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={24} className="text-gold mx-auto mb-2" />
                    <p className="font-inter text-charcoal-mid/50 text-xs">
                      Fetteh Kakaraba, Ghana
                    </p>
                    <p className="font-inter text-charcoal-mid/30 text-[10px] mt-1">
                      {/* Google Maps embed will go here */}
                      Map embed coming soon
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div id="quote" className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="bg-white border border-ivory-dark p-8 md:p-10">
                  <h3 className="font-playfair text-charcoal text-2xl font-bold mb-1">
                    Send Us a Message
                  </h3>
                  <p className="font-inter text-charcoal-mid/60 text-sm mb-8">
                    Fill in the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <CheckCircle2 size={48} className="text-gold mb-4" />
                      <h4 className="font-playfair text-charcoal text-2xl font-bold mb-2">
                        Message Sent!
                      </h4>
                      <p className="font-inter text-charcoal-mid/70 text-sm max-w-sm">
                        {serverMessage}
                      </p>
                      <button
                        onClick={() => { setStatus('idle'); setServerMessage(''); }}
                        className="mt-8 btn-outline-gold text-xs px-8 py-3"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      {/* Order Type */}
                      <div>
                        <label className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/60 mb-2 block">
                          Enquiry Type
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {(['individual', 'bulk'] as const).map((type) => (
                            <label
                              key={type}
                              className={`flex items-center gap-2.5 border px-4 py-3 cursor-pointer transition-colors duration-200 ${
                                form.orderType === type
                                  ? 'border-gold bg-gold/5'
                                  : 'border-ivory-dark hover:border-charcoal-mid/30'
                              }`}
                            >
                              <input
                                type="radio"
                                name="orderType"
                                value={type}
                                checked={form.orderType === type}
                                onChange={handleChange}
                                className="accent-gold"
                              />
                              <span className="font-inter text-charcoal text-xs capitalize">
                                {type === 'individual' ? 'Individual / Home' : 'Bulk / Business'}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Name & Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/60 mb-1.5 block">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={inputClass('name')}
                          />
                          {errors.name && <p className="font-inter text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/60 mb-1.5 block">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={inputClass('email')}
                          />
                          {errors.email && <p className="font-inter text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Phone & Subject */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/60 mb-1.5 block">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="0XX XXX XXXX"
                            className={inputClass('phone')}
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/60 mb-1.5 block">
                            Subject *
                          </label>
                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Product enquiry / Bulk order..."
                            className={inputClass('subject')}
                          />
                          {errors.subject && <p className="font-inter text-red-500 text-xs mt-1">{errors.subject}</p>}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="font-inter text-[10px] font-semibold tracking-widest uppercase text-charcoal-mid/60 mb-1.5 block">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements..."
                          className={`${inputClass('message')} resize-none`}
                        />
                        {errors.message && <p className="font-inter text-red-500 text-xs mt-1">{errors.message}</p>}
                      </div>

                      {status === 'error' && (
                        <p className="font-inter text-red-500 text-sm">{serverMessage}</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-dark w-full text-xs py-4 flex items-center justify-center gap-2 disabled:opacity-60"
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
