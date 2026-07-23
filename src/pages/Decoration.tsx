import React from 'react';
import { Reveal, ParallaxHero } from '@/components/animations';
import { Flower2, Sparkles, Phone } from 'lucide-react';

import deco1 from '@assets/services/decoration-6.jpg';
import deco2 from '@assets/services/decoration-1.jpg';
import deco3 from '@assets/services/decoration-2.jpg';
import deco4 from '@assets/services/decoration-3.jpg';
import deco5 from '@assets/services/decoration-4.jpg';
import deco6 from '@assets/services/decoration-5.jpg';
import deco7 from '@assets/services/decoration-7.jpg';
import deco8 from '@assets/services/decoration-8.jpg';
import deco9 from '@assets/services/decoration-9.jpg';

const gallery = [deco1, deco2, deco3, deco4, deco5, deco6, deco7, deco8, deco9];

export default function Decoration() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <ParallaxHero
        imageUrl={deco6}
        focalPosition="center 40%"
        className="pt-32 pb-24 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6 text-secondary">
              <Flower2 size={22} />
              <span className="uppercase tracking-widest text-xs font-bold">Venue &amp; Gravesite Styling</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">Decoration</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
              Elegant draping, floral arrangements, and seating that transform any hall, tent, or gravesite into a fitting tribute.
            </p>
          </Reveal>
        </div>
      </ParallaxHero>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Every Detail, Beautifully Arranged</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our decoration team designs and installs complete memorial settings — from full drape backdrops and colour-coordinated
              chair covers to floral centrepieces, red carpet walkways, and outdoor marquee setups. Whatever theme or colour palette
              the family chooses, we bring it to life with care and precision.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Backdrop draping & colour theming',
              'Floral arrangements & centrepieces',
              'Chair covers, sashes & red carpet',
              'Indoor hall & outdoor marquee setup',
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 h-full border border-border shadow-sm flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-secondary">
                    <Sparkles size={20} />
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
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Our Decoration Work</h2>
              <p className="text-muted-foreground text-lg">
                A look at real setups our team has designed and installed for families across the Eastern Cape.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 [column-fill:_balance]">
            {gallery.map((img, idx) => (
              <Reveal key={idx} delay={(idx % 6) * 0.08} className={idx % 5 === 0 ? 'md:row-span-2' : ''}>
                <div className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group ${idx % 5 === 0 ? 'h-full' : ''}`}>
                  <img
                    src={img}
                    alt={`Siyahluma decoration setup ${idx + 1}`}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${idx % 5 === 0 ? 'h-full min-h-[420px]' : 'h-56 md:h-64'}`}
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Let Us Style Your Memorial</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Tell us the theme or colours you have in mind and our team will handle the setup, from backdrop to final flower.
            </p>
            <a
              href="tel:0415470516"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-primary transition-all"
            >
              <Phone size={18} />
              Discuss Your Decoration
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
