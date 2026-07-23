import React from 'react';
import { Reveal, ParallaxHero } from '@/components/animations';
import { Coffee, UtensilsCrossed, Phone } from 'lucide-react';

import cater1 from '@assets/services/catering-4.jpg';
import cater2 from '@assets/services/catering-1.jpg';
import cater3 from '@assets/services/catering-3.jpg';
import cater4 from '@assets/services/catering-2.jpg';

const gallery = [cater1, cater2, cater3, cater4];

export default function Catering() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <ParallaxHero
        imageUrl={cater1}
        focalPosition="center 30%"
        className="pt-32 pb-24 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6 text-secondary">
              <Coffee size={22} />
              <span className="uppercase tracking-widest text-xs font-bold">Dignified Meals For Guests</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">Catering</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
              Warm, well-prepared meals served with care, so families can focus on mourning rather than logistics.
            </p>
          </Reveal>
        </div>
      </ParallaxHero>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Nourishing Guests With Care</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From full sit-down meals at the family home to take-away packs for large gatherings, our catering team prepares and
              serves generous, home-style plates for every guest. We handle the cooking, the setup, and the cleanup, so your family
              can stay together on the day that matters most.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Full plated meals for guests',
              'Take-away packs for large numbers',
              'Table setup & serving staff',
              'Cutlery, crockery & drinks included',
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 h-full border border-border shadow-sm flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-secondary">
                    <UtensilsCrossed size={20} />
                  </div>
                  <p className="text-sm text-primary/90 font-medium leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">From Our Kitchen</h2>
              <p className="text-muted-foreground text-lg">
                Real meals and setups prepared by our catering team for families we've served.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((img, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group aspect-[3/4]">
                  <img
                    src={img}
                    alt={`Siyahluma catering ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Plan Your Catering</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let us know your guest numbers and preferences, and we'll take care of the rest.
            </p>
            <a
              href="tel:0415470516"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-primary transition-all"
            >
              <Phone size={18} />
              Discuss Your Catering
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
