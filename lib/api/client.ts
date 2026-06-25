// TEMPORARY MOCK LAYER.
// When the FastAPI backend is ready, replace the body of each function
// with a real fetch() call to the corresponding endpoint. Keep the same
// function names and return shapes so components don't need to change.

import type { Product } from '@/lib/data/products';
import type { Testimonial } from '@/lib/data/testimonials';

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  orderType?: 'individual' | 'bulk';
};

export type NewsletterData = {
  email: string;
};

export type QuoteRequestData = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: string;
  productInterest: string;
  estimatedQuantity: string;
  message?: string;
};

export async function fetchProducts(): Promise<Product[]> {
  // FUTURE: return fetch(`${BASE_URL}/products`).then(res => res.json())
  const { products } = await import('@/lib/data/products');
  return products;
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  // FUTURE: return fetch(`${BASE_URL}/testimonials`).then(res => res.json())
  const { testimonials } = await import('@/lib/data/testimonials');
  return testimonials;
}

export async function submitContactForm(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
  // FUTURE: return fetch(`${BASE_URL}/contact`, { method: 'POST', body: JSON.stringify(formData) }).then(res => res.json())
  console.log('Mock contact form submission:', formData);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, message: 'Thank you for your message. We will be in touch within 24 hours.' }), 800)
  );
}

export async function submitNewsletterSignup(data: NewsletterData): Promise<{ success: boolean; message: string }> {
  // FUTURE: return fetch(`${BASE_URL}/newsletter`, { method: 'POST', body: JSON.stringify(data) }).then(res => res.json())
  console.log('Mock newsletter signup:', data);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, message: 'Welcome to our luxury living community!' }), 600)
  );
}

export async function submitQuoteRequest(data: QuoteRequestData): Promise<{ success: boolean; message: string }> {
  // FUTURE: return fetch(`${BASE_URL}/quote`, { method: 'POST', body: JSON.stringify(data) }).then(res => res.json())
  console.log('Mock quote request:', data);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, message: 'Your bulk quote request has been received. Our team will contact you within 24 hours.' }), 800)
  );
}
