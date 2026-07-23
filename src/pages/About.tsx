import React from 'react';
import { Reveal, ParallaxHero } from '@/components/animations';
import { Target, Heart, Shield, Award, Users } from 'lucide-react';
import textureImage from '@assets/generated_images/navy-gold-texture.jpg';

export default function About() {
  const values = [
    { icon: Heart, title: "Honesty", desc: "We operate with complete transparency, ensuring families always know what to expect." },
    { icon: Award, title: "Professionalism", desc: "Every service is executed with meticulous attention to detail and high standards." },
    { icon: Users, title: "Respect", desc: "We honor the deceased and respect the wishes, culture, and traditions of every family." },
    { icon: Target, title: "Customer Commitment", desc: "Our priority is to alleviate the burden on families during their time of grief." },
    { icon: Shield, title: "Health & Safety", desc: "We adhere to strict protocols to ensure the safety of our staff, clients, and community." }
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
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Story</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A legacy of compassion, dignity, and professional excellence in Kariega.
            </p>
          </Reveal>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="flex items-center gap-3 mb-6 justify-center">
                <span className="w-12 h-[1px] bg-secondary block"></span>
                <span className="text-secondary uppercase tracking-wider text-sm font-medium">Established 2009</span>
                <span className="w-12 h-[1px] bg-secondary block"></span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-10 text-center leading-tight">
                Rooted in Community
              </h2>
            </Reveal>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <Reveal delay={0.2}>
                <p>
                  Siyahluma Funeral Directors was established in 2009 by Mvuselelo Mossie in Kariega (formerly Uitenhage). Born from a deep desire to provide dignified, respectful, and premium funeral services to the community, the business started with a simple yet profound mission: to carry the burden for families during their most difficult moments.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  Over the years, Siyahluma has grown significantly, expanding from our initial office to four branches, including locations in KwaNobuhle, Joe Slovo in Gqeberha, and Plettenberg Bay. This growth is a testament to the trust the community has placed in us.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p>
                  We understand that a funeral is not just a service; it is a final tribute, a celebration of life, and a crucial step in the healing process. Our team is trained to handle every detail with the utmost sensitivity and professionalism, ensuring that every farewell is as unique and special as the life it honors.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Reveal direction="left">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-border h-full">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-secondary mb-8">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-6">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide compassionate, comprehensive, and high-quality funeral services that alleviate the stress on grieving families. We strive to be the pillar of support our community can rely on, managing every aspect of the memorial with unmatched professionalism.
                </p>
              </div>
            </Reveal>
            
            <Reveal direction="right" delay={0.2}>
              <div className="bg-primary p-10 rounded-2xl shadow-sm h-full text-white relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${textureImage})` }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-secondary mb-8 backdrop-blur-sm">
                    <Award size={28} />
                  </div>
                  <h3 className="text-2xl font-serif mb-6">Our Vision</h3>
                  <p className="text-white/80 leading-relaxed">
                    To be the leading and most trusted funeral service provider in the Eastern Cape and beyond, recognized for our unwavering commitment to dignity, excellence, and innovative service offerings that meet the evolving needs of our communities.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Our Core Values</h2>
              <p className="text-muted-foreground text-lg">
                These principles guide every interaction, every decision, and every service we provide.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <div className="group p-8 rounded-2xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors mb-6">
                    <value.icon size={20} />
                  </div>
                  <h4 className="text-xl font-serif text-primary mb-4">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
