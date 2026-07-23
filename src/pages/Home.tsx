import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Phone, Heart, Users, MapPin, Shield, Flower2, Coffee } from 'lucide-react';
import { Reveal, ParallaxHero } from '@/components/animations';
import { CountUp } from '@/components/CountUp';
import heroImage from '@assets/homepage_hero_v2.jpg';
import textureImage from '@assets/generated_images/navy-gold-texture.jpg';
import whoWeAreImage from '@assets/who-we-are.jpg';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ParallaxHero 
        imageUrl={heroImage} 
        focalPosition="center 50%"
        className="min-h-[90vh] flex items-center justify-center text-center px-4"
      >
        <div className="container mx-auto max-w-4xl py-32">
          <Reveal>
            <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-6 drop-shadow-sm">
              Established 2009
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight drop-shadow-md">
              Dignified farewells, <br />
              <span className="text-white/90 italic">compassionate care.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Supporting families in their hardest moments with professionalism, respect, and quiet luxury. We handle every detail, so you can focus on what matters.
            </p>
          </Reveal>
          <Reveal delay={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-secondary text-white rounded-full font-medium hover:bg-secondary/90 transition-all hover:-translate-y-1 hover:shadow-xl text-center">
              Request Assistance
            </Link>
            <Link href="/plans" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-medium hover:bg-white/20 transition-all text-center">
              View Funeral Plans
            </Link>
          </Reveal>
        </div>
      </ParallaxHero>

      {/* Intro & Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${whoWeAreImage})` }}
                  />
                  {/* Decorative promise card over image */}
                  <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl border border-border/60 p-6 rounded-2xl max-w-[240px] hidden md:block">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                        <Heart size={22} />
                      </div>
                      <h4 className="font-serif font-semibold text-primary tracking-wide uppercase text-xs leading-snug">Our Promise</h4>
                    </div>
                    <p className="text-sm text-primary/70 leading-relaxed font-medium">
                      To serve every family with the utmost dignity, honesty, and respect.
                    </p>
                    <div className="mt-3 h-[2px] w-10 bg-secondary rounded-full" />
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-8">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="w-12 h-[1px] bg-secondary block"></span>
                  <span className="text-secondary uppercase tracking-wider text-sm font-medium">Who We Are</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-primary mt-4 mb-6 leading-tight">
                  A legacy of trust in Kariega
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Founded in 2009 by Mvuselelo Mossie, Siyahluma Funeral Directors has grown from a single office into a trusted pillar of the community. We understand that saying goodbye is never easy. Our mission is to alleviate the burden of arrangements with meticulous care and deep empathy.
                </p>
              </Reveal>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border mt-8">
                <Reveal delay={0.2}>
                  <div className="text-4xl md:text-5xl font-serif text-primary mb-2">
                    <CountUp end={17} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Experience</div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="text-4xl md:text-5xl font-serif text-primary mb-2">
                    <CountUp end={4} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Locations</div>
                </Reveal>
                <Reveal delay={0.4}>
                  <div className="text-4xl md:text-5xl font-serif text-primary mb-2">
                    <CountUp end={1000} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Families Assisted</div>
                </Reveal>
                <Reveal delay={0.5}>
                  <div className="text-4xl md:text-5xl font-serif text-primary mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Support Available</div>
                </Reveal>
              </div>

              <Reveal delay={0.6}>
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors group mt-4">
                  Read our full story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-accent relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Comprehensive Services</h2>
              <p className="text-muted-foreground text-lg">
                We offer a complete suite of services to ensure every detail of the memorial is handled flawlessly.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Funeral Services",
                desc: "Full-service burial management including arrangements, documentation, caskets, repatriation, hearses, and more.",
                link: "/services"
              },
              {
                icon: Flower2,
                title: "Decoration",
                desc: "Elegant venue and gravesite styling — draping, floral arrangements, chair covers, and red carpet setups.",
                link: "/decoration"
              },
              {
                icon: Coffee,
                title: "Catering",
                desc: "Dignified, home-style meals prepared and served for guests, so families can focus on mourning.",
                link: "/catering"
              }
            ].map((service, idx) => (
              <Reveal key={idx} delay={0.2 * idx}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col group border border-border">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-serif text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-grow">{service.desc}</p>
                  <Link href={service.link} className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">What Families Say</h2>
              <div className="w-16 h-[1px] bg-secondary mx-auto"></div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal delay={0.2} direction="left">
              <div className="bg-muted p-10 rounded-2xl relative">
                <span className="absolute top-6 left-6 text-6xl text-secondary/20 font-serif leading-none">"</span>
                <p className="relative z-10 text-primary/80 italic text-lg leading-relaxed mb-6">
                  "In our darkest hour, the team at Siyahluma brought light. They handled everything with such grace and professionalism. We didn't have to worry about a single detail, allowing us to focus on honoring our father."
                </p>
                <div className="font-medium text-primary">The Nkomo Family</div>
              </div>
            </Reveal>
            <Reveal delay={0.4} direction="right">
              <div className="bg-muted p-10 rounded-2xl relative">
                <span className="absolute top-6 left-6 text-6xl text-secondary/20 font-serif leading-none">"</span>
                <p className="relative z-10 text-primary/80 italic text-lg leading-relaxed mb-6">
                  "Their repatriation service was a blessing. Bringing my sister home from Johannesburg was seamless and handled with immense respect. Thank you to Mr. Mossie and the entire staff."
                </p>
                <div className="font-medium text-primary">S. Dlamini</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${textureImage})` }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">We are here for you, 24/7</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
              Whether you need immediate assistance or wish to plan ahead, our compassionate team is ready to support you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:0615470516" className="w-full sm:w-auto px-8 py-4 bg-secondary text-white rounded-full font-medium hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2">
                <Phone size={18} />
                Call Emergency Line
              </a>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Send a Message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
