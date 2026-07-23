import React from 'react';
import { Reveal } from '@/components/animations';
import { Landmark, Building2, Hash, CreditCard, Wallet, QrCode, ShieldCheck } from 'lucide-react';

const bankDetails = [
  { icon: Building2, label: 'Bank Name', value: 'First National Bank (FNB)' },
  { icon: Landmark, label: 'Account Name', value: 'SIYAHLUMA FUNERAL DIRECTORS' },
  { icon: Hash, label: 'Account Number', value: '62830108701' },
  { icon: CreditCard, label: 'Branch Code', value: '250655' },
  { icon: Wallet, label: 'Account Type', value: 'Gold Business Account' },
];

export function PaymentInfoCard() {
  return (
    <section className="py-20 md:py-24 bg-primary relative overflow-hidden print:hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-secondary mb-5">
              <ShieldCheck size={14} />
              Payment Information
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Prefer to Pay by EFT?</h2>
            <p className="text-white/70 leading-relaxed">
              You may set up your monthly premium via the debit order details you provide in the form above, or make
              manual payments directly using our banking details below.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-[1.4fr_1fr]">
            {/* Banking details */}
            <div className="p-8 md:p-10">
              <h3 className="font-serif text-xl text-primary mb-6">Company Banking Details</h3>
              <div className="space-y-4">
                {bankDetails.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-secondary shrink-0">
                      <item.icon size={17} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-medium text-primary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-accent/60 border border-secondary/20 rounded-xl p-4 flex items-start gap-3">
                <ShieldCheck size={18} className="text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Please use your <span className="font-medium text-primary">ID Number or Policy Number</span> as your
                  payment reference when making EFT payments.
                </p>
              </div>
            </div>

            {/* QR Code placeholder */}
            <div className="bg-accent p-8 md:p-10 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-border">
              <div className="w-40 h-40 bg-white rounded-2xl border-2 border-dashed border-border flex items-center justify-center mb-4">
                <QrCode size={56} className="text-muted-foreground/40" />
              </div>
              <p className="text-sm font-medium text-primary mb-1">Scan to Pay</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                QR code for instant EFT payments will be available here soon.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
