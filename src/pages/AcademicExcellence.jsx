
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Compass,
  GraduationCap,
  Lightbulb,
  Target,
} from "lucide-react";

import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";

import "./AcademicPages.css";

const strengths = [
  {
    number: "01",
    icon: BookOpen,
    title: "Strong Foundations",
    text: "Building a meaningful understanding of concepts, strengthening subject knowledge and developing confidence to learn.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Critical Thinking",
    text: "Encouraging learners to question, analyse information, explore possibilities and reach thoughtful conclusions.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Curiosity & Creativity",
    text: "Making space for new ideas, creative expression, thoughtful experimentation and the joy of discovery.",
  },
  {
    number: "04",
    icon: Target,
    title: "Growth & Progress",
    text: "Helping students recognise their strengths, work on challenges and develop a positive attitude towards improvement.",
  },
];

const learningStages = [
  {
    number: "01",
    title: "Understand",
    tag: "BUILD THE FOUNDATION",
    description:
      "Learners develop a clear understanding of concepts and build the knowledge needed to approach more complex ideas.",
  },
  {
    number: "02",
    title: "Explore",
    tag: "ASK BETTER QUESTIONS",
    description:
      "Questions, discussion and exploration help students look beyond memorisation and connect ideas meaningfully.",
  },
  {
    number: "03",
    title: "Apply",
    tag: "CONNECT LEARNING TO LIFE",
    description:
      "Using knowledge in different situations helps students develop confidence, problem-solving skills and independent thinking.",
  },
];

function AcademicHero() {
  return (
    <section className="academic-hero">
      <div className="academic-hero-image">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90"
          alt="Students learning and engaging in a classroom"
          fetchPriority="high"
        />
      </div>
      <div className="academic-hero-overlay" />
      <div className="academic-hero-rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="academic-hero-content">
        <motion.div
          className="academic-breadcrumb"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Academics</span>
          <span>/</span>
          <strong>Academic Excellence</strong>
        </motion.div>

        <motion.div
          className="academic-hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
        >
          <SubpageEyebrow
            number="01"
            label="THE PURSUIT OF KNOWLEDGE"
            light
          />

          <p className="academic-hero-kicker">
            A foundation for lifelong learning.
          </p>

          <h1>
            Excellence
            <br />
            <em>with purpose.</em>
          </h1>

          <p className="academic-hero-description">
            Learning that builds knowledge, nurtures curiosity and empowers
            every student to discover what they are capable of becoming.
          </p>

          <div className="academic-hero-actions">
            <a href="#academic-vision" className="academic-button academic-button-gold">
              Discover our vision <ArrowDown size={17} />
            </a>
            <Link to="/learning-approach" className="academic-text-link">
              Our learning approach <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>

        <div className="academic-hero-bottom">
          <span>LEARN WITH PURPOSE · GROW WITH CONFIDENCE</span>
          <a href="#academic-vision">
            SCROLL TO EXPLORE <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function AcademicVision() {
  return (
    <section className="academic-section academic-vision" id="academic-vision">
      <div className="academic-container academic-vision-grid">
        <PageReveal className="academic-vision-visual">
          <div className="academic-vision-image">
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1300&q=85"
              alt="Students engaged in learning"
              loading="lazy"
            />
          </div>
          <div className="academic-image-label">
            <span>EHWS</span>
            <span>KNOWLEDGE · CURIOSITY · GROWTH</span>
          </div>
          <div className="academic-image-stamp">
            <GraduationCap size={21} />
            <span>Learning for life</span>
          </div>
        </PageReveal>

        <PageReveal className="academic-vision-copy" delay={0.12}>
          <SubpageEyebrow number="02" label="OUR ACADEMIC VISION" />

          <h2>
            Knowledge that
            <br />
            <em>opens possibilities.</em>
          </h2>

          <p>
            Academic excellence is more than achieving results. It is about
            developing a strong understanding of subjects, asking meaningful
            questions and having the confidence to explore unfamiliar ideas.
          </p>

          <p>
            We believe students benefit from an educational environment that
            values intellectual curiosity, consistent effort, thoughtful
            guidance and the desire to keep learning.
          </p>

          <p>
            Our aspiration is to help each learner build the knowledge,
            independence and confidence to take the next step in their
            educational journey.
          </p>

          <Link to="/learning-approach" className="academic-inline-link">
            Discover how learning comes to life <ArrowUpRight size={17} />
          </Link>
        </PageReveal>
      </div>
    </section>
  );
}

function AcademicStrengths() {
  return (
    <section className="academic-section academic-strengths">
      <div className="academic-container">
        <PageReveal className="academic-section-heading">
          <SubpageEyebrow number="03" label="WHAT EXCELLENCE MEANS" light />

          <h2>
            More than marks.
            <br />
            <em>A mindset for life.</em>
          </h2>

          <p>
            A meaningful education supports the whole learner — from subject
            knowledge and reasoning to creativity, confidence and personal
            responsibility.
          </p>
        </PageReveal>

        <div className="academic-strength-grid">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <PageReveal
                key={item.number}
                className="academic-strength-card"
                delay={index * 0.08}
              >
                <div className="academic-strength-card-top">
                  <span>{item.number}</span>
                  <Icon size={27} strokeWidth={1.4} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <span className="academic-strength-rule" />
              </PageReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AcademicJourney() {
  return (
    <section className="academic-section academic-journey">
      <div className="academic-container">
        <PageReveal className="academic-journey-heading">
          <div>
            <SubpageEyebrow number="04" label="A JOURNEY OF GROWTH" />

            <h2>
              Learn deeply.
              <br />
              <em>Think independently.</em>
            </h2>
          </div>

          <p>
            Learning becomes more meaningful when students understand an idea,
            explore it with curiosity and find ways to apply what they know.
          </p>
        </PageReveal>

        <div className="academic-journey-list">
          {learningStages.map((stage, index) => (
            <PageReveal
              key={stage.number}
              className="academic-journey-item"
              delay={index * 0.08}
            >
              <span className="academic-journey-number">{stage.number}</span>

              <div className="academic-journey-main">
                <span>{stage.tag}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>

              <span className="academic-journey-icon">
                <ArrowUpRight size={22} />
              </span>
            </PageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademicClosing() {
  return (
    <section className="academic-closing">
      <PageReveal className="academic-closing-content">
        <span className="academic-closing-symbol">✳</span>
        <SubpageEyebrow number="05" label="THE NEXT STEP STARTS HERE" />

        <h2>
          Every question
          <br />
          <em>opens a new door.</em>
        </h2>

        <p>
          Explore an approach to education that values understanding,
          independent thought and the potential within every learner.
        </p>

        <div className="academic-closing-actions">
          <Link to="/learning-approach" className="academic-button academic-button-dark">
            Explore learning approach <ArrowUpRight size={17} />
          </Link>
          <Link to="/#admissions" className="academic-closing-link">
            Enquire now <ArrowRight size={17} />
          </Link>
        </div>
      </PageReveal>
    </section>
  );
}

export default function AcademicExcellence() {
  useEffect(() => {
    document.title = "Academic Excellence | The Emerald Heights World School";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="academic-page">
      <SchoolSubpageHeader currentPage="Academic Excellence" />

      <main>
        <AcademicHero />
        <AcademicVision />
        <AcademicStrengths />
        <AcademicJourney />
        <AcademicClosing />
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
