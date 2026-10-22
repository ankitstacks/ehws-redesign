
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  GraduationCap,
  Heart,
  Leaf,
  Sparkles,
  Trophy,
} from "lucide-react";

import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";

import "./Introduction.css";

const pillars = [
  {
    number: "01",
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Building strong foundations through curiosity, meaningful learning and a commitment to excellence.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Character & Values",
    description:
      "Nurturing empathy, integrity, responsibility and respect for the world around us.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Beyond the Classroom",
    description:
      "Making room for sports, creativity, collaboration and the discovery of individual talents.",
  },
  {
    number: "04",
    icon: Compass,
    title: "A Global Perspective",
    description:
      "Encouraging independent thinking, leadership and an understanding of our interconnected world.",
  },
];

const experiences = [
  {
    number: "01",
    label: "LEARN",
    title: "Knowledge with purpose.",
    description:
      "We encourage learners to ask questions, explore ideas and develop the confidence to think independently.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    alt: "Students learning in a classroom",
  },
  {
    number: "02",
    label: "DISCOVER",
    title: "Potential without limits.",
    description:
      "Every learner deserves opportunities to discover their interests, strengthen their abilities and find their own path.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=85",
    alt: "Students exploring and learning",
  },
  {
    number: "03",
    label: "GROW",
    title: "Character for life.",
    description:
      "Education also means learning to work together, care for others and take responsibility for our choices.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85",
    alt: "Students participating together",
  },
];

function IntroHero() {
  return (
    <section className="introduction-hero">
      <div className="introduction-hero-image">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90"
          alt="Students learning in a classroom"
          fetchPriority="high"
        />
      </div>

      <div className="introduction-hero-overlay" />
      <div className="introduction-hero-rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="introduction-hero-content">
        <motion.div
          className="introduction-breadcrumb"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
          <span>/</span>
          <strong>Introduction</strong>
        </motion.div>

        <motion.div
          className="introduction-hero-copy"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12 }}
        >
          <SubpageEyebrow number="01" label="A PLACE TO LEARN, LIVE & GROW" light />

          <p className="introduction-hero-kicker">
            An education shaped by possibility.
          </p>

          <h1>
            Education that
            <br />
            <em>shapes tomorrow.</em>
          </h1>

          <p className="introduction-hero-description">
            A learning community built around possibility, character and the
            belief that every child has something remarkable to discover.
          </p>

          <div className="introduction-hero-actions">
            <a href="#introduction" className="introduction-button introduction-button-gold">
              Discover our school <ArrowDown size={17} />
            </a>

            <Link to="/our-inspiration" className="introduction-text-link">
              Our Inspiration <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>

        <div className="introduction-hero-bottom">
          <span>INDORE, MADHYA PRADESH, INDIA</span>
          <a href="#introduction">
            SCROLL TO EXPLORE <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function IntroductionStory() {
  return (
    <section className="introduction-section introduction-story" id="introduction">
      <div className="introduction-container introduction-story-grid">
        <PageReveal className="introduction-story-visual">
          <div className="introduction-story-image">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1300&q=85"
              alt="Young learners discovering new possibilities"
              loading="lazy"
            />
          </div>

          <div className="introduction-image-index">
            <span>EHWS</span>
            <span>01 — OUR STORY</span>
          </div>

          <div className="introduction-image-note">
            <Sparkles size={18} />
            <span>Learning for life</span>
          </div>
        </PageReveal>

        <PageReveal className="introduction-story-copy" delay={0.12}>
          <SubpageEyebrow number="02" label="WELCOME TO EMERALD HEIGHTS" />

          <h2>
            More than a school.
            <br />
            <em>A world of possibility.</em>
          </h2>

          <p>
            The Emerald Heights World School is a K–12 co-educational day school
            at Baliyakheda in Indore, Madhya Pradesh. It aims to offer a
            learning experience shaped by ambition, opportunity and holistic
            development.
          </p>

          <p>
            The school draws inspiration from the educational philosophy of
            Sri Aurobindo and The Mother. This foundation brings together
            academic growth, values, creativity, co-curricular engagement
            and sport.
          </p>

          <p>
            Our aspiration is to help learners become thoughtful,
            self-motivated individuals who recognise their strengths and
            contribute positively to the world around them.
          </p>

          <Link to="/our-inspiration" className="introduction-inline-link">
            Discover the vision behind our school <ArrowUpRight size={17} />
          </Link>
        </PageReveal>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="introduction-section introduction-philosophy" id="philosophy">
      <div className="introduction-container">
        <PageReveal className="introduction-philosophy-heading">
          <SubpageEyebrow number="03" label="WHAT GUIDES US" light />

          <h2>
            Helping every learner
            <br />
            <em>become their best self.</em>
          </h2>

          <p>
            A balanced educational experience gives young people the knowledge,
            character and confidence to navigate a changing world.
          </p>
        </PageReveal>

        <div className="introduction-pillar-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <PageReveal
                key={pillar.number}
                className="introduction-pillar-card"
                delay={index * 0.08}
              >
                <div className="introduction-pillar-top">
                  <span>{pillar.number}</span>
                  <Icon size={26} strokeWidth={1.4} />
                </div>

                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>

                <span className="introduction-pillar-bottom">
                  <Leaf size={17} />
                </span>
              </PageReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LearningSection() {
  const [active, setActive] = useState(0);
  const experience = experiences[active];

  return (
    <section className="introduction-section introduction-learning" id="learning">
      <div className="introduction-container">
        <PageReveal className="introduction-learning-heading">
          <div>
            <SubpageEyebrow number="04" label="LEARNING IN MANY DIMENSIONS" />

            <h2>
              Every child has
              <br />
              <em>a story to unfold.</em>
            </h2>
          </div>

          <p>
            Education extends beyond a textbook. It lives in questions,
            relationships, discovery and the courage to try something new.
          </p>
        </PageReveal>

        <div className="introduction-experience-layout">
          <div className="introduction-experience-tabs" role="tablist" aria-label="Learning experiences">
            {experiences.map((item, index) => (
              <button
                type="button"
                role="tab"
                key={item.number}
                className={`introduction-experience-tab ${
                  active === index ? "is-active" : ""
                }`}
                onClick={() => setActive(index)}
                aria-selected={active === index}
              >
                <span className="introduction-experience-number">{item.number}</span>

                <span className="introduction-experience-tab-copy">
                  <small>{item.label}</small>
                  <strong>{item.title}</strong>
                </span>

                <ArrowUpRight size={19} />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={experience.number}
              role="tabpanel"
              className="introduction-experience-feature"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className="introduction-experience-image">
                <img
                  src={experience.image}
                  alt={experience.alt}
                  loading="lazy"
                />
                <span>{experience.number} / 03</span>
              </div>

              <div className="introduction-experience-description">
                <span>{experience.label} WITH PURPOSE</span>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CampusSection() {
  return (
    <section className="introduction-campus" id="campus">
      <div className="introduction-campus-image">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2200&q=85"
          alt="A school environment for learning and growth"
          loading="lazy"
        />
      </div>

      <div className="introduction-campus-overlay" />

      <div className="introduction-container introduction-campus-inner">
        <PageReveal className="introduction-campus-copy">
          <SubpageEyebrow number="05" label="ROOTED IN INDORE" light />

          <h2>
            Room to explore.
            <br />
            <em>Space to grow.</em>
          </h2>

          <p>
            Set in Baliyakheda, Indore, The Emerald Heights World School
            aspires to provide an environment where learners can grow
            intellectually, physically and socially.
          </p>

          <div className="introduction-campus-location">
            <span className="introduction-location-icon">
              <GraduationCap size={24} />
            </span>

            <div>
              <strong>The Emerald Heights World School</strong>
              <span>Baliyakheda, Indore, Madhya Pradesh</span>
            </div>
          </div>

          <Link to="/our-campus" className="introduction-campus-link">
            Explore our campus <ArrowUpRight size={17} />
          </Link>
        </PageReveal>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="introduction-closing">
      <PageReveal className="introduction-closing-content">
        <span className="introduction-closing-symbol">✳</span>

        <SubpageEyebrow number="06" label="YOUR JOURNEY STARTS HERE" />

        <h2>
          The future is full
          <br />
          <em>of possibility.</em>
        </h2>

        <p>
          Discover a learning community where every child is encouraged to
          explore, grow and move forward with purpose.
        </p>

        <div className="introduction-closing-actions">
          <Link to="/our-inspiration" className="introduction-button introduction-button-dark">
            Explore our inspiration <ArrowUpRight size={17} />
          </Link>

          <Link to="/#admissions" className="introduction-closing-secondary">
            Admissions enquiry <ArrowRight size={17} />
          </Link>
        </div>
      </PageReveal>
    </section>
  );
}

export default function Introduction() {
  useEffect(() => {
    document.title = "Introduction | The Emerald Heights World School";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="introduction-page">
      <SchoolSubpageHeader currentPage="Introduction" />

      <main>
        <IntroHero />
        <IntroductionStory />
        <PhilosophySection />
        <LearningSection />
        <CampusSection />
        <ClosingSection />
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
