import React from 'react';

const inputClasses = 'w-full rounded-md border border-gray-300 bg-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-forest-600';

export default function ContactForm() {
  return (
    <form className="mx-auto max-w-2xl space-y-6 rounded-lg bg-white p-8 shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="First Name"><input name="firstName" required className={inputClasses} /></Field>
        <Field label="Last Name"><input name="lastName" required className={inputClasses} /></Field>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Email"><input name="email" type="email" required className={inputClasses} /></Field>
        <Field label="Phone Number"><input name="phone" type="tel" required className={inputClasses} /></Field>
      </div>
      <Field label="Company Name"><input name="company" required className={inputClasses} /></Field>
      <Field label="Job Title"><input name="jobTitle" required className={inputClasses} /></Field>
      <Field label="Select Industry"><select name="industry" required defaultValue="" className={inputClasses}><option value="" disabled>Choose industry</option><option value="technology">Technology</option><option value="finance">Finance</option><option value="agriculture">Agriculture</option><option value="energy">Energy</option><option value="government">Government</option></select></Field>
      <Field label="Select Country"><select name="country" required defaultValue="" className={inputClasses}><option value="" disabled>Choose country</option><option value="nigeria">Nigeria</option><option value="ghana">Ghana</option><option value="united-states">United States</option><option value="united-kingdom">United Kingdom</option><option value="canada">Canada</option></select></Field>
      <Field label="Message"><textarea name="message" rows={5} required className={inputClasses} /></Field>
      <button type="submit" className="preview-primary-cta w-full">Submit</button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>{children}</div>;
}
