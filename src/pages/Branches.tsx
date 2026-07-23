import React from 'react';
import { Reveal } from '@/components/animations';
import { MapPin, Phone, Building2, Clock, AlertCircle } from 'lucide-react';
import textureImage from '@assets/generated_images/navy-gold-texture.jpg';

export default function Branches() {
  const branches = [
    {
      type: "Head Office",
      name: "KwaNobuhle Main",
      address: "2 Khama Street, KwaNobuhle, Kariega, 6242",
      phone: "041 065 0929",
      hours: "Mon - Fri: 08:00 - 16:30\nSat: 08:00 - 12:00\nSun: Closed",
      link: "tel:0410650929",
      isComingSoon: false
    },
    {
      type: "Branch",
      name: "KwaNobuhle Branch",
      address: "45 Mabandla Road, KwaNobuhle, Kariega, 6242",
      phone: "041 065 0930",
      hours: "Mon - Fri: 08:00 - 16:30\nSat: 08:00 - 12:00\nSun: Closed",
      link: "tel:0410650930",
      isComingSoon: false
    },
    {
      type: "Branch",
      name: "Joe Slovo Branch",
      address: "33 Mzwabantu Street, Joe Slovo, Gqeberha",
      phone: "071 960 9536",
      hours: "Mon - Fri: 08:00 - 16:30\nSat: 08:00 - 12:00\nSun: Closed",
      link: "tel:0719609536",
      isComingSoon: false
    },
    {
      type: "New Branch",
      name: "Plettenberg Bay",
      address: "Location details to be announced soon.",
      phone: "Coming Soon",
      hours: "Coming Soon",
      link: "#",
      isComingSoon: true
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${textureImage})` }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-white">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Locations</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              With 4 branches across the Eastern and Western Cape, we are positioned to serve you wherever you are.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Emergency Contacts Banner */}
      <section className="bg-secondary py-8 border-b-4 border-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-white">
              <AlertCircle size={28} />
              <h3 className="text-xl font-serif">Emergency Contact Numbers</h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 px-5 py-2.5 rounded-full text-white backdrop-blur-sm border border-white/20">
                <span className="text-sm uppercase tracking-wide mr-2 opacity-80">24/7 Emergency:</span>
                <a href="tel:0615470516" className="font-bold hover:text-primary transition-colors">061 547 0516</a>
              </div>
              <div className="bg-white/10 px-5 py-2.5 rounded-full text-white backdrop-blur-sm border border-white/20">
                <span className="text-sm uppercase tracking-wide mr-2 opacity-80">Repatriation:</span>
                <a href="tel:0782462124" className="font-bold hover:text-primary transition-colors">078 246 2124</a>
              </div>
              <div className="bg-white/10 px-5 py-2.5 rounded-full text-white backdrop-blur-sm border border-white/20">
                <span className="text-sm uppercase tracking-wide mr-2 opacity-80">Deco & Catering:</span>
                <a href="tel:0837198006" className="font-bold hover:text-primary transition-colors">083 719 8006</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {branches.map((branch, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className={`bg-white rounded-2xl p-8 border h-full flex flex-col relative overflow-hidden transition-shadow hover:shadow-md ${branch.type === 'Head Office' ? 'border-secondary shadow-sm ring-1 ring-secondary/10' : 'border-border'}`}>
                  
                  {branch.isComingSoon && (
                    <div className="absolute top-0 right-0 bg-muted text-muted-foreground px-4 py-1 rounded-bl-lg text-xs font-bold uppercase tracking-wider">
                      Coming Soon
                    </div>
                  )}

                  {branch.type === 'Head Office' && (
                    <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 rounded-bl-lg text-xs font-bold uppercase tracking-wider">
                      Head Office
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${branch.isComingSoon ? 'bg-muted text-muted-foreground' : 'bg-primary/5 text-secondary'}`}>
                      <Building2 size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-primary">{branch.name}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{branch.type}</p>
                    </div>
                  </div>

                  <div className="space-y-5 flex-grow mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className={`shrink-0 mt-0.5 ${branch.isComingSoon ? 'text-muted-foreground/50' : 'text-primary/60'}`} />
                      <span className={`text-sm leading-relaxed ${branch.isComingSoon ? 'text-muted-foreground italic' : 'text-primary'}`}>
                        {branch.address}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone size={18} className={`shrink-0 ${branch.isComingSoon ? 'text-muted-foreground/50' : 'text-primary/60'}`} />
                      {branch.isComingSoon ? (
                        <span className="text-sm text-muted-foreground italic">{branch.phone}</span>
                      ) : (
                        <a href={branch.link} className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                          {branch.phone}
                        </a>
                      )}
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock size={18} className={`shrink-0 mt-0.5 ${branch.isComingSoon ? 'text-muted-foreground/50' : 'text-primary/60'}`} />
                      <p className={`text-sm whitespace-pre-line ${branch.isComingSoon ? 'text-muted-foreground italic' : 'text-muted-foreground'}`}>
                        {branch.hours}
                      </p>
                    </div>
                  </div>

                  {!branch.isComingSoon && (
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 text-center border border-border rounded-xl text-sm font-medium text-primary hover:bg-muted transition-colors"
                    >
                      Get Directions
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
