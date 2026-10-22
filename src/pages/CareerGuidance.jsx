
import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Brain,
  Users,
  Globe2,
  GraduationCap,
  BookOpen,
  Target,
  Lightbulb,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  BriefcaseBusiness,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Award,
} from "lucide-react";

import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";

import "./CareerGuidance.css";

const guidanceAreas = [
  {
    number: "01",
    title: "Parent Orientation",
    label: "FAMILY & GUIDANCE",
    description:
      "Orientation sessions help parents understand evolving higher-education options, liberal arts institutions and the importance of developing skills beyond academic results.",
    icon: Users,
  },
  {
    number: "02",
    title: "Personality & Interest",
    label: "SELF-DISCOVERY",
    description:
      "Personality tests and interest inventories can help students understand their preferences, strengths and the career areas they may wish to explore.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Career Webinars",
    label: "LEARN FROM EXPERTS",
    description:
      "From Class VIII onwards, students can gain exposure to career-related webinars, university sessions and workshops covering courses and application requirements.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Test Preparation Awareness",
    label: "PREPARE WITH PURPOSE",
    description:
      "Students are introduced to information about standardised tests such as SAT, IELTS and AP, helping them understand possible requirements for future study pathways.",
    icon: BookOpen,
  },
  {
    number: "05",
    title: "Scholarship Guidance",
    label: "GLOBAL OPPORTUNITIES",
    description:
      "Students considering overseas education can receive guidance about scholarship searches, university expectations and external funding opportunities.",
    icon: Award,
  },
  {
    number: "06",
    title: "Exploring Career Paths",
    label: "FUTURE POSSIBILITIES",
    description:
      "Explore traditional and emerging fields, ask questions and learn how interests, skills and educational choices can connect to future possibilities.",
    icon: Compass,
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Discover yourself",
    description:
      "Reflect on your interests, strengths, values and the activities that make you curious.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Explore possibilities",
    description:
      "Learn about different careers, university courses, emerging fields and global opportunities.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Make informed choices",
    description:
      "Compare course requirements, subject choices, entrance tests and potential study pathways.",
    icon: Target,
  },
  {
    number: "04",
    title: "Prepare for the future",
    description:
      "Build relevant skills, seek guidance and understand the steps involved in pursuing your goals.",
    icon: GraduationCap,
  },
];

const careerPrinciples = [
  "Self-awareness before career selection",
  "Exploration of diverse academic pathways",
  "Informed conversations with parents and mentors",
  "Awareness of university and test requirements",
  "Understanding scholarships and funding options",
  "Developing skills beyond examination results",
];

function CareerHero() {
  return (
    <section className="cg-hero">
      <div className="cg-hero-image" />
      <div className="cg-hero-overlay" />
      <div className="cg-hero-glow cg-hero-glow-one" />
      <div className="cg-hero-glow cg-hero-glow-two" />

      <div className="cg-container cg-hero-inner">
        <motion.div
          className="cg-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SubpageEyebrow light>
            DISCOVER YOUR DIRECTION
          </SubpageEyebrow>

          <p className="cg-hero-school">
            THE EMERALD HEIGHTS WORLD SCHOOL
          </p>

          <h1>
            Build a life.
            <br />
            <em>Not just a resume.</em>
          </h1>

          <p className="cg-hero-description">
            The future is full of possibilities. Discover your strengths,
            explore different pathways and learn to make thoughtful
            decisions about the journey ahead.
          </p>

          <div className="cg-hero-actions">
            <a href="#cg-guidance" className="cg-button cg-button-gold">
              Explore Career Guidance
              <ArrowRight size={17} />
            </a>

            <a href="#cg-journey" className="cg-hero-text-link">
              Discover the journey
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="cg-hero-note"
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="cg-hero-note-icon">
            <Compass size={24} />
          </span>

          <span className="cg-hero-note-label">
            YOUR FUTURE, YOUR JOURNEY
          </span>

          <strong>Find your direction.</strong>

          <span className="cg-hero-note-bottom">
            Discover · Explore · Prepare
          </span>
        </motion.div>
      </div>

      <div className="cg-hero-bottom">
        <span>CAREER COUNSELLING & GUIDANCE</span>
        <a href="#cg-intro" aria-label="Scroll to career guidance">
          <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}

function CareerIntro() {
  return (
    <section className="cg-intro" id="cg-intro">
      <div className="cg-container cg-intro-grid">
        <PageReveal>
          <div className="cg-intro-visual">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
              alt="Students collaborating and discussing their future"
              loading="lazy"
            />

            <div className="cg-intro-image-shade" />

            <div className="cg-intro-image-caption">
              <span className="cg-intro-caption-icon">
                <Lightbulb size={19} />
              </span>

              <span>
                <strong>Possibility starts with curiosity.</strong>
                <small>Explore your interests and strengths</small>
              </span>
            </div>

            <span className="cg-intro-image-number">
              01 / YOUR POTENTIAL
            </span>
          </div>
        </PageReveal>

        <PageReveal>
          <div className="cg-intro-copy">
            <SubpageEyebrow>
              THE POWER OF CAREER GUIDANCE
            </SubpageEyebrow>

            <h2 className="cg-heading">
              Your future is not
              <br />
              <em>one-size-fits-all.</em>
            </h2>

            <p>
              The world of work is constantly changing. Career guidance
              helps students look beyond conventional choices, understand
              their interests and explore educational pathways that may
              suit their individual goals.
            </p>

            <p>
              At The Emerald Heights World School, the guiding philosophy
              is to build a life, not just a resume. The aim is to help
              students prepare for life beyond examinations through
              self-awareness, informed exploration and thoughtful planning.
            </p>

            <div className="cg-intro-signoff">
              <span />
              <strong>DISCOVER YOUR POTENTIAL</strong>
            </div>
          </div>
        </PageReveal>
      </div>
    </section>
  );
}

function CareerGuidanceAreas() {
  return (
    <section className="cg-areas" id="cg-guidance">
      <div className="cg-container">
        <PageReveal>
          <div className="cg-section-heading">
            <SubpageEyebrow>HOW WE SUPPORT EXPLORATION</SubpageEyebrow>

            <h2 className="cg-heading">
              Guidance for the
              <br />
              <em>road ahead.</em>
            </h2>

            <p>
              Explore the key areas that can help students and families
              make more informed decisions about education and future
              opportunities.
            </p>
          </div>
        </PageReveal>

        <div className="cg-guidance-grid">
          {guidanceAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <PageReveal key={item.number}>
                <motion.article
                  className="cg-guidance-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="cg-guidance-card-top">
                    <span className="cg-guidance-number">
                      {item.number}
                    </span>

                    <span className="cg-guidance-icon">
                      <Icon size={23} strokeWidth={1.5} />
                    </span>
                  </div>

                  <span className="cg-guidance-label">
                    {item.label}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="cg-guidance-card-bottom">
                    <span>CAREER EXPLORATION</span>
                    <ArrowUpRight size={17} />
                  </div>
                </motion.article>
              </PageReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CareerJourney() {
  return (
    <section className="cg-journey" id="cg-journey">
      <div className="cg-container cg-journey-grid">
        <PageReveal>
          <div className="cg-journey-copy">
            <SubpageEyebrow>
              FROM CURIOSITY TO CLARITY
            </SubpageEyebrow>

            <h2 className="cg-heading">
              A journey of
              <br />
              <em>informed choices.</em>
            </h2>

            <p>
              Choosing a future pathway takes time, reflection and
              information. These four steps offer a practical way to
              begin exploring possibilities.
            </p>

            <a href="#cg-contact" className="cg-text-link">
              Speak with the school
              <ArrowUpRight size={17} />
            </a>
          </div>
        </PageReveal>

        <div className="cg-journey-list">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <PageReveal key={step.number}>
                <article className="cg-journey-step">
                  <div className="cg-journey-step-number">
                    {step.number}
                  </div>

                  <div className="cg-journey-step-icon">
                    <Icon size={21} />
                  </div>

                  <div className="cg-journey-step-copy">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <ArrowUpRight
                    className="cg-journey-step-arrow"
                    size={19}
                  />
                </article>
              </PageReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CareerReadiness() {
  return (
    <section className="cg-readiness">
      <div className="cg-container cg-readiness-grid">
        <PageReveal>
          <div className="cg-readiness-visual">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Students sharing ideas and working together"
              loading="lazy"
            />

            <div className="cg-readiness-visual-caption">
              <Sparkles size={18} />
              <span>Skills for a changing world</span>
            </div>
          </div>
        </PageReveal>

        <PageReveal>
          <div className="cg-readiness-copy">
            <SubpageEyebrow>
              PREPARING FOR WHAT'S NEXT
            </SubpageEyebrow>

            <h2 className="cg-heading">
              More than marks.
              <br />
              <em>A broader perspective.</em>
            </h2>

            <p>
              Career exploration is also about understanding yourself,
              asking questions, building useful skills and learning how
              different opportunities connect with your goals.
            </p>

            <div className="cg-principles-list">
              {careerPrinciples.map((principle) => (
                <div className="cg-principle" key={principle}>
                  <CheckCircle2 size={18} />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </PageReveal>
      </div>
    </section>
  );
}

function CareerClassEight() {
  return (
    <section className="cg-class-eight">
      <div className="cg-class-eight-bg" />

      <div className="cg-container cg-class-eight-content">
        <PageReveal>
          <span className="cg-class-eight-kicker">
            <CalendarDays size={16} />
            EARLY EXPLORATION
          </span>

          <h2>
            Big questions can
            <br />
            <em>start early.</em>
          </h2>

          <p>
            The school's published career guidance information highlights
            exposure to career-related webinars and workshops from Class VIII,
            along with awareness of standardised tests such as SAT, IELTS
            and AP for students exploring relevant future pathways.
          </p>

          <div className="cg-test-pills">
            <span>SAT</span>
            <span>IELTS</span>
            <span>AP EXAMS</span>
            <span>UNIVERSITY WEBINARS</span>
          </div>

          <a href="#cg-contact" className="cg-button cg-button-gold">
            Ask About Career Guidance
            <ArrowRight size={17} />
          </a>
        </PageReveal>
      </div>
    </section>
  );
}

function CareerContact() {
  return (
    <section className="cg-contact" id="cg-contact">
      <div className="cg-container cg-contact-grid">
        <PageReveal>
          <div className="cg-contact-copy">
            <SubpageEyebrow>START A CONVERSATION</SubpageEyebrow>

            <h2 className="cg-heading">
              Every meaningful
              <br />
              <em>journey starts with a question.</em>
            </h2>

            <p>
              For information about career guidance, university pathways
              or related school initiatives, contact The Emerald Heights
              World School.
            </p>

            <a
              className="cg-button cg-button-dark"
              href="mailto:info@ehws.edu.in?subject=Career%20Guidance%20Enquiry"
            >
              Send an Enquiry
              <ArrowUpRight size={17} />
            </a>
          </div>
        </PageReveal>

        <PageReveal>
          <div className="cg-contact-card">
            <div className="cg-contact-card-heading">
              <span className="cg-contact-card-icon">
                <MessageCircle size={22} />
              </span>

              <div>
                <span>SCHOOL CONTACT</span>
                <h3>We're here to help.</h3>
              </div>
            </div>

            <a className="cg-contact-row" href="tel:7880091400">
              <span className="cg-contact-row-icon">
                <Phone size={19} />
              </span>

              <span>
                <small>PHONE</small>
                <strong>7880091400–401</strong>
              </span>

              <ArrowUpRight size={17} />
            </a>

            <a
              className="cg-contact-row"
              href="mailto:info@ehws.edu.in"
            >
              <span className="cg-contact-row-icon">
                <Mail size={19} />
              </span>

              <span>
                <small>EMAIL</small>
                <strong>info@ehws.edu.in</strong>
              </span>

              <ArrowUpRight size={17} />
            </a>

            <div className="cg-contact-address">
              <span className="cg-contact-row-icon">
                <MapPin size={19} />
              </span>

              <p>
                Survey No. 26/1 and 27/1, Balyakheda, near Sheraton
                Grand Palace Hotel, AB Bypass Road, Indore,
                Madhya Pradesh – 453771.
              </p>
            </div>

            <div className="cg-contact-card-footer">
              <BriefcaseBusiness size={17} />
              <span>THE EMERALD HEIGHTS WORLD SCHOOL</span>
            </div>
          </div>
        </PageReveal>
      </div>
    </section>
  );
}

export default function CareerGuidance() {
  useEffect(() => {
    document.title =
      "Career Guidance | The Emerald Heights World School";

    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="academic-page cg-page">
      <SchoolSubpageHeader currentPage="Career Guidance" />

      <main>
        <CareerHero />
        <CareerIntro />
        <CareerGuidanceAreas />
        <CareerJourney />
        <CareerReadiness />
        <CareerClassEight />
        <CareerContact />
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
