import React from 'react';
import { Reveal } from '@/components/animations';
import { Check, ShieldAlert, Clock, Info } from 'lucide-react';
import textureImage from '@assets/generated_images/navy-gold-texture.jpg';

export default function Plans() {
  const commonBenefits = [
    "Removal of body",
    "Storage",
    "Death Registration",
    "Casket",
    "Coffin Spray",
    "Hearse",
    "Funeral Programmes",
    "Bus",
    "Decoration",
    "Gravesite Reservation"
  ];

  const optionalBenefits = [
    "Trailer Hearse",
    "Repatriation",
    "Tombstone"
  ];

  const standardPlans = [
    {
      name: "Individual Cover",
      price: "R45",
      type: "month",
      desc: "Comprehensive cover for a single member.",
      features: commonBenefits,
      featured: false
    },
    {
      name: "Member + Children",
      price: "R65",
      type: "month",
      desc: "Protection for you and your dependent children.",
      features: commonBenefits,
      featured: false
    },
    {
      name: "Member + Spouse",
      price: "R90",
      type: "month",
      desc: "Joint cover for you and your partner.",
      features: commonBenefits,
      featured: true
    },
    {
      name: "Family Cover",
      price: "R150",
      type: "month",
      desc: "Member, Spouse, and Children combined.",
      features: commonBenefits,
      featured: false
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
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Funeral Plans</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Premium cover ensuring peace of mind for you and your loved ones, so you can grieve without financial worry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {standardPlans.map((plan, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <div className={`relative h-full bg-white rounded-3xl p-8 shadow-sm border flex flex-col transition-transform hover:-translate-y-1 ${
                  plan.featured ? 'border-secondary shadow-md ring-1 ring-secondary/20' : 'border-border'
                }`}>
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-serif text-primary mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.desc}</p>
                  </div>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.type}</span>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="text-sm font-medium text-primary mb-4 border-b pb-2">Included Benefits</div>
                    {plan.features.slice(0, 5).map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check size={16} className="text-secondary mt-1 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    <div className="text-xs text-muted-foreground/80 italic pt-2">
                      + 5 more standard benefits
                    </div>
                  </div>
                  
                  <button onClick={() => window.location.href='/apply'} className={`w-full py-3 rounded-full font-medium transition-colors ${
                    plan.featured 
                      ? 'bg-secondary text-white hover:bg-secondary/90' 
                      : 'bg-muted text-primary hover:bg-primary hover:text-white'
                  }`}>
                    Apply Now
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Plan (Highlight) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal>
            <div className="max-w-5xl mx-auto bg-primary rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 text-white relative">
                <div 
                  className="absolute inset-0 opacity-10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${textureImage})` }}
                />
                <div className="relative z-10">
                  <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase mb-6">
                    Comprehensive Family Cover
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">Traditional Funeral Plan</h2>
                  <div className="mb-8 flex items-end gap-2">
                    <span className="text-xl">from</span>
                    <span className="text-5xl font-bold text-secondary">R285</span>
                    <span className="text-white/70 pb-1">/month</span>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-8">
                    Our most inclusive plan designed for large, extended families. Covers up to 13 dependents with the exact same benefits for every member, regardless of surname.
                  </p>
                  <button onClick={() => window.location.href='/contact'} className="px-8 py-4 bg-secondary text-white rounded-full font-medium hover:bg-white hover:text-primary transition-all w-full md:w-auto text-center">
                    Enquire About Traditional Plan
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 bg-muted p-12">
                <h4 className="font-serif text-xl text-primary mb-6">Plan Specifications</h4>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-secondary mt-0.5 shrink-0" />
                    <span className="text-primary font-medium">Up to 13 Dependents Included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-secondary mt-0.5 shrink-0" />
                    <span className="text-primary font-medium">Different Surnames Accepted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-secondary mt-0.5 shrink-0" />
                    <span className="text-primary font-medium">Whole Life Cover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-secondary mt-0.5 shrink-0" />
                    <span className="text-primary font-medium">Maximum Entry Age: 84 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-secondary mt-0.5 shrink-0" />
                    <span className="text-primary font-medium">Full Standard Benefits for ALL members</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Details & Waiting Periods */}
      <section className="py-24 bg-accent border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            <Reveal direction="left">
              <div className="bg-white p-8 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="text-secondary" size={24} />
                  <h3 className="text-2xl font-serif text-primary">Waiting Periods</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold shrink-0">6m</div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">General Waiting Period</h4>
                      <p className="text-sm text-muted-foreground">Standard 6-month waiting period applies for natural death after first premium.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold shrink-0">0m</div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">Accidental Death</h4>
                      <p className="text-sm text-muted-foreground">No waiting period for accidental death. Immediate cover upon registration.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold shrink-0">24m</div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">Suicide</h4>
                      <p className="text-sm text-muted-foreground">A 24-month waiting period applies in the event of suicide.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="text-secondary" size={24} />
                  <h3 className="text-2xl font-serif text-primary">Optional Benefits</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Enhance any of our funeral plans with these optional add-ons, available at an extra cost:
                </p>
                <ul className="space-y-4">
                  {optionalBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-muted p-4 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="font-medium text-primary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}
