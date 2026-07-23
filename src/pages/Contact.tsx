import React, { useState } from 'react';
import { Reveal, ParallaxHero } from '@/components/animations';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import textureImage from '@assets/generated_images/navy-gold-texture.jpg';
import consultationRoom from '@assets/generated_images/consultation-room.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <ParallaxHero 
        imageUrl={consultationRoom} 
        className="pt-32 pb-24 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
              We are available 24/7 to assist you. Reach out to us for immediate help, to plan ahead, or with any inquiries.
            </p>
          </Reveal>
        </div>
      </ParallaxHero>

      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <Reveal direction="left">
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl font-serif text-primary mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground text-lg">
                    Whether you need immediate assistance or have questions about our plans, our compassionate team is here to help.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-2">Phone Numbers</h4>
                      <div className="space-y-2 text-muted-foreground">
                        <p className="flex justify-between max-w-xs">
                          <span>Head Office:</span>
                          <a href="tel:0410650929" className="font-medium text-primary hover:text-secondary">041 065 0929</a>
                        </p>
                        <p className="flex justify-between max-w-xs">
                          <span>Emergency (24/7):</span>
                          <a href="tel:0615470516" className="font-medium text-secondary hover:text-primary">061 547 0516</a>
                        </p>
                        <p className="flex justify-between max-w-xs">
                          <span>Repatriation:</span>
                          <a href="tel:0782462124" className="font-medium text-primary hover:text-secondary">078 246 2124</a>
                        </p>
                        <p className="flex justify-between max-w-xs">
                          <span>Deco & Catering:</span>
                          <a href="tel:0837198006" className="font-medium text-primary hover:text-secondary">083 719 8006</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-2">Head Office Location</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        2 Khama Street, KwaNobuhle<br />
                        Kariega, 6242<br />
                        Eastern Cape, South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-2">Business Hours</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Monday - Friday: 08:00 - 16:30<br />
                        Saturday: 08:00 - 12:00<br />
                        <span className="text-secondary font-medium">Emergency Body Removal: 24/7</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-2">Email</h4>
                      <a href="mailto:info@siyahlumafunerals.co.za" className="text-muted-foreground hover:text-secondary transition-colors">
                        info@siyahlumafunerals.co.za
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal direction="right" delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none"
                  style={{ backgroundImage: `url(${textureImage})` }}
                />
                
                <h3 className="text-2xl font-serif text-primary mb-6 relative z-10">Send us a Message</h3>
                
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center py-12 relative z-10"
                    >
                      <CheckCircle2 size={48} className="text-green-500 mb-4" />
                      <h4 className="text-xl font-serif mb-2">Message Sent Successfully</h4>
                      <p className="text-sm">Thank you for reaching out. A member of our team will contact you shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-5 relative z-10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label htmlFor="name" className="text-sm font-medium text-primary">Full Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="text-sm font-medium text-primary">Phone Number</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                            placeholder="082 123 4567"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-primary">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="subject" className="text-sm font-medium text-primary">Subject</label>
                        <select 
                          id="subject" 
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors appearance-none"
                        >
                          <option value="" disabled>Select a subject</option>
                          <option value="Funeral Arrangements">Funeral Arrangements</option>
                          <option value="Funeral Cover Enquiry">Funeral Cover Enquiry</option>
                          <option value="Repatriation Service">Repatriation Service</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
                        <textarea 
                          id="message" 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
            
          </div>
        </div>
      </section>

      {/* Map Placeholder Area */}
      <section className="h-[400px] w-full bg-muted relative border-t border-border">
        {/* We use a styled placeholder block instead of an actual iframe to keep it clean, as requested */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#E5E3DF]">
          <div className="text-center p-8 glass rounded-2xl max-w-sm mx-4">
             <MapPin size={40} className="mx-auto text-primary mb-4 opacity-50" />
             <h4 className="font-serif text-xl text-primary mb-2">Our Locations</h4>
             <p className="text-sm text-muted-foreground">Find Siyahluma branches across Kariega and beyond.</p>
             <button onClick={() => window.location.href='/branches'} className="mt-6 text-sm font-medium text-secondary hover:text-primary transition-colors">
               View All Branches &rarr;
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
