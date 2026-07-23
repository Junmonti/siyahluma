import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, HeartHandshake, Users, Landmark, FileUp, ShieldCheck,
  Plus, Trash2, CheckCircle2, Printer, Download, Send, RefreshCcw
} from 'lucide-react';
import { TextField, SelectField, TextAreaField, FileField } from './FormFields';

const PLANS = [
  { id: 'individual', name: 'Individual Cover', price: 'R45', desc: 'Cover for a single member.' },
  { id: 'member-children', name: 'Member & Children', price: 'R65', desc: 'You and your dependent children.' },
  { id: 'member-spouse', name: 'Member & Spouse', price: 'R90', desc: 'Joint cover for you and your partner.' },
  { id: 'member-spouse-children', name: 'Member, Spouse & Children', price: 'R150', desc: 'Full family cover, all in one plan.' },
  { id: 'traditional-family', name: 'Traditional Family Plan', price: 'R285', desc: 'Extended family cover, up to 13 dependants.' },
];

const GENDER_OPTIONS = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'other', label: 'Other' },
];

const MARITAL_OPTIONS = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'widowed', label: 'Widowed' },
];

const RELATIONSHIP_OPTIONS = [
  { value: 'spouse', label: 'Spouse' },
  { value: 'child', label: 'Child' },
  { value: 'parent', label: 'Parent' },
  { value: 'sibling', label: 'Sibling' },
  { value: 'other', label: 'Other' },
];

const BANK_OPTIONS = [
  { value: 'absa', label: 'ABSA' },
  { value: 'capitec', label: 'Capitec Bank' },
  { value: 'fnb', label: 'First National Bank (FNB)' },
  { value: 'nedbank', label: 'Nedbank' },
  { value: 'standard-bank', label: 'Standard Bank' },
  { value: 'african-bank', label: 'African Bank' },
  { value: 'tymebank', label: 'TymeBank' },
  { value: 'discovery-bank', label: 'Discovery Bank' },
  { value: 'other', label: 'Other' },
];

const ACCOUNT_TYPE_OPTIONS = [
  { value: 'savings', label: 'Savings Account' },
  { value: 'current', label: 'Current / Cheque Account' },
];

const DEBIT_DATE_OPTIONS = [
  { value: '1', label: '1st of the month' },
  { value: '15', label: '15th of the month' },
  { value: '25', label: '25th of the month' },
  { value: 'last', label: 'Last day of the month' },
];

interface Dependant {
  key: string;
  fullName: string;
  idNumber: string;
  dob: string;
  relationship: string;
}

interface FormState {
  fullName: string;
  idNumber: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  phone: string;
  altPhone: string;
  email: string;
  residentialAddress: string;
  postalAddress: string;
  plan: string;
  beneficiaryFullName: string;
  beneficiaryRelationship: string;
  beneficiaryContact: string;
  beneficiaryId: string;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  branchCode: string;
  accountType: string;
  debitDate: string;
}

interface FilesState {
  idCopy: File | null;
  proofOfResidence: File | null;
  bankConfirmation: File | null;
  deathCertificate: File | null;
}

const initialFormState: FormState = {
  fullName: '', idNumber: '', dob: '', gender: '', maritalStatus: '',
  phone: '', altPhone: '', email: '', residentialAddress: '', postalAddress: '',
  plan: '',
  beneficiaryFullName: '', beneficiaryRelationship: '', beneficiaryContact: '', beneficiaryId: '',
  bankName: '', accountHolder: '', accountNumber: '', branchCode: '', accountType: '', debitDate: '',
};

const initialFiles: FilesState = {
  idCopy: null, proofOfResidence: null, bankConfirmation: null, deathCertificate: null,
};

const saIdRegex = /^\d{13}$/;
const phoneRegex = /^0\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_SIZE = 5 * 1024 * 1024;

function makeKey() {
  return Math.random().toString(36).slice(2, 10);
}

function SectionHeader({ icon: Icon, step, title, desc }: { icon: any; step: number; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-serif">
        {step}
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-serif text-primary flex items-center gap-2">
          <Icon size={18} className="text-secondary" />
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  );
}

export function ApplicationForm() {
  const [form, setForm] = React.useState<FormState>(initialFormState);
  const [dependants, setDependants] = React.useState<Dependant[]>([]);
  const [files, setFiles] = React.useState<FilesState>(initialFiles);
  const [declaration, setDeclaration] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [referenceNumber, setReferenceNumber] = React.useState('');
  const [bannerError, setBannerError] = React.useState(false);

  const sectionRefs = {
    personal: React.useRef<HTMLDivElement>(null),
    plan: React.useRef<HTMLDivElement>(null),
    beneficiary: React.useRef<HTMLDivElement>(null),
    dependants: React.useRef<HTMLDivElement>(null),
    banking: React.useRef<HTMLDivElement>(null),
    documents: React.useRef<HTMLDivElement>(null),
    declaration: React.useRef<HTMLDivElement>(null),
  };

  const handleFieldChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (name: string, file: File | null) => {
    if (file && file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({ ...prev, [name]: 'File is too large. Maximum size is 5MB.' }));
      return;
    }
    setFiles((prev) => ({ ...prev, [name]: file }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const addDependant = () => {
    setDependants((prev) => [...prev, { key: makeKey(), fullName: '', idNumber: '', dob: '', relationship: '' }]);
  };

  const removeDependant = (key: string) => {
    setDependants((prev) => prev.filter((d) => d.key !== key));
    setErrors((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((k) => {
        if (k.startsWith(`dependant-${key}-`)) delete next[k];
      });
      return next;
    });
  };

  const updateDependant = (key: string, field: keyof Dependant, value: string) => {
    setDependants((prev) => prev.map((d) => (d.key === key ? { ...d, [field]: value } : d)));
  };

  const sectionOf = (field: string): keyof typeof sectionRefs => {
    if (['fullName', 'idNumber', 'dob', 'gender', 'maritalStatus', 'phone', 'altPhone', 'email', 'residentialAddress', 'postalAddress'].includes(field)) return 'personal';
    if (field === 'plan') return 'plan';
    if (field.startsWith('beneficiary')) return 'beneficiary';
    if (field.startsWith('dependant-')) return 'dependants';
    if (['bankName', 'accountHolder', 'accountNumber', 'branchCode', 'accountType', 'debitDate'].includes(field)) return 'banking';
    if (['idCopy', 'proofOfResidence', 'bankConfirmation', 'deathCertificate'].includes(field)) return 'documents';
    return 'declaration';
  };

  const validate = (): Record<string, string> => {
    const next: Record<string, string> = {};

    if (!form.fullName.trim()) next.fullName = 'Full name is required.';
    if (!saIdRegex.test(form.idNumber.trim())) next.idNumber = 'Enter a valid 13-digit South African ID number.';
    if (!form.dob) next.dob = 'Date of birth is required.';
    if (!form.gender) next.gender = 'Please select a gender.';
    if (!form.maritalStatus) next.maritalStatus = 'Please select a marital status.';
    if (!phoneRegex.test(form.phone.trim())) next.phone = 'Enter a valid 10-digit SA phone number (e.g. 0821234567).';
    if (form.altPhone.trim() && !phoneRegex.test(form.altPhone.trim())) next.altPhone = 'Enter a valid 10-digit SA phone number.';
    if (!emailRegex.test(form.email.trim())) next.email = 'Enter a valid email address.';
    if (!form.residentialAddress.trim()) next.residentialAddress = 'Residential address is required.';
    if (!form.postalAddress.trim()) next.postalAddress = 'Postal address is required.';

    if (!form.plan) next.plan = 'Please select a funeral plan.';

    if (!form.beneficiaryFullName.trim()) next.beneficiaryFullName = 'Beneficiary full name is required.';
    if (!form.beneficiaryRelationship) next.beneficiaryRelationship = 'Please select the relationship to member.';
    if (!phoneRegex.test(form.beneficiaryContact.trim())) next.beneficiaryContact = 'Enter a valid 10-digit SA phone number.';
    if (!saIdRegex.test(form.beneficiaryId.trim())) next.beneficiaryId = 'Enter a valid 13-digit South African ID number.';

    dependants.forEach((dep) => {
      if (!dep.fullName.trim()) next[`dependant-${dep.key}-fullName`] = 'Required.';
      if (!saIdRegex.test(dep.idNumber.trim())) next[`dependant-${dep.key}-idNumber`] = 'Enter a valid 13-digit ID number.';
      if (!dep.dob) next[`dependant-${dep.key}-dob`] = 'Required.';
      if (!dep.relationship) next[`dependant-${dep.key}-relationship`] = 'Required.';
    });

    if (!form.bankName) next.bankName = 'Please select your bank.';
    if (!form.accountHolder.trim()) next.accountHolder = 'Account holder name is required.';
    if (!form.accountNumber.trim()) next.accountNumber = 'Account number is required.';
    if (!form.branchCode.trim()) next.branchCode = 'Branch code is required.';
    if (!form.accountType) next.accountType = 'Please select an account type.';
    if (!form.debitDate) next.debitDate = 'Please select a preferred debit order date.';

    if (!files.idCopy) next.idCopy = 'Please upload a copy of your South African ID.';
    if (!files.proofOfResidence) next.proofOfResidence = 'Please upload proof of residence.';
    if (!files.bankConfirmation) next.bankConfirmation = 'Please upload a bank confirmation letter.';

    if (!declaration) next.declaration = 'You must accept the declaration to submit your application.';

    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setBannerError(true);
      const firstField = Object.keys(validationErrors)[0];
      const section = sectionOf(firstField);
      sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setBannerError(false);
    setIsSubmitting(true);

    // Simulate submission to office / processing team
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setReferenceNumber(`SFD-${Date.now().toString().slice(-8)}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1800);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setForm(initialFormState);
    setDependants([]);
    setFiles(initialFiles);
    setDeclaration(false);
    setErrors({});
    setIsSuccess(false);
    setBannerError(false);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-border p-10 md:p-14 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-green-500" />
        </div>
        <h3 className="text-2xl md:text-3xl font-serif text-primary mb-3">Application Submitted</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Thank you, {form.fullName.split(' ')[0] || 'valued member'}. We have received your application and our team
          will contact you within 24–48 hours to confirm your details and arrange your first debit order.
        </p>
        <div className="bg-accent rounded-xl px-6 py-4 inline-block mb-8">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Reference Number</span>
          <p className="text-lg font-serif text-primary font-semibold">{referenceNumber}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-muted text-primary font-medium hover:bg-primary hover:text-white transition-colors"
          >
            <Printer size={16} /> Print Confirmation
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            <RefreshCcw size={16} /> Submit Another Application
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-4xl mx-auto space-y-14">
      <AnimatePresence>
        {bannerError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="print:hidden bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm font-medium"
          >
            Please review the highlighted fields below — some required information is missing or invalid.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Personal Details */}
      <div ref={sectionRefs.personal} className="bg-white rounded-3xl shadow-sm border border-border p-6 md:p-10 print:shadow-none print:border-0">
        <SectionHeader icon={User} step={1} title="Personal Details" desc="Tell us about yourself as the main member." />
        <div className="grid md:grid-cols-2 gap-5">
          <TextField label="Full Name" name="fullName" value={form.fullName} onChange={handleFieldChange} required error={errors.fullName} placeholder="e.g. Nomsa Dlamini" />
          <TextField label="South African ID Number" name="idNumber" value={form.idNumber} onChange={handleFieldChange} required error={errors.idNumber} placeholder="13-digit ID number" />
          <TextField label="Date of Birth" name="dob" type="date" value={form.dob} onChange={handleFieldChange} required error={errors.dob} />
          <SelectField label="Gender" name="gender" value={form.gender} onChange={handleFieldChange} options={GENDER_OPTIONS} required error={errors.gender} />
          <SelectField label="Marital Status" name="maritalStatus" value={form.maritalStatus} onChange={handleFieldChange} options={MARITAL_OPTIONS} required error={errors.maritalStatus} />
          <TextField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleFieldChange} required error={errors.phone} placeholder="082 123 4567" />
          <TextField label="Alternative Phone Number" name="altPhone" type="tel" value={form.altPhone} onChange={handleFieldChange} error={errors.altPhone} placeholder="Optional" />
          <TextField label="Email Address" name="email" type="email" value={form.email} onChange={handleFieldChange} required error={errors.email} placeholder="you@example.com" />
          <TextAreaField label="Residential Address" name="residentialAddress" value={form.residentialAddress} onChange={handleFieldChange} required error={errors.residentialAddress} placeholder="Street, suburb, town, postal code" />
          <TextAreaField label="Postal Address" name="postalAddress" value={form.postalAddress} onChange={handleFieldChange} required error={errors.postalAddress} placeholder="If different from residential address" />
        </div>
      </div>

      {/* Plan Selection */}
      <div ref={sectionRefs.plan} className="bg-white rounded-3xl shadow-sm border border-border p-6 md:p-10 print:shadow-none print:border-0">
        <SectionHeader icon={HeartHandshake} step={2} title="Funeral Plan Selection" desc="Choose the cover that best suits your family's needs." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLANS.map((plan) => {
            const selected = form.plan === plan.id;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => handleFieldChange('plan', plan.id)}
                className={`text-left rounded-2xl border-2 p-5 transition-all relative ${
                  selected ? 'border-secondary bg-accent shadow-md' : 'border-border hover:border-secondary/50'
                }`}
              >
                {selected && (
                  <span className="absolute top-4 right-4 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </span>
                )}
                <h4 className="font-serif text-lg text-primary mb-1 pr-6">{plan.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{plan.desc}</p>
                <p className="text-secondary font-semibold">
                  From {plan.price}<span className="text-muted-foreground text-xs font-normal">/month</span>
                </p>
              </button>
            );
          })}
        </div>
        {errors.plan && <p className="text-xs text-red-600 mt-3">{errors.plan}</p>}
      </div>

      {/* Beneficiary Details */}
      <div ref={sectionRefs.beneficiary} className="bg-white rounded-3xl shadow-sm border border-border p-6 md:p-10 print:shadow-none print:border-0">
        <SectionHeader icon={Users} step={3} title="Beneficiary Details" desc="The person who will manage your policy claims and payouts." />
        <div className="grid md:grid-cols-2 gap-5">
          <TextField label="Beneficiary Full Name" name="beneficiaryFullName" value={form.beneficiaryFullName} onChange={handleFieldChange} required error={errors.beneficiaryFullName} />
          <SelectField label="Relationship to Member" name="beneficiaryRelationship" value={form.beneficiaryRelationship} onChange={handleFieldChange} options={RELATIONSHIP_OPTIONS} required error={errors.beneficiaryRelationship} />
          <TextField label="Contact Number" name="beneficiaryContact" type="tel" value={form.beneficiaryContact} onChange={handleFieldChange} required error={errors.beneficiaryContact} placeholder="082 123 4567" />
          <TextField label="South African ID Number" name="beneficiaryId" value={form.beneficiaryId} onChange={handleFieldChange} required error={errors.beneficiaryId} placeholder="13-digit ID number" />
        </div>
      </div>

      {/* Dependants */}
      <div ref={sectionRefs.dependants} className="bg-white rounded-3xl shadow-sm border border-border p-6 md:p-10 print:shadow-none print:border-0">
        <SectionHeader icon={Users} step={4} title="Dependants" desc="Add any dependants covered under your selected plan (optional)." />

        {dependants.length === 0 && (
          <p className="text-sm text-muted-foreground italic mb-4">No dependants added yet.</p>
        )}

        <div className="space-y-5 mb-5">
          {dependants.map((dep, idx) => (
            <div key={dep.key} className="relative border border-border rounded-2xl p-5 bg-muted/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary">Dependant {idx + 1}</span>
                <button
                  type="button"
                  onClick={() => removeDependant(dep.key)}
                  className="print:hidden text-muted-foreground hover:text-red-500 flex items-center gap-1 text-xs font-medium"
                >
                  <Trash2 size={14} /> Remove
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextField
                  label="Full Name" name={`dep-fullName-${dep.key}`} value={dep.fullName}
                  onChange={(_n, v) => updateDependant(dep.key, 'fullName', v)}
                  required error={errors[`dependant-${dep.key}-fullName`]}
                />
                <TextField
                  label="ID Number" name={`dep-idNumber-${dep.key}`} value={dep.idNumber}
                  onChange={(_n, v) => updateDependant(dep.key, 'idNumber', v)}
                  required error={errors[`dependant-${dep.key}-idNumber`]} placeholder="13-digit ID number"
                />
                <TextField
                  label="Date of Birth" name={`dep-dob-${dep.key}`} type="date" value={dep.dob}
                  onChange={(_n, v) => updateDependant(dep.key, 'dob', v)}
                  required error={errors[`dependant-${dep.key}-dob`]}
                />
                <SelectField
                  label="Relationship" name={`dep-relationship-${dep.key}`} value={dep.relationship}
                  onChange={(_n, v) => updateDependant(dep.key, 'relationship', v)}
                  options={RELATIONSHIP_OPTIONS}
                  required error={errors[`dependant-${dep.key}-relationship`]}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addDependant}
          className="print:hidden flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
        >
          <Plus size={16} /> Add Dependant
        </button>
      </div>

      {/* Banking Details */}
      <div ref={sectionRefs.banking} className="bg-white rounded-3xl shadow-sm border border-border p-6 md:p-10 print:shadow-none print:border-0">
        <SectionHeader icon={Landmark} step={5} title="Banking Details (Debit Order)" desc="Your own bank account details for the monthly premium debit order." />
        <div className="grid md:grid-cols-2 gap-5">
          <SelectField label="Bank Name" name="bankName" value={form.bankName} onChange={handleFieldChange} options={BANK_OPTIONS} required error={errors.bankName} />
          <TextField label="Account Holder" name="accountHolder" value={form.accountHolder} onChange={handleFieldChange} required error={errors.accountHolder} />
          <TextField label="Account Number" name="accountNumber" value={form.accountNumber} onChange={handleFieldChange} required error={errors.accountNumber} />
          <TextField label="Branch Code" name="branchCode" value={form.branchCode} onChange={handleFieldChange} required error={errors.branchCode} />
          <SelectField label="Account Type" name="accountType" value={form.accountType} onChange={handleFieldChange} options={ACCOUNT_TYPE_OPTIONS} required error={errors.accountType} />
          <SelectField label="Preferred Debit Order Date" name="debitDate" value={form.debitDate} onChange={handleFieldChange} options={DEBIT_DATE_OPTIONS} required error={errors.debitDate} />
        </div>
      </div>

      {/* Supporting Documents */}
      <div ref={sectionRefs.documents} className="bg-white rounded-3xl shadow-sm border border-border p-6 md:p-10 print:shadow-none print:border-0 print:hidden">
        <SectionHeader icon={FileUp} step={6} title="Supporting Documents" desc="Upload clear copies or photos (PDF, JPG or PNG, max 5MB each)." />
        <div className="grid md:grid-cols-2 gap-5">
          <FileField label="South African ID Copy" name="idCopy" file={files.idCopy} onChange={handleFileChange} required error={errors.idCopy} />
          <FileField label="Proof of Residence" name="proofOfResidence" file={files.proofOfResidence} onChange={handleFileChange} required error={errors.proofOfResidence} />
          <FileField label="Bank Confirmation Letter" name="bankConfirmation" file={files.bankConfirmation} onChange={handleFileChange} required error={errors.bankConfirmation} />
          <FileField label="Death Certificate" name="deathCertificate" file={files.deathCertificate} onChange={handleFileChange} error={errors.deathCertificate} hint="Only required for claims, where applicable." />
        </div>
      </div>

      {/* Declaration */}
      <div ref={sectionRefs.declaration} className="bg-white rounded-3xl shadow-sm border border-border p-6 md:p-10 print:shadow-none print:border-0">
        <SectionHeader icon={ShieldCheck} step={7} title="Declaration" desc="Please confirm before submitting your application." />
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={declaration}
            onChange={(e) => {
              setDeclaration(e.target.checked);
              setErrors((prev) => {
                const next = { ...prev };
                delete next.declaration;
                return next;
              });
            }}
            className="mt-1 w-5 h-5 rounded border-border text-secondary focus:ring-secondary/50 shrink-0"
          />
          <span className="text-sm text-muted-foreground leading-relaxed">
            I declare that the information provided is true and correct, and I agree to the Terms &amp; Conditions of
            SIYAHLUMA FUNERAL DIRECTORS. <span className="text-secondary">*</span>
          </span>
        </label>
        {errors.declaration && <p className="text-xs text-red-600 mt-2">{errors.declaration}</p>}
      </div>

      {/* Form Actions */}
      <div className="print:hidden flex flex-col sm:flex-row gap-4 justify-center pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send size={16} /> Submit Application
            </>
          )}
        </button>
        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-muted text-primary font-medium hover:bg-primary hover:text-white transition-colors"
        >
          <Download size={16} /> Save as PDF
        </button>
        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-primary font-medium hover:border-primary transition-colors"
        >
          <Printer size={16} /> Print Application
        </button>
      </div>
      <p className="print:hidden text-center text-xs text-muted-foreground -mt-8">
        Tip: For "Save as PDF", choose "Save as PDF" as the destination in the print dialog that opens.
      </p>
    </form>
  );
}
