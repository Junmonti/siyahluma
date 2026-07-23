import React from 'react';
import { Reveal, ParallaxHero } from '@/components/animations';
import { 
  Shield, MapPin, Camera, 
  Car, FileText, Box, Users, Mic 
} from 'lucide-react';
import textureImage from '@assets/generated_images/navy-gold-texture.jpg';
import liliesImage from '@assets/services/hearse-lilies.jpg';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Funeral Arrangements",
      desc: "Complete end-to-end management of the funeral process, providing guidance and support to families in making decisions that honor their loved ones."
    },
    {
      icon: Shield,
      title: "Funeral Cover",
      desc: "Comprehensive insurance plans ensuring financial peace of mind. Choose from individual, family, or traditional extended plans."
    },
    {
      icon: MapPin,
      title: "Repatriation",
      desc: "Dignified transport across South Africa. We safely bring your loved one home from the place of death to the final resting place."
    },
    {
      icon: Camera,
      title: "Media Services",
      desc: "Professional sound systems, live streaming for distant relatives, video recording, and custom memorial slideshow presentations."
    },
    {
      icon: Car,
      title: "Hearse Services",
      desc: "A fleet of premium, well-maintained hearses to ensure dignified and respectable transport. Trailer hearses also available."
    },
    {
      icon: Users,
      title: "Body Removal",
      desc: "Prompt, respectful, and professional removal of the deceased from home, hospital, or mortuary, available 24/7."
    },
    {
      icon: FileText,
      title: "Death Registration",
      desc: "Administrative assistance with obtaining the death certificate and necessary legal documentation to ease your burden."
    },
    {
      icon: Box,
      title: "Storage Facilities",
      desc: "Secure, highly regulated, and dignified cold storage facilities maintaining the highest standards of care."
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <ParallaxHero 
        imageUrl={liliesImage} 
        className="pt-32 pb-24 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">Funeral Services</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
              Everything to do with the burial, handled with dignity — arrangements, cover, repatriation, transport, and documentation.
            </p>
          </Reveal>
        </div>
      </ParallaxHero>

      {/* Services Grid */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all h-full group">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-serif text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service: Repatriation */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-xl max-w-6xl mx-auto flex flex-col lg:flex-row relative">
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center"
              style={{ backgroundImage: `url(${textureImage})` }}
            />
            <div className="lg:w-1/2 p-12 lg:p-16 relative z-10 text-white flex flex-col justify-center">
              <Reveal>
                <div className="flex items-center gap-3 mb-6 text-secondary">
                  <MapPin size={24} />
                  <span className="uppercase tracking-widest text-xs font-bold">Specialized Service</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                  Repatriation Across South Africa
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Distance should not prevent your loved one from resting where they belong. We provide seamless, dignified transport of the deceased from the place of death to the place of burial, anywhere within South Africa.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Cross-provincial transport",
                    "Full documentation and clearance management",
                    "Climate-controlled, specialized vehicles",
                    "Constant communication with the family"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:0782462124" className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-primary transition-all w-fit">
                  <Mic size={18} />
                  Call Repatriation Team
                </a>
              </Reveal>
            </div>
            
            {/* Visual element side */}
            <div className="lg:w-1/2 bg-muted relative min-h-[300px] hidden lg:block">
               <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${textureImage})` }}
                />
               <div className="absolute inset-0 bg-primary/20" />
               <div className="absolute inset-0 flex items-center justify-center p-12">
                 <div className="glass p-8 rounded-2xl text-center max-w-sm">
                   <h4 className="font-serif text-2xl text-primary mb-2">Dedicated Line</h4>
                   <p className="text-muted-foreground mb-4">Direct contact for national repatriation services</p>
                   <div className="text-3xl font-bold text-secondary">078 246 2124</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
