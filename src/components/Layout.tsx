import React from 'react';
import { Link, useLocation } from 'wouter';
import { Phone, PhoneCall, ChevronUp, MapPin, Mail, Clock } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '@assets/logo_transparent.png';

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/plans', label: 'Funeral Plans' },
    { href: '/services', label: 'Services' },
    { href: '/branches', label: 'Branches' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar - Emergency & Contact */}
      <div className="bg-primary text-white py-2 px-4 md:px-8 text-sm hidden md:flex justify-between items-center z-50 relative">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 text-white/80">
            <Clock size={14} />
            <span>24/7 Support Available</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <MapPin size={14} />
            <span>2 Khama Street, KwaNobuhle, Kariega</span>
          </div>
        </div>
        <div className="flex gap-4 items-center font-medium">
          <span className="text-white/60">Emergency:</span>
          <a href="tel:0615470516" className="hover:text-secondary transition-colors flex items-center gap-2">
            <Phone size={14} /> 061 547 0516
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={logoImage}
              alt="Siyahluma Funeral Directors"
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-secondary cursor-pointer ${
                    location === link.href ? 'text-secondary' : 'text-primary'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/apply">
              <span className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                Apply Online
              </span>
            </Link>
            <a
              href="tel:0410650929"
              className="hidden md:flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-secondary/90 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <PhoneCall size={16} />
              Call Now
            </a>
            
            <button 
              className="lg:hidden text-primary p-2"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-transform ${showMobileMenu ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity ${showMobileMenu ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform ${showMobileMenu ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border overflow-hidden absolute w-full"
            >
              <nav className="flex flex-col p-4 shadow-lg">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span
                      onClick={() => setShowMobileMenu(false)}
                      className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                        location === link.href ? 'bg-accent text-primary' : 'text-muted-foreground hover:bg-muted hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <Link href="/apply">
                  <span
                    onClick={() => setShowMobileMenu(false)}
                    className="block mt-2 py-3 px-4 rounded-lg text-sm font-semibold bg-primary text-white text-center"
                  >
                    Apply Online
                  </span>
                </Link>
                <a
                  href="tel:0410650929"
                  className="mt-4 flex items-center justify-center gap-2 bg-secondary text-white px-5 py-3 rounded-xl text-sm font-medium"
                >
                  <PhoneCall size={16} />
                  Call Now: 041 065 0929
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-grow flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-6">
                <img
                  src={logoImage}
                  alt="Siyahluma Funeral Directors"
                  className="h-16 w-auto object-contain bg-white/95 rounded-lg p-2"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Established in 2009. Providing dignified, compassionate, and professional funeral services to families in their hardest moments.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <FaFacebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-medium mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="text-white/70 hover:text-secondary transition-colors text-sm cursor-pointer flex items-center gap-2">
                        <span className="w-1 h-1 bg-secondary rounded-full"></span>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif text-lg font-medium mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Funeral Arrangements', href: '/services' },
                  { label: 'Repatriation Services', href: '/services' },
                  { label: 'Funeral Cover Plans', href: '/plans' },
                  { label: 'Decoration', href: '/decoration' },
                  { label: 'Catering', href: '/catering' },
                ].map((service) => (
                  <li key={service.label}>
                    <Link href={service.href}>
                      <span className="text-white/70 hover:text-secondary transition-colors text-sm cursor-pointer flex items-center gap-2">
                        <span className="w-1 h-1 bg-secondary rounded-full"></span>
                        {service.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg font-medium mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm leading-relaxed">
                    2 Khama Street, KwaNobuhle<br />
                    Kariega, 6242
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-secondary shrink-0" />
                  <a href="tel:0410650929" className="text-white/70 hover:text-secondary text-sm transition-colors">
                    041 065 0929
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-secondary shrink-0" />
                  <a href="mailto:info@siyahlumafunerals.co.za" className="text-white/70 hover:text-secondary text-sm transition-colors">
                    info@siyahlumafunerals.co.za
                  </a>
                </li>
                <li className="pt-2">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <span className="block text-xs text-secondary uppercase tracking-wider mb-1 font-medium">24/7 Emergency</span>
                    <a href="tel:0615470516" className="text-white font-medium hover:text-secondary transition-colors">
                      061 547 0516
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Siyahluma Funeral Directors. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link href="/"><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></Link>
              <Link href="/"><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-primary rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-border"
              aria-label="Back to top"
            >
              <ChevronUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
        <a
          href="https://wa.me/27615470516"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
}
