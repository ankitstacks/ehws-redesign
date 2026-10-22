
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Check, CheckCircle2, FileText,
  GraduationCap, Heart, ShieldCheck, UploadCloud, UserRound,
  Users, X, Sparkles,
} from "lucide-react";
import "./NurseryEnquiryForm.css";

const steps = [
  { title: "Child", subtitle: "Personal information", icon: UserRound },
  { title: "Academics", subtitle: "School & admission", icon: GraduationCap },
  { title: "Family", subtitle: "Parents & siblings", icon: Users },
  { title: "Documents", subtitle: "Required documents", icon: FileText },
];

const initial = {
  firstName: "", lastName: "", gender: "", dob: "", dobWords: "",
  birthPlace: "", nationality: "Indian", religion: "", caste: "",
  category: "General", address: "", phone: "", email: "",
  childPhoto: null, lastSchool: "", lastSchoolPlace: "", lastClass: "",
  admissionClass: "Nursery", subject: "Hindi", alumnus: "",
  hasSiblings: "No", siblings: [],
  fatherPhoto: null, fatherName: "", fatherQualification: "",
  fatherUniversity: "", fatherCollege: "", fatherSchool: "",
  fatherOccupation: "", fatherOffice: "", fatherOfficePhone: "",
  fatherMobile: "", fatherEmail: "",
  motherPhoto: null, motherName: "", motherQualification: "",
  motherUniversity: "", motherCollege: "", motherSchool: "",
  motherOccupation: "", motherOffice: "", motherOfficePhone: "",
  motherMobile: "", motherEmail: "",
  birthCertificate: null, residenceProof: null, casteCertificate: null,
  medicalCertificate: null, marksheet1: null, marksheet2: null,
  declaration: false,
};

function Field({ label, name, value, onChange, required, type = "text", placeholder = "", children, ...props }) {
  return (
    <label className="nef-field">
      <span>{label}{required && <b className="nef-required"> *</b>}</span>
      {children || (
        <input
          name={name}
          type={type}
          value={value ?? ""}
          onChange={onChange}
          required={required}
          placeholder={placeholder || `Enter ${label.toLowerCase()}`}
          {...props}
        />
      )}
    </label>
  );
}

function SelectField({ label, name, value, onChange, options, required = false }) {
  return (
    <Field label={label} name={name} value={value} onChange={onChange} required={required}>
      <select name={name} value={value ?? ""} onChange={onChange} required={required}>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </Field>
  );
}

function UploadField({ label, name, value, onChange, accept = "image/jpeg,image/png,image/gif,.pdf", hint = "Maximum file size: 3 MB" }) {
  return (
    <div className="nef-upload">
      <span className="nef-upload-label">{label}</span>
      <label className="nef-upload-box">
        <UploadCloud size={23} />
        <span>{value ? value.name : "Choose a file or click to browse"}</span>
        <small>{hint}</small>
        <input
          type="file"
          name={name}
          accept={accept}
          onChange={(event) => onChange(name, event.target.files?.[0] || null)}
        />
      </label>
    </div>
  );
}

function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="nef-section-heading">
      <span className="nef-section-number">{number}</span>
      <div><h2>{title}</h2><p>{subtitle}</p></div>
    </div>
  );
}

export default function NurseryEnquiryForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((old) => ({ ...old, [name]: type === "checkbox" ? checked : value }));
    setErrors((old) => ({ ...old, [name]: "" }));
  };

  const updateFile = (name, file) => {
    if (file && file.size > 3 * 1024 * 1024) {
      setErrors((old) => ({ ...old, [name]: "File size must be under 3 MB." }));
      return;
    }
    setForm((old) => ({ ...old, [name]: file }));
    setErrors((old) => ({ ...old, [name]: "" }));
  };

  const validateStep = () => {
    const requiredByStep = [
      ["firstName", "lastName", "gender", "dob", "address", "phone", "email"],
      ["admissionClass"],
      ["fatherName", "fatherMobile", "fatherEmail", "motherName", "motherMobile", "motherEmail"],
      ["declaration"],
    ];
    const nextErrors = {};
    requiredByStep[step].forEach((key) => {
      const value = form[key];
      if (key === "declaration" ? !value : !String(value || "").trim()) {
        nextErrors[key] = key === "declaration"
          ? "Please accept the declaration to continue."
          : "This field is required.";
      }
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    ["fatherEmail", "motherEmail"].forEach((key) => {
      if (form[key] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form[key])) {
        nextErrors[key] = "Enter a valid email address.";
      }
    });
    ["phone", "fatherMobile", "motherMobile"].forEach((key) => {
      if (form[key] && !/^[0-9+\-\s]{8,15}$/.test(form[key])) {
        nextErrors[key] = "Enter a valid phone number.";
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setStep((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addSibling = () => setForm((old) => ({
    ...old,
    siblings: [...old.siblings, { name: "", age: "", className: "", school: "" }],
  }));

  const removeSibling = (index) => setForm((old) => ({
    ...old, siblings: old.siblings.filter((_, i) => i !== index),
  }));

  const updateSibling = (index, key, value) => setForm((old) => ({
    ...old,
    siblings: old.siblings.map((sibling, i) => i === index ? { ...sibling, [key]: value } : sibling),
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateStep()) return;
    // Frontend only: connect a secure backend before accepting real applications.
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const parentFields = (prefix, title) => (
    <>
      <div className="nef-parent-title"><span>{title}</span><small>Required details are marked with *</small></div>
      <div className="nef-grid">
        <UploadField label={`${title} photo`} name={`${prefix}Photo`} value={form[`${prefix}Photo`]} onChange={updateFile} accept="image/jpeg,image/png" hint="JPG/PNG · Under 1 MB · Passport-size photo" />
        <Field label="Full name" name={`${prefix}Name`} value={form[`${prefix}Name`]} onChange={update} required />
        <Field label="Academic qualification" name={`${prefix}Qualification`} value={form[`${prefix}Qualification`]} onChange={update} />
        <Field label="University" name={`${prefix}University`} value={form[`${prefix}University`]} onChange={update} />
        <Field label="Last college attended" name={`${prefix}College`} value={form[`${prefix}College`]} onChange={update} />
        <Field label="Last school attended" name={`${prefix}School`} value={form[`${prefix}School`]} onChange={update} />
        <Field label="Occupation" name={`${prefix}Occupation`} value={form[`${prefix}Occupation`]} onChange={update} />
        <Field label="Office address" name={`${prefix}Office`} value={form[`${prefix}Office`]} onChange={update} />
        <Field label="Office phone" name={`${prefix}OfficePhone`} value={form[`${prefix}OfficePhone`]} onChange={update} type="tel" />
        <Field label="Mobile number" name={`${prefix}Mobile`} value={form[`${prefix}Mobile`]} onChange={update} type="tel" required maxLength={15} />
        <Field label="Email address" name={`${prefix}Email`} value={form[`${prefix}Email`]} onChange={update} type="email" required />
      </div>
      {errors[`${prefix}Name`] && <p className="nef-error">{errors[`${prefix}Name`]}</p>}
      {errors[`${prefix}Mobile`] && <p className="nef-error">{errors[`${prefix}Mobile`]}</p>}
      {errors[`${prefix}Email`] && <p className="nef-error">{errors[`${prefix}Email`]}</p>}
    </>
  );

  if (submitted) {
    return (
      <main className="nef-page">
        <div className="nef-success">
          <span className="nef-success-icon"><CheckCircle2 size={48} /></span>
          <span className="nef-kicker">ENQUIRY FORM</span>
          <h1>Thank you, {form.firstName}.</h1>
          <p>Your form has passed the frontend checks. Online submission is not yet connected to the school server, so your information has <strong>not been sent or saved</strong>.</p>
          <button className="nef-primary-btn" onClick={() => { setSubmitted(false); setStep(0); }}>Review form <ArrowLeft size={17} /></button>
          <Link className="nef-back-link" to="/nur-lkg-ukg">Return to admissions page</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="nef-page">
      <header className="nef-topbar">
        <Link to="/nur-lkg-ukg" className="nef-back-link"><ArrowLeft size={16} /> Back to admissions</Link>
        <div className="nef-secure"><ShieldCheck size={17} /> Admissions enquiry</div>
      </header>

      <section className="nef-hero">
        <div className="nef-hero-glow" />
        <span className="nef-kicker"><Sparkles size={14} /> BEGIN THEIR JOURNEY</span>
        <h1>A beautiful beginning<br /><em>starts here.</em></h1>
        <p>Nursery · LKG · UKG</p>
        <div className="nef-hero-rule"><span /></div>
        <small>THE EMERALD HEIGHTS WORLD SCHOOL · INDORE</small>
      </section>

      <div className="nef-notice">
        <ShieldCheck size={20} />
        <p><strong>Online enquiry form</strong><br />This enquiry collects information about your child. It is not a registration form and does not guarantee admission.</p>
      </div>

      <div className="nef-layout">
        <aside className="nef-sidebar">
          <span className="nef-sidebar-label">YOUR APPLICATION</span>
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <button key={item.title} type="button" className={`nef-step ${index === step ? "active" : ""} ${index < step ? "complete" : ""}`} onClick={() => index < step && setStep(index)}>
                <span className="nef-step-icon">{index < step ? <Check size={17} /> : <Icon size={17} />}</span>
                <span><strong>{item.title}</strong><small>{item.subtitle}</small></span>
                {index === step && <span className="nef-step-dot" />}
              </button>
            );
          })}
          <div className="nef-sidebar-note"><Heart size={18} /><p>Every great journey begins with a little curiosity.</p></div>
        </aside>

        <form className="nef-form" onSubmit={handleSubmit} noValidate>
          <div className="nef-form-top">
            <span>STEP {step + 1} OF {steps.length}</span>
            <span>{Math.round(((step + 1) / steps.length) * 100)}% complete</span>
          </div>
          <div className="nef-progress"><span style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>

          {step === 0 && (
            <section>
              <SectionHeading number="01" title="Child’s personal information" subtitle="Tell us a little about your little one." />
              <div className="nef-grid">
                <Field label="First name" name="firstName" value={form.firstName} onChange={update} required />
                <Field label="Last name" name="lastName" value={form.lastName} onChange={update} required />
                <SelectField label="Gender" name="gender" value={form.gender} onChange={update} required options={["", "Male", "Female", "Other"]} />
                <Field label="Date of birth" name="dob" value={form.dob} onChange={update} required type="date" />
                <Field label="Date of birth in words" name="dobWords" value={form.dobWords} onChange={update} placeholder="e.g. First January Two Thousand Twenty-Three" />
                <Field label="Place of birth" name="birthPlace" value={form.birthPlace} onChange={update} />
                <Field label="Nationality" name="nationality" value={form.nationality} onChange={update} />
                <Field label="Religion" name="religion" value={form.religion} onChange={update} />
                <Field label="Caste (if applicable)" name="caste" value={form.caste} onChange={update} />
                <SelectField label="Category" name="category" value={form.category} onChange={update} options={["General", "SC", "ST", "OBC"]} />
                <Field label="Primary phone number" name="phone" value={form.phone} onChange={update} required type="tel" maxLength={15} />
                <Field label="Email address" name="email" value={form.email} onChange={update} required type="email" />
                <label className="nef-field nef-full"><span>Residential address <b className="nef-required">*</b></span><textarea name="address" value={form.address} onChange={update} required rows={3} placeholder="House / street, city, state, PIN code" /></label>
                <div className="nef-full"><UploadField label="Child’s passport-size photo" name="childPhoto" value={form.childPhoto} onChange={updateFile} accept="image/jpeg,image/png,image/gif" hint="JPG, PNG or GIF · Under 1 MB" />{errors.childPhoto && <p className="nef-error">{errors.childPhoto}</p>}</div>
              </div>
              {["firstName","lastName","gender","dob","address","phone","email"].map((key) => errors[key] && <p key={key} className="nef-error">{key}: {errors[key]}</p>)}
            </section>
          )}

          {step === 1 && (
            <section>
              <SectionHeading number="02" title="Academic information" subtitle="Help us understand your child’s learning journey." />
              <div className="nef-grid">
                <Field label="Last school attended" name="lastSchool" value={form.lastSchool} onChange={update} />
                <Field label="Place of last school" name="lastSchoolPlace" value={form.lastSchoolPlace} onChange={update} />
                <Field label="Last class attended" name="lastClass" value={form.lastClass} onChange={update} />
                <SelectField label="Class seeking admission" name="admissionClass" value={form.admissionClass} onChange={update} required options={["Nursery", "LKG", "UKG"]} />
              </div>
              {errors.admissionClass && <p className="nef-error">{errors.admissionClass}</p>}
              <div className="nef-subsection">
                <h3>Language preference</h3>
                <p className="nef-help">Select a subject preference, where applicable.</p>
                <div className="nef-choice-row">
                  {["Hindi", "French"].map((subject) => <label key={subject} className={`nef-choice ${form.subject === subject ? "selected" : ""}`}><input type="radio" name="subject" value={subject} checked={form.subject === subject} onChange={update} /><span>{subject}</span></label>)}
                </div>
              </div>
              <div className="nef-subsection">
                <h3>Alumni connection</h3>
                <p className="nef-help">Is either parent an alumnus of The Emerald Heights International School?</p>
                <div className="nef-choice-row">
                  {["Yes", "No"].map((answer) => <label key={answer} className={`nef-choice ${form.alumnus === answer ? "selected" : ""}`}><input type="radio" name="alumnus" value={answer} checked={form.alumnus === answer} onChange={update} /><span>{answer}</span></label>)}
                </div>
              </div>
            </section>
          )}

          {step === 2 && (
            <section>
              <SectionHeading number="03" title="Family information" subtitle="We’d love to know more about your family." />
              <div className="nef-subsection">
                <h3>Siblings</h3>
                <p className="nef-help">Does your child have a brother or sister?</p>
                <div className="nef-choice-row">
                  {["Yes", "No"].map((answer) => <label key={answer} className={`nef-choice ${form.hasSiblings === answer ? "selected" : ""}`}><input type="radio" name="hasSiblings" value={answer} checked={form.hasSiblings === answer} onChange={(event) => { update(event); if (event.target.value === "No") setForm((old) => ({ ...old, siblings: [] })); }} /><span>{answer}</span></label>)}
                </div>
                {form.hasSiblings === "Yes" && (
                  <div className="nef-siblings">
                    {form.siblings.map((sibling, index) => (
                      <div className="nef-sibling-card" key={index}>
                        <div className="nef-sibling-head"><strong>Sibling {index + 1}</strong><button type="button" onClick={() => removeSibling(index)} aria-label="Remove sibling"><X size={16} /></button></div>
                        <div className="nef-grid">
                          {[["name","Name"],["age","Age"],["className","Class"],["school","School"]].map(([key,label]) => <Field key={key} label={label} name={key} value={sibling[key]} onChange={(event) => updateSibling(index, key, event.target.value)} />)}
                        </div>
                      </div>
                    ))}
                    <button type="button" className="nef-secondary-btn" onClick={addSibling}>+ Add sibling</button>
                  </div>
                )}
              </div>
              <div className="nef-parent-block">{parentFields("father", "Father’s particulars")}</div>
              <div className="nef-parent-block">{parentFields("mother", "Mother’s particulars")}</div>
            </section>
          )}

          {step === 3 && (
            <section>
              <SectionHeading number="04" title="Documents & declaration" subtitle="Attach the available documents for enquiry records." />
              <div className="nef-document-note"><FileText size={20} /><p>PDF, JPG or PNG files are accepted. Each file must be 3 MB or less. Please upload only documents you are authorised to share.</p></div>
              <div className="nef-doc-grid">
                <UploadField label="Birth certificate" name="birthCertificate" value={form.birthCertificate} onChange={updateFile} />
                <UploadField label="Residence address proof" name="residenceProof" value={form.residenceProof} onChange={updateFile} />
                <UploadField label="Caste certificate (if applicable)" name="casteCertificate" value={form.casteCertificate} onChange={updateFile} />
                <UploadField label="Medical fitness certificate" name="medicalCertificate" value={form.medicalCertificate} onChange={updateFile} />
                <UploadField label="Previous year’s marksheet 1" name="marksheet1" value={form.marksheet1} onChange={updateFile} />
                <UploadField label="Previous year’s marksheet 2 (optional)" name="marksheet2" value={form.marksheet2} onChange={updateFile} />
              </div>
              {Object.entries(errors).filter(([, message]) => message).map(([key,message]) => <p className="nef-error" key={key}>{message}</p>)}
              <label className={`nef-declaration ${errors.declaration ? "nef-invalid" : ""}`}>
                <input type="checkbox" name="declaration" checked={form.declaration} onChange={update} />
                <span>I hereby certify that the information provided above is true and correct to the best of my knowledge.</span>
              </label>
              {errors.declaration && <p className="nef-error">{errors.declaration}</p>}
              <p className="nef-privacy"><ShieldCheck size={17} /> Your child’s information should be handled securely. This demo form does not transmit or store submitted data.</p>
            </section>
          )}

          <div className="nef-form-actions">
            {step > 0 ? <button type="button" className="nef-secondary-btn" onClick={goBack}><ArrowLeft size={17} /> Previous</button> : <span className="nef-required-note">* Required fields</span>}
            {step < steps.length - 1 ? <button type="button" className="nef-primary-btn" onClick={goNext}>Continue <ArrowRight size={17} /></button> : <button type="submit" className="nef-primary-btn">Review enquiry <ArrowRight size={17} /></button>}
          </div>
        </form>
      </div>

      <footer className="nef-footer">
        <div><span className="nef-footer-mark">EH</span><p><strong>THE EMERALD HEIGHTS WORLD SCHOOL</strong><br />Nurturing potential. Inspiring futures.</p></div>
        <p>Questions? <a href="mailto:info@ehws.edu.in">info@ehws.edu.in</a> · <a href="tel:7880091400">7880091400</a></p>
      </footer>
    </main>
  );
}
