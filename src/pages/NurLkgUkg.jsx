
import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  GraduationCap,
  HeartHandshake,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";
import "./NurLkgUkg.css";

const admissionDetails = [
  {
    className: "Nursery",
    dates: "01 April 2023 – 31 March 2024",
    number: "01",
  },
  {
    className: "LKG",
    dates: "01 April 2022 – 31 March 2023",
    number: "02",
  },
  {
    className: "UKG",
    dates: "01 April 2021 – 31 March 2022",
    number: "03",
  },
];

const preAdmissionDocuments = [
  "Medical fitness certificate",
  "Photocopy of the child's birth certificate",
  "Photocopy of residence address proof",
];

const postAdmissionSteps = [
  {
    number: "01",
    title: "Admission confirmation",
    description:
      "Selected parents will receive an official phone call from the school.",
  },
  {
    number: "02",
    title: "Complete admission formalities",
    description:
      "Contact the Admissions Office to complete the admission form and submit the required documents. Both parents should read and sign the form.",
  },
  {
    number: "03",
    title: "Fee submission",
    description:
      "As described in the published admission guidance, the admission fee should be deposited within seven days of confirmation.",
  },
  {
    number: "04",
    title: "Prepare for school",
    description:
      "Parents will be informed about orientation, the school calendar, uniform, book list and schedule. Confirm the latest session dates with the school.",
  },
];

const resourceLinks = [
   {
    title: "Online Enquiry",
    description: "Share your child's details through our online enquiry form.",
    icon: ClipboardList,
    href: "/online-enquiry-nursery-ukg",
    action: "Open enquiry form",
  },
  
{
  title: "Prospectus",
  description: "Explore our school, learning environment, campus and Foundation School facilities in the 2027–28 prospectus.",
  icon: FileText,
  href: "/Prospectus-2027-28.pdf",
  action: "View prospectus",
},

 
{
  title: "Fee Structure",
  description: "View the Nursery and LKG fee structure for the 2027–28 academic session.",
  icon: FileText,
  href: "/Fee-Structure-Classes-Nursery-and-LKG.pdf",
  action: "View fee structure",
},

{
    title: "Medical Fitness Certificate",
    description:
      "Open the medical fitness certificate template for printing and completion by the authorised medical officer.",
    icon: ShieldCheck,
    href: "/Emerald-MEDICAL-FITNESS-CERTIFICATE-2021-22.pdf",
    action: "View certificate",
  },

   {
    title: "Newsletter 2025–26",
    description:
      "Discover school achievements, student activities, events and highlights from School Buzz 2025–26.",
    icon: FileText,
    href: "/News-Letter-First-Edition-2025-26.pdf",
    action: "Read newsletter",
  },

  
{
  title: "Entrance Exam Syllabus UKG",
  description:
    "Prepare for the 2027–28 UKG entrance examination with the official English, Hindi and Maths syllabus.",
  icon: FileText,
  href: "/Entrance-Exam-syllabus-Class-UKG-2027-28.pdf",
  action: "View UKG syllabus",
},


];

function AdmissionHero() {
  return (
    <section className="nur-hero">
      <div className="nur-hero-image" />
      <div className="nur-hero-overlay" />
      <div className="nur-hero-orb nur-hero-orb-one" />
      <div className="nur-hero-orb nur-hero-orb-two" />

      <div className="nur-container nur-hero-inner">
        <motion.div
          className="nur-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SubpageEyebrow light>
            ADMISSIONS · EARLY YEARS
          </SubpageEyebrow>

          <p className="nur-hero-kicker">
            THE EMERALD HEIGHTS WORLD SCHOOL
          </p>

          <h1>
            Little beginnings.
            <br />
            <span>Limitless possibilities.</span>
          </h1>

          <p className="nur-hero-description">
            A joyful first step into learning — where children are
            encouraged to explore, discover, make friends and grow
            with confidence.
          </p>

          <div className="nur-hero-actions">
            <a
              className="nur-button nur-button-gold"
              href="/online-enquiry-nursery-ukg"
              target="_blank"
              rel="noreferrer"
            >
              Online Enquiry <ArrowUpRight size={17} />
            </a>

            <a className="nur-hero-link" href="#eligibility">
              Explore eligibility <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="nur-hero-note"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="nur-note-icon">
            <Sparkles size={20} />
          </span>

          <span className="nur-note-label">
            ADMISSIONS INFORMATION
          </span>

          <strong>Nursery to UKG</strong>

          <span className="nur-note-bottom">
            A confident start to learning
          </span>
        </motion.div>
      </div>

      <div className="nur-hero-bottom">
        <span>THE FIRST CHAPTER OF A BIG JOURNEY</span>
        <a href="#welcome" aria-label="Scroll to admission information">
          <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="nur-section nur-welcome" id="welcome">
      <div className="nur-container nur-welcome-grid">
        <PageReveal>
          <div className="nur-welcome-visual">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85"
              alt="Young children exploring and learning"
              loading="lazy"
            />

            <div className="nur-image-caption">
              <span className="nur-caption-icon">
                <HeartHandshake size={19} />
              </span>

              <span>
                <strong>A caring start</strong>
                <small>Learning, belonging, becoming</small>
              </span>
            </div>

            <div className="nur-image-number">
              01 / EARLY YEARS
            </div>
          </div>
        </PageReveal>

        <PageReveal>
          <div className="nur-welcome-copy">
            <SubpageEyebrow>
              WELCOME TO THE EARLY YEARS
            </SubpageEyebrow>

            <h2 className="nur-heading">
              Every child has a world
              <br />
              <em>waiting to unfold.</em>
            </h2>

            <p>
              The early years are a special time for curiosity,
              confidence and discovery. We want every child's first
              steps into school to feel welcoming, encouraging and
              full of possibility.
            </p>

            <p>
              Thank you for your interest in Emerald Heights. We look
              forward to receiving your application and getting to
              know your family through the admission process.
            </p>

            <div className="nur-welcome-signoff">
              <span className="nur-signoff-line" />
              <span>THE EMERALD HEIGHTS WORLD SCHOOL</span>
            </div>
          </div>
        </PageReveal>
      </div>
    </section>
  );
}

function EligibilitySection() {
  return (
    <section
      className="nur-section nur-eligibility"
      id="eligibility"
    >
      <div className="nur-container">
        <PageReveal>
          <div className="nur-section-heading">
            <SubpageEyebrow>ADMISSION ELIGIBILITY</SubpageEyebrow>

            <h2 className="nur-heading">
              Find the right <em>starting point.</em>
            </h2>

            <p>
              Review the date-of-birth range for the class you are
              applying to and confirm eligibility with the school.
            </p>
          </div>
        </PageReveal>

        <div className="nur-eligibility-grid">
          {admissionDetails.map((item, index) => (
            <PageReveal key={item.className}>
              <motion.article
                className={`nur-eligibility-card ${
                  index === 1 ? "nur-card-featured" : ""
                }`}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.2 }}
              >
                <div className="nur-card-top">
                  <span>{item.number}</span>
                  <GraduationCap size={23} strokeWidth={1.5} />
                </div>

                <p className="nur-card-label">ADMISSION CLASS</p>
                <h3>{item.className}</h3>

                <div className="nur-date-box">
                  <CalendarDays size={19} />
                  <span>{item.dates}</span>
                </div>

                <p className="nur-card-note">
                  Date-of-birth range listed in the school's
                  published admission information.
                </p>
              </motion.article>
            </PageReveal>
          ))}
        </div>

        <div className="nur-eligibility-footnote">
          <ShieldCheck size={19} />
          <p>
            Please verify the applicable academic session and
            eligibility dates with the Admissions Office before
            submitting an application.
          </p>
        </div>
      </div>
    </section>
  );
}

function PreAdmissionSection() {
  return (
    <section className="nur-section nur-pre-admission">
      <div className="nur-container nur-pre-grid">
        <PageReveal>
          <div className="nur-pre-copy">
            <SubpageEyebrow>BEFORE YOU APPLY</SubpageEyebrow>

            <h2 className="nur-heading">
              A few things to
              <br />
              <em>prepare first.</em>
            </h2>

            <p>
              Parents are requested to submit the registration form
              at the school office along with the required documents.
            </p>

            <a
              className="nur-text-link"
              href="/online-enquiry-nursery-ukg"
              target="_blank"
              rel="noreferrer"
            >
              Visit the online enquiry page
              <ArrowUpRight size={17} />
            </a>
          </div>
        </PageReveal>

        <PageReveal>
          <div className="nur-document-panel">
            <div className="nur-document-panel-heading">
              <span className="nur-panel-icon">
                <ClipboardList size={22} />
              </span>

              <div>
                <span>YOUR CHECKLIST</span>
                <h3>Documents required</h3>
              </div>
            </div>

            <div className="nur-document-list">
              {preAdmissionDocuments.map((document, index) => (
                <div className="nur-document-item" key={document}>
                  <span className="nur-check">
                    <CheckCircle2 size={19} />
                  </span>

                  <span>{document}</span>

                  <span className="nur-document-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            <div className="nur-document-note">
              <ShieldCheck size={18} />
              <p>
                Confirm the current document checklist and submission
                deadline with the school before applying.
              </p>
            </div>
          </div>
        </PageReveal>
      </div>
    </section>
  );
}

function PostAdmissionSection() {
  return (
    <section className="nur-section nur-post-admission">
      <div className="nur-container">
        <PageReveal>
          <div className="nur-section-heading">
            <SubpageEyebrow>AFTER SELECTION</SubpageEyebrow>

            <h2 className="nur-heading">
              From confirmation to
              <br />
              <em>the first school day.</em>
            </h2>

            <p>
              An overview of the admission steps described in the
              school's published guidance.
            </p>
          </div>
        </PageReveal>

        <div className="nur-process-list">
          {postAdmissionSteps.map((step) => (
            <PageReveal key={step.number}>
              <div className="nur-process-step">
                <div className="nur-process-number">
                  {step.number}
                </div>

                <div className="nur-process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                <ArrowUpRight
                  className="nur-process-arrow"
                  size={20}
                />
              </div>
            </PageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className="nur-section nur-resources" id="resources">
      <div className="nur-container">
        <PageReveal>
          <div className="nur-resources-heading">
            <div>
              <SubpageEyebrow>HELPFUL RESOURCES</SubpageEyebrow>

              <h2 className="nur-heading">
                Everything you need
                <br />
                <em>for the next step.</em>
              </h2>
            </div>

            <p>
              Open official school resources for enquiry and
              admission information.
            </p>
          </div>
        </PageReveal>

        <div className="nur-resource-grid">
          {resourceLinks.map((resource) => {
            const Icon = resource.icon;

            return (
              <PageReveal key={resource.title}>
                <motion.a
                  className="nur-resource-card"
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <span className="nur-resource-icon">
                    <Icon size={22} />
                  </span>

                  <span className="nur-resource-title">
                    {resource.title}
                  </span>

                  <span className="nur-resource-description">
                    {resource.description}
                  </span>

                  <span className="nur-resource-action">
                    {resource.action}
                    <ArrowUpRight size={16} />
                  </span>
                </motion.a>
              </PageReveal>
            );
          })}
        </div>

        <p className="nur-resource-note">
          Resource links open the school's official website.
          Availability and document versions may change, so confirm
          the latest details directly with the school.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="nur-contact">
      <div className="nur-container nur-contact-inner">
        <PageReveal>
          <div className="nur-contact-copy">
            <SubpageEyebrow light>
              WE'RE HERE TO HELP
            </SubpageEyebrow>

            <h2>
              Have a question?
              <br />
              <em>Let's talk.</em>
            </h2>

            <p>
              For admission-related queries, contact the school
              directly. The Admissions Office can guide you through
              the next steps.
            </p>

            <div className="nur-contact-actions">
              <a
                href="tel:7880091400"
                className="nur-button nur-button-gold"
              >
                <Phone size={17} />
                Call the school
              </a>

              <a
                href="mailto:info@ehws.edu.in"
                className="nur-button nur-button-outline"
              >
                <Mail size={17} />
                Email admissions
              </a>
            </div>
          </div>
        </PageReveal>

        <PageReveal>
          <div className="nur-contact-card">
            <div className="nur-contact-card-top">
              <Users size={23} />
              <span>ADMISSIONS OFFICE</span>
            </div>

            <a href="tel:7880091400" className="nur-contact-row">
              <span className="nur-contact-row-icon">
                <Phone size={18} />
              </span>

              <span>
                <small>PHONE</small>
                <strong>7880091400-401</strong>
              </span>

              <ArrowUpRight size={17} />
            </a>

            <a
              href="mailto:info@ehws.edu.in"
              className="nur-contact-row"
            >
              <span className="nur-contact-row-icon">
                <Mail size={18} />
              </span>

              <span>
                <small>EMAIL</small>
                <strong>info@ehws.edu.in</strong>
              </span>

              <ArrowUpRight size={17} />
            </a>

            <div className="nur-contact-address">
              <span className="nur-contact-row-icon">
                <GraduationCap size={18} />
              </span>

              <p>
                Survey No. 26/1 and 27/1, Balyakheda, Near Sheraton
                Grand Palace Hotel, between Omaxe City 1 and DLF
                Garden City, AB Bypass Road, Indore, Madhya Pradesh
                – 453771.
              </p>
            </div>
          </div>
        </PageReveal>
      </div>
    </section>
  );
}

export default function NurLkgUkg() {
  useEffect(() => {
    document.title =
      "Nursery, LKG and UKG Admissions | The Emerald Heights World School";
  }, []);

  return (
    <div className="academic-page nur-admissions-page">
      <SchoolSubpageHeader currentPage="Nursery, LKG and UKG" />

      <main>
        <AdmissionHero />
        <WelcomeSection />
        <EligibilitySection />
        <PreAdmissionSection />
        <PostAdmissionSection />
        <ResourcesSection />
        <ContactSection />
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
