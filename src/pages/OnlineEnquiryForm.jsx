
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  GraduationCap,
  UserRound,
  Users,
  Upload,
} from "lucide-react";
import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";
import "./OnlineEnquiryForm.css";

const initialData = {
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  dobWords: "",
  birthPlace: "",
  nationality: "Indian",
  religion: "",
  caste: "",
  category: "",
  address: "",
  phone: "",
  email: "",
  lastSchool: "",
  schoolPlace: "",
  lastClass: "",
  admissionClass: "",
  stream: "",
  subject: "",
  alumnus: "",
  siblings: "",
  siblingName: "",
  siblingAge: "",
  siblingClass: "",
  siblingSchool: "",
  fatherName: "",
  fatherQualification: "",
  fatherUniversity: "",
  fatherCollege: "",
  fatherSchool: "",
  fatherOccupation: "",
  fatherOffice: "",
  fatherOfficePhone: "",
  fatherMobile: "",
  fatherEmail: "",
  motherName: "",
  motherQualification: "",
  motherUniversity: "",
  motherCollege: "",
  motherSchool: "",
  motherOccupation: "",
  motherOffice: "",
  motherOfficePhone: "",
  motherMobile: "",
  motherEmail: "",
};

const steps = [
  { title: "Child's Details", icon: UserRound },
  { title: "Academics", icon: GraduationCap },
  { title: "Family Details", icon: Users },
  { title: "Documents", icon: FileText },
];

function Field({ label, name, data, onChange, type = "text", required = false, placeholder = "", children }) {
  return (
    <label className="oe-field">
      <span>{label}{required && <i> *</i>}</span>
      {children || (
        <input
          type={type}
          name={name}
          value={data[name] || ""}
          onChange={onChange}
          required={required}
          placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        />
      )}
    </label>
  );
}

function SelectField({ label, name, data, onChange, options, required = false }) {
  return (
    <Field label={label} name={name} data={data} onChange={onChange} required={required}>
      <select name={name} value={data[name] || ""} onChange={onChange} required={required}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </Field>
  );
}

function UploadField({ label, name, accept, note, onChange, multiple = false }) {
  return (
    <label className="oe-upload">
      <span className="oe-upload-icon"><Upload size={21} /></span>
      <strong>{label}</strong>
      <small>{note}</small>
      <input
        type="file"
        name={name}
        accept={accept}
        multiple={multiple}
        onChange={onChange}
      />
    </label>
  );
}

export default function OnlineEnquiryForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [files, setFiles] = useState({});
  const [declaration, setDeclaration] = useState(false);
  const [notice, setNotice] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((previous) => ({ ...previous, [name]: value }));
    setNotice("");
  };

  const handleFile = (event) => {
    const { name, files: selectedFiles } = event.target;
    setFiles((previous) => ({ ...previous, [name]: Array.from(selectedFiles || []) }));
    setNotice("");
  };

  const nextStep = () => {
    if (step === 0) {
      const requiredFields = ["firstName", "lastName", "gender", "dob", "address", "phone", "email"];
      const missing = requiredFields.find((field) => !data[field].trim());
      if (missing) {
        setNotice("Please fill all required child details marked with *.");
        return;
      }
    }
    if (step === 1 && (!data.lastSchool.trim() || !data.admissionClass)) {
      setNotice("Please enter the last school and class required for admission.");
      return;
    }
    setNotice("");
    setStep((current) => Math.min(current + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitEnquiry = (event) => {
    event.preventDefault();
    if (!declaration) {
      setNotice("Please confirm the declaration before continuing.");
      return;
    }

    // Frontend-only: connect a backend/API before sending or storing this enquiry.
    setNotice(
      "Your form is ready for review, but it has not been sent to the school. Connect the enquiry API to enable submission."
    );
  };

  const renderParentFields = (prefix, title) => (
    <div className="oe-parent-block">
      <h3>{title}</h3>
      <div className="oe-form-grid">
        <Field label="Full Name" name={`${prefix}Name`} data={data} onChange={handleChange} required />
        <Field label="Academic Qualification" name={`${prefix}Qualification`} data={data} onChange={handleChange} />
        <Field label="University" name={`${prefix}University`} data={data} onChange={handleChange} />
        <Field label="Last College Attended" name={`${prefix}College`} data={data} onChange={handleChange} />
        <Field label="Last School Attended" name={`${prefix}School`} data={data} onChange={handleChange} />
        <Field label="Occupation" name={`${prefix}Occupation`} data={data} onChange={handleChange} />
        <Field label="Office Address" name={`${prefix}Office`} data={data} onChange={handleChange} />
        <Field label="Office Phone Number" name={`${prefix}OfficePhone`} data={data} onChange={handleChange} type="tel" />
        <Field label="Mobile Number" name={`${prefix}Mobile`} data={data} onChange={handleChange} type="tel" required />
        <Field label="Email Address" name={`${prefix}Email`} data={data} onChange={handleChange} type="email" />
      </div>
      <UploadField
        label={`${title} Photo`}
        name={`${prefix}Photo`}
        accept=".jpg,.jpeg,.png,.gif"
        note="Passport-size photo, 250 × 250 pixels, under 1 MB."
        onChange={handleFile}
      />
    </div>
  );

  return (
    <div className="oe-page">
      <SchoolSubpageHeader />

      <section className="oe-hero">
        <div className="oe-hero-pattern" />
        <div className="oe-hero-content">
          <PageReveal>
            <SubpageEyebrow>ADMISSIONS · SESSION 2027–28</SubpageEyebrow>
            <h1>Online Enquiry <em>Form</em></h1>
            <p>
              Begin your child's journey with The Emerald Heights World School.
              Share the details below so the admissions team can understand your enquiry.
            </p>
            <div className="oe-hero-note">
              <FileText size={17} />
              <span>This is an enquiry form, not a registration form.</span>
            </div>
          </PageReveal>
        </div>
      </section>

      <main className="oe-main">
        <div className="oe-progress-wrap">
          <div className="oe-progress-top">
            <div>
              <span className="oe-small-label">ADMISSION ENQUIRY</span>
              <h2>{steps[step].title}</h2>
            </div>
            <span className="oe-step-count">STEP {step + 1} OF {steps.length}</span>
          </div>

          <div className="oe-progress-track">
            <motion.div
              className="oe-progress-fill"
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="oe-step-list">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  type="button"
                  key={item.title}
                  className={`oe-step ${index === step ? "active" : ""} ${index < step ? "complete" : ""}`}
                  onClick={() => index < step && setStep(index)}
                >
                  <span className="oe-step-icon">
                    {index < step ? <CheckCircle2 size={19} /> : <Icon size={19} />}
                  </span>
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <form className="oe-form-card" onSubmit={submitEnquiry}>
          {step === 0 && (
            <section className="oe-form-section">
              <div className="oe-section-heading">
                <span className="oe-section-icon"><UserRound size={22} /></span>
                <div>
                  <h2>Child's Personal Information</h2>
                  <p>Tell us about the student seeking admission.</p>
                </div>
              </div>

              <div className="oe-form-grid">
                <Field label="First Name" name="firstName" data={data} onChange={handleChange} required />
                <Field label="Last Name" name="lastName" data={data} onChange={handleChange} required />
                <SelectField label="Gender" name="gender" data={data} onChange={handleChange} options={["Male", "Female"]} required />
                <Field label="Date of Birth" name="dob" data={data} onChange={handleChange} type="date" required />
                <Field label="Date of Birth in Words" name="dobWords" data={data} onChange={handleChange} />
                <Field label="Place of Birth" name="birthPlace" data={data} onChange={handleChange} />
                <Field label="Nationality" name="nationality" data={data} onChange={handleChange} />
                <Field label="Religion" name="religion" data={data} onChange={handleChange} />
                <Field label="Caste" name="caste" data={data} onChange={handleChange} />
                <SelectField label="Category" name="category" data={data} onChange={handleChange} options={["General", "SC", "ST", "OBC"]} />
                <Field label="Primary Phone Number" name="phone" data={data} onChange={handleChange} type="tel" required />
                <Field label="Email Address" name="email" data={data} onChange={handleChange} type="email" required />
                <Field label="Residential Address" name="address" data={data} onChange={handleChange} required />
              </div>

              <UploadField
                label="Child's Passport-Size Photo"
                name="childPhoto"
                accept=".jpg,.jpeg,.png,.gif"
                note="JPG, JPEG, PNG or GIF · 250 × 250 pixels · Under 1 MB"
                onChange={handleFile}
              />
            </section>
          )}

          {step === 1 && (
            <section className="oe-form-section">
              <div className="oe-section-heading">
                <span className="oe-section-icon"><GraduationCap size={22} /></span>
                <div>
                  <h2>Child's Academic Information</h2>
                  <p>Share the student's current academic background.</p>
                </div>
              </div>

              <div className="oe-form-grid">
                <Field label="Name of Last School Attended" name="lastSchool" data={data} onChange={handleChange} required />
                <Field label="Place of Last School" name="schoolPlace" data={data} onChange={handleChange} />
                <Field label="Last Class Attended" name="lastClass" data={data} onChange={handleChange} />
                <SelectField
                  label="Class in Which Admission Is Required"
                  name="admissionClass"
                  data={data}
                  onChange={handleChange}
                  options={["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]}
                  required
                />
                <SelectField
                  label="Preferred Stream (if applicable)"
                  name="stream"
                  data={data}
                  onChange={handleChange}
                  options={["Medical", "Engineering", "Management", "Humanities", "Not Applicable"]}
                />
                <SelectField
                  label="Preferred Subject (if applicable)"
                  name="subject"
                  data={data}
                  onChange={handleChange}
                  options={["Hindi", "French", "Not Applicable"]}
                />
                <SelectField
                  label="Is a Parent an Alumnus of The Emerald Heights International School?"
                  name="alumnus"
                  data={data}
                  onChange={handleChange}
                  options={["Yes", "No"]}
                />
              </div>
            </section>
          )}

          {step === 2 && (
            <section className="oe-form-section">
              <div className="oe-section-heading">
                <span className="oe-section-icon"><Users size={22} /></span>
                <div>
                  <h2>Family & Parent Information</h2>
                  <p>Provide parent details and sibling information, where applicable.</p>
                </div>
              </div>

              <div className="oe-sibling-box">
                <SelectField
                  label="Does the Child Have Any Brothers or Sisters?"
                  name="siblings"
                  data={data}
                  onChange={handleChange}
                  options={["Yes", "No"]}
                />
                {data.siblings === "Yes" && (
                  <div className="oe-form-grid oe-sibling-grid">
                    <Field label="Sibling Name" name="siblingName" data={data} onChange={handleChange} />
                    <Field label="Sibling Age" name="siblingAge" data={data} onChange={handleChange} type="number" />
                    <Field label="Sibling's Class" name="siblingClass" data={data} onChange={handleChange} />
                    <Field label="Sibling's School" name="siblingSchool" data={data} onChange={handleChange} />
                  </div>
                )}
              </div>

              {renderParentFields("father", "Father's Particulars")}
              {renderParentFields("mother", "Mother's Particulars")}
            </section>
          )}

          {step === 3 && (
            <section className="oe-form-section">
              <div className="oe-section-heading">
                <span className="oe-section-icon"><FileText size={22} /></span>
                <div>
                  <h2>Upload Child's Documents</h2>
                  <p>Attach clear copies of the relevant documents, if available.</p>
                </div>
              </div>

              <div className="oe-upload-grid">
                <UploadField label="Birth Certificate" name="birthCertificate" accept=".pdf,.jpg,.jpeg,.png" note="PDF or image · Maximum 3 MB" onChange={handleFile} />
                <UploadField label="Residence Address Proof" name="addressProof" accept=".pdf,.jpg,.jpeg,.png" note="PDF or image · Maximum 3 MB" onChange={handleFile} />
                <UploadField label="Caste Certificate" name="casteCertificate" accept=".pdf,.jpg,.jpeg,.png" note="PDF or image · Maximum 3 MB, if applicable" onChange={handleFile} />
                <UploadField label="Medical Fitness Certificate" name="medicalCertificate" accept=".pdf,.jpg,.jpeg,.png" note="Physician-issued certificate · Maximum 3 MB" onChange={handleFile} />
                <UploadField label="Previous Year's Marksheet 1" name="marksheet1" accept=".pdf,.jpg,.jpeg,.png" note="PDF or image · Maximum 3 MB" onChange={handleFile} />
                <UploadField label="Previous Year's Marksheet 2" name="marksheet2" accept=".pdf,.jpg,.jpeg,.png" note="PDF or image · Maximum 3 MB, if applicable" onChange={handleFile} />
              </div>

              <div className="oe-declaration">
                <label>
                  <input
                    type="checkbox"
                    checked={declaration}
                    onChange={(event) => {
                      setDeclaration(event.target.checked);
                      setNotice("");
                    }}
                  />
                  <span>I hereby certify that the information provided above is true and correct.</span>
                </label>
              </div>

              <div className="oe-privacy-note">
                <strong>Before you continue</strong>
                <p>
                  This page currently collects information in the browser only.
                  Submitting to the school requires a connected, authorised submission service.
                </p>
              </div>
            </section>
          )}

          {notice && (
            <div className="oe-notice" role="status">
              {notice}
            </div>
          )}

          <div className="oe-form-actions">
            <button
              type="button"
              className="oe-btn oe-btn-secondary"
              onClick={() => {
                setNotice("");
                setStep((current) => Math.max(current - 1, 0));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={step === 0}
            >
              <ArrowLeft size={17} /> Previous
            </button>

            {step < steps.length - 1 ? (
              <button type="button" className="oe-btn oe-btn-primary" onClick={nextStep}>
                Continue <ArrowRight size={17} />
              </button>
            ) : (
              <button type="submit" className="oe-btn oe-btn-primary">
                Review Enquiry <ArrowRight size={17} />
              </button>
            )}
          </div>
        </form>

        <div className="oe-help">
          <span>Need assistance with your enquiry?</span>
          <a href="tel:7880091400">Call 7880091400–401</a>
          <a href="mailto:info@ehws.edu.in">Email the admissions team</a>
        </div>
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
