
import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";
import "./IToIX.css";

const preAdmissionSteps = [
  "Submit the duly completed registration form at the school office.",
  "Attach a medical fitness certificate.",
  "Provide a photocopy of the latest marksheet or result.",
  "Provide a photocopy of the child's birth certificate and Aadhaar card.",
  "Submit a caste certificate for reserved categories, where applicable.",
  "Attach any other relevant credentials or certificates.",
];

const postAdmissionSteps = [
  {
    title: "Confirm your admission",
    description:
      "Parents of selected students receive an official phone call confirming admission.",
  },
  {
    title: "Complete the fee payment",
    description:
      "Deposit the applicable fee within seven days of admission confirmation, as stated in the school's admission guidance.",
  },
  {
    title: "Complete admission documentation",
    description:
      "Contact the Admissions Office to complete the admission form and submit the required documents.",
  },
  {
    title: "Read and sign the admission form",
    description:
      "Both parents should carefully read and sign the form, including the school's rules and regulations.",
  },
  {
    title: "Receive school information",
    description:
      "Parents are informed about orientation, the school calendar, uniform, book list and schedule.",
  },
];

const resources = [
  {
    title: "Online Enquiry",
    description:
      "Share your child's details to begin an admission enquiry.",
    icon: ClipboardCheck,
    href:  "/online-enquiry-i-to-ix",
    action: "Open enquiry",
  },
  {
    title: "Prospectus 2027–28",
    description:
      "Explore the school, its learning environment and facilities.",
    icon: BookOpen,
    href: "/Prospectus-2027-28.pdf",
    action: "View prospectus",
  },
  {
    title: "Fee-Structure-Classes-UKG-I-and-II",
    description:
      "Find the current class-wise fee documents for the 2027–28 session.",
    icon: FileText,
    href: "/Fee-Structure-Classes-UKG-I-and-II.pdf",
    action: "View fee details",
  },

   {
    title: "Fee-Structure-Classes-III-and-IV",
    description:
      "Find the current class-wise fee documents for the 2027–28 session.",
    icon: FileText,
    href: "/Fee-Structure-Classes-III-and-IV.pdf",
    action: "View fee details",
  },

     {
    title: "Fee-Structure-Classes-V-to-VII",
    description:
      "Find the current class-wise fee documents for the 2027–28 session.",
    icon: FileText,
    href: "/Fee-Structure-Classes-V-to-VII.pdf",
    action: "View fee details",
  },

       {
    title: "Fee-Structure-Classes-VIII-and-X",
    description:
      "Find the current class-wise fee documents for the 2027–28 session.",
    icon: FileText,
    href: "/Fee-Structure-Classes-VIII-and-X.pdf",
    action: "View fee details",
  },

{
  title: "Entrance Exam Syllabus",
  description:
    "Explore entrance examination syllabus separately for Classes I to IX.",
  icon: GraduationCap,
  href: "/entrance-exam-syllabus",
  action: "Choose your class",
},
];

function IToIXHero() {
  return (
    <section className="itx-hero">
      <div className="itx-hero-orb itx-hero-orb-one" />
      <div className="itx-hero-orb itx-hero-orb-two" />

      <div className="itx-hero-content">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="itx-kicker">
            <Sparkles size={14} />
            ADMISSIONS · SESSION 2027–28
          </span>

          <h1>
            A journey of growth.
            <br />
            <em>A future of possibilities.</em>
          </h1>

          <p>
            Every learner has a unique story. Begin the next chapter at
            The Emerald Heights World School.
          </p>

          <div className="itx-hero-actions">
            <a className="itx-btn itx-btn-gold" href="#itx-process">
              Explore admission process <ArrowRight size={17} />
            </a>
            <a className="itx-hero-text-link" href="#itx-resources">
              Helpful resources <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="itx-hero-bottom">
          <span>THE EMERALD HEIGHTS WORLD SCHOOL</span>
          <span className="itx-hero-divider" />
          <span>CLASSES I–IX</span>
        </div>
      </div>

      <div className="itx-hero-side-label">LEARN · DISCOVER · GROW</div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="itx-section-title">
      <SubpageEyebrow>{eyebrow}</SubpageEyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function IToIX() {
  return (
    <div className="academic-page itx-page">
      <SchoolSubpageHeader currentPage="I to IX" />

      <main>
        <IToIXHero />

        <PageReveal>
          <section className="itx-intro itx-container">
            <div className="itx-intro-label">
              <span className="itx-intro-icon">
                <GraduationCap size={23} />
              </span>
              <span>YOUR CHILD'S NEXT CHAPTER</span>
            </div>

            <div className="itx-intro-copy">
              <h2>
                A thoughtful beginning.
                <br />
                A strong foundation for tomorrow.
              </h2>
              <p>
                Thank you for your interest in The Emerald Heights World
                School. We look forward to receiving your application and
                getting to know your child through the admission process.
                Please review the steps and document requirements below
                before proceeding.
              </p>
            </div>
          </section>
        </PageReveal>

        <section className="itx-process-section" id="itx-process">
          <div className="itx-container">
            <PageReveal>
              <SectionTitle
                eyebrow="THE ADMISSION JOURNEY"
                title="A clear path, every step of the way."
                description="Review the pre-admission requirements and understand what follows after admission confirmation."
              />
            </PageReveal>

            <div className="itx-process-grid">
              <PageReveal>
                <article className="itx-process-card">
                  <div className="itx-card-topline">
                    <span className="itx-card-icon">
                      <ClipboardCheck size={23} />
                    </span>
                    <span className="itx-card-index">01 / PRE-ADMISSION</span>
                  </div>

                  <h3>Before you apply</h3>
                  <p className="itx-card-description">
                    Prepare the registration form and the following
                    supporting documents for submission at the school office.
                  </p>

                  <ul className="itx-check-list">
                    {preAdmissionSteps.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={17} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="itx-card-note">
                    <ShieldCheck size={18} />
                    <p>
                      Submit all required documents before the deadline
                      communicated by the school.
                    </p>
                  </div>
                </article>
              </PageReveal>

              <PageReveal>
                <article className="itx-process-card itx-process-card-dark">
                  <div className="itx-card-topline">
                    <span className="itx-card-icon">
                      <UserRoundCheck size={23} />
                    </span>
                    <span className="itx-card-index">02 / POST-ADMISSION</span>
                  </div>

                  <h3>After selection</h3>
                  <p className="itx-card-description">
                    Once admission is confirmed, follow the next steps
                    communicated by the Admissions Office.
                  </p>

                  <div className="itx-timeline">
                    {postAdmissionSteps.map((item, index) => (
                      <div className="itx-timeline-item" key={item.title}>
                        <span className="itx-timeline-marker">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </PageReveal>
            </div>
          </div>
        </section>

        <PageReveal>
          <section className="itx-session-band">
            <div className="itx-session-inner itx-container">
              <div className="itx-session-icon">
                <CalendarDays size={25} />
              </div>
              <div>
                <span>LOOKING AHEAD</span>
                <h2>Registrations open for the session 2027–28</h2>
                <p>
                  Contact the Admissions Office for the latest availability,
                  class eligibility and important dates.
                </p>
              </div>
              <a href="#itx-contact" className="itx-session-link">
                Contact admissions <ArrowRight size={17} />
              </a>
            </div>
          </section>
        </PageReveal>

        <section className="itx-resources-section" id="itx-resources">
          <div className="itx-container">
            <PageReveal>
              <SectionTitle
                eyebrow="ADMISSION RESOURCES"
                title="Everything you need, in one place."
                description="Explore enquiry information, fees and entrance examination guidance before taking the next step."
              />
            </PageReveal>

            <div className="itx-resource-grid">
              {resources.map((resource, index) => {
                const Icon = resource.icon;

                return (
                  <PageReveal key={resource.title}>
                    <motion.article
                      className="itx-resource-card"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="itx-resource-card-top">
                        <span className="itx-resource-icon">
                          <Icon size={23} />
                        </span>
                        <span className="itx-resource-number">
                          0{index + 1}
                        </span>
                      </div>

                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>

                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.action}
                        <ArrowUpRight size={16} />
                      </a>
                    </motion.article>
                  </PageReveal>
                );
              })}
            </div>
          </div>
        </section>

        <PageReveal>
          <section className="itx-contact-section" id="itx-contact">
            <div className="itx-contact-panel itx-container">
              <div className="itx-contact-copy">
                <SubpageEyebrow>WE'RE HERE TO HELP</SubpageEyebrow>
                <h2>
                  Have a question?
                  <br />
                  Let's talk admissions.
                </h2>
                <p>
                  For queries about class availability, required documents
                  or the admission process, please contact the school.
                </p>

                <div className="itx-contact-actions">
                  <a href="tel:7880091400" className="itx-btn itx-btn-gold">
                    <Phone size={17} /> Call admissions
                  </a>
                  <a
                    href="mailto:info@ehws.edu.in"
                    className="itx-btn itx-btn-outline"
                  >
                    <Mail size={17} /> Email us
                  </a>
                </div>
              </div>

              <div className="itx-contact-details">
                <div className="itx-contact-detail">
                  <span><Phone size={19} /></span>
                  <div>
                    <small>PHONE</small>
                    <a href="tel:7880091400">7880091400–401</a>
                  </div>
                </div>
                <div className="itx-contact-detail">
                  <span><Mail size={19} /></span>
                  <div>
                    <small>EMAIL</small>
                    <a href="mailto:info@ehws.edu.in">info@ehws.edu.in</a>
                  </div>
                </div>
                <div className="itx-contact-detail">
                  <span><MapPin size={19} /></span>
                  <div>
                    <small>VISIT THE SCHOOL</small>
                    <p>
                      Survey No. 26/1 and 27/1, Balyakheda, near Sheraton
                      Grand Palace Hotel, AB Bypass Road, Indore,
                      Madhya Pradesh 453771.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </PageReveal>
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
