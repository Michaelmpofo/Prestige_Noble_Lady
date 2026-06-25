import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const products = [
  { label: 'Bedsheets', href: '/products?category=Bedsheets' },
  { label: 'Duvet Sets', href: '/products?category=Duvet+Sets' },
  { label: 'Pillowcases', href: '/products?category=Pillowcases' },
  { label: 'Curtains', href: '/products?category=Curtains' },
  { label: 'Mattress Covers', href: '/products?category=Mattress+Covers' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Story', href: '/about#story' },
  { label: 'Hospitality Solutions', href: '/hospitality' },
  { label: 'Customer Reviews', href: '/reviews' },
  { label: 'Blog', href: '#' },
];

const support = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Request a Quote', href: '/contact#quote' },
  { label: 'WhatsApp Order', href: 'https://wa.me/233549678391' },
  { label: 'Size Guide', href: '#' },
  { label: 'Care Instructions', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-playfair text-gold text-2xl font-bold mb-1">
                Prestige Noble Lady
              </h3>
              <p className="font-inter text-white/40 text-[10px] tracking-[0.3em] uppercase">
                Luxury Linens
              </p>
            </div>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="font-inter text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              Where Luxury Meets Comfort. Premium bedsheets, duvet sets, curtains, and home linen crafted for those who refuse to compromise on quality.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-inter text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-inter text-sm text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-inter text-sm text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+233549678391"
                  className="flex items-start gap-3 group"
                >
                  <Phone size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm text-white/60 group-hover:text-gold transition-colors">
                    0549 678 391
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Kinashabdullai@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm text-white/60 group-hover:text-gold transition-colors break-all">
                    Kinashabdullai@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm text-white/60">
                  Fetteh Kakaraba, Ghana
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="font-inter text-sm text-white/60">
                  <p>Mon–Sat: 8:00 AM – 8:00 PM</p>
                  <p className="text-white/40 text-xs mt-0.5">Sunday: Online orders only</p>
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/233549678391?text=Hello%2C%20I%20am%20interested%20in%20your%20luxury%20linen%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 btn-outline-gold text-[10px] px-4 py-2.5 w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Order
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Prestige Noble Lady Luxury. All rights reserved.
          </p>
          <p className="font-inter text-white/30 text-xs">
            Crafted with excellence &mdash; Fetteh Kakaraba, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
