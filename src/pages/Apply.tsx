import React from 'react';
import { Reveal, ParallaxHero } from '@/components/animations';
import { FileSignature, ShieldCheck, Clock, Lock } from 'lucide-react';
import { ApplicationForm } from '@/components/apply/ApplicationForm';
import { PaymentInfoCard } from '@/components/apply/PaymentInfoCard';
import consultationRoom from '@assets/generated_images/consultation-room.jpg';

export default function Apply() {
  const trustPoints = [
    { icon: Lock, label: 'Secure & Confidential' },
    { icon: Clock, label: 'Response within 24–48 Hours' },
    { icon: ShieldCheck, label: 'No Obligation to Join' },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <ParallaxHero
        imageUrl={consultationRoom}
        className="pt-32 pb-20 flex items-center justify-center text-center print:hidden"
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-secondary mb-5">
              <FileSignature size={14} />
              Apply Online
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">Join a Funeral Plan</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
              Complete your application below to secure dignified, affordable cover for you and your family.
            </p>
          </Reveal>
        </div>
      </ParallaxHero>

      {/* Trust strip */}
      <div className="bg-accent border-b border-border print:hidden">
        <div className="container mx-auto px-4 md:px-8 py-6 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {trustPoints.map((point) => (
            <div key={point.label} className="flex items-center gap-2 text-sm text-primary font-medium">
              <point.icon size={16} className="text-secondary" />
              {point.label}
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12 print:hidden">
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-3">Application Form</h2>
              <p className="text-muted-foreground">
                Please complete every section accurately. Fields marked with <span className="text-secondary">*</span> are required.
              </p>
            </div>
          </Reveal>
          <ApplicationForm />
        </div>
      </section>

      <PaymentInfoCard />
    </div>
  );
}
