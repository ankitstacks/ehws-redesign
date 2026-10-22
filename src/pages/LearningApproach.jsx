
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Compass,
  FlaskConical,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Users,
} from "lucide-react";

import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";

import "./AcademicPages.css";

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Curiosity First",
    description:
      "Questions and exploration encourage learners to look deeper, make connections and develop a genuine interest in what they learn.",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Learning by Doing",
    description:
      "Practical activities and real-world connections can help students move from understanding an idea to applying it.",
  },
  {
    number: "03",
    icon: Users,
    title: "Growing Together",
    description:
      "Discussion, collaboration and shared problem-solving help learners listen to different perspectives and work towards common goals.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "The Whole Learner",
    description:
      "Personal growth, responsibility, confidence and respect are important parts of a balanced learning experience.",
  },
];

const learningModes = [
  {
    number: "01",
    label: "EXPLORE",
    title: "Start with a question.",
    description:
      "Questions invite learners to investigate ideas, notice patterns and become active participants in their education.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    alt: "Students exploring ideas in a classroom",
    icon: Lightbulb,
  },
  {
    number: "02",
    label: "EXPERIENCE",
    title: "Make ideas tangible.",
    description:
      "Activities, projects and practical exploration can connect classroom concepts with experiences beyond the textbook.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=85",
    alt: "Hands-on learning and experimentation",
    icon: FlaskConical,
  },
  {
    number: "03",
    label: "REFLECT",
    title: "Understand the journey.",
    description:
      "Reflection helps learners recognise what they understand, where they can improve and how to approach new challenges.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85",
    alt: "Students learning and working together",
    icon: Brain,
  },
];

function ApproachHero() {
  return (
    <section className="approach-hero">
      <div className="approach-hero-image">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90"
          alt="A classroom where students learn together"
          fetchPriority="high"
        />
      </div>
      <div className="approach-hero-overlay" />
      <div className="approach-hero-rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="approach-hero-content">
        <motion.div
          className="approach-breadcrumb"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Academics</span>
          <span>/</span>
          <strong>Learning Approach</strong>
        </motion.div>

        <motion.div
          className="approach-hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
        >
          <SubpageEyebrow
            number="01"
            label="THE WAY WE LEARN AND GROW"
            light
          />

          <p className="approach-hero-kicker">
            Education that looks beyond the classroom.
          </p>

          <h1>
            Learning with
            <br />
            <em>purpose.</em>
          </h1>

          <p className="approach-hero-description">
            A thoughtful approach to education that nurtures curiosity,
            independent thinking and the confidence to keep discovering.
          </p>

          <div className="approach-hero-actions">
            <a href="#approach-vision" className="approach-button approach-button-gold">
              Explore our approach <ArrowDown size={17} />
            </a>

            <Link to="/academic-excellence" className="approach-text-link">
              Academic Excellence <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>

        <div className="approach-hero-bottom">
          <span>QUESTION · DISCOVER · REFLECT · GROW</span>
          <a href="#approach-vision">
            SCROLL TO EXPLORE <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ApproachVision() {
  return (
    <section className="academic-section approach-vision" id="approach-vision">
      <div className="academic-container approach-vision-grid">
        <PageReveal className="approach-vision-copy">
          <SubpageEyebrow number="02" label="OUR LEARNING PHILOSOPHY" />

          <h2>
            Not just learning
            <br />
            <em>what to think.</em>
            <br />
            Learning how to think.
          </h2>

          <p>
            Meaningful learning encourages students to participate, ask
            questions and build their own understanding of the world around
            them.
          </p>

          <p>
            We value an educational experience in which knowledge, exploration,
            dialogue and reflection work together. The aim is to support
            learners as they become more confident, thoughtful and independent.
          </p>

          <Link to="/academic-excellence" className="approach-inline-link">
            Discover our academic vision <ArrowUpRight size={17} />
          </Link>
        </PageReveal>

        <PageReveal className="approach-vision-visual" delay={0.12}>
          <div className="approach-vision-image">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1300&q=85"
              alt="Students learning through discussion and discovery"
              loading="lazy"
            />
          </div>

          <div className="approach-vision-note">
            <MessageCircle size={19} />
            <span>Every question matters.</span>
          </div>

          <div className="approach-vision-index">
            <span>EHWS</span>
            <span>LEARNING WITH INTENTION</span>
          </div>
        </PageReveal>
      </div>
    </section>
  );
}

function ApproachPrinciples() {
  return (
    <section className="academic-section approach-principles">
      <div className="academic-container">
        <PageReveal className="academic-section-heading">
          <SubpageEyebrow number="03" label="PRINCIPLES THAT GUIDE US" light />

          <h2>
            Make learning
            <br />
            <em>an active experience.</em>
          </h2>

          <p>
            Different learners grow in different ways. A thoughtful learning
            environment creates opportunities to question, participate,
            collaborate and reflect.
          </p>
        </PageReveal>

        <div className="approach-principle-grid">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <PageReveal
                key={principle.number}
                className="approach-principle-card"
                delay={index * 0.08}
              >
                <div className="approach-principle-top">
                  <span>{principle.number}</span>
                  <Icon size={27} strokeWidth={1.4} />
                </div>

                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
                <span className="approach-principle-bottom">
                  <ArrowUpRight size={18} />
                </span>
              </PageReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LearningModes() {
  const [active, setActive] = useState(0);
  const current = learningModes[active];
  const CurrentIcon = current.icon;

  return (
    <section className="academic-section approach-modes" id="learning-modes">
      <div className="academic-container">
        <PageReveal className="approach-modes-heading">
          <div>
            <SubpageEyebrow number="04" label="LEARNING IN ACTION" />
            <h2>
              Discover.
              <br />
              <em>Experience. Reflect.</em>
            </h2>
          </div>

          <p>
            Learning can take many forms. Explore some of the ways curiosity
            and participation can support a deeper understanding of ideas.
          </p>
        </PageReveal>

        <div className="approach-modes-layout">
          <div className="approach-mode-tabs" role="tablist" aria-label="Learning modes">
            {learningModes.map((mode, index) => (
              <button
                key={mode.number}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={`approach-mode-tab ${
                  active === index ? "is-active" : ""
                }`}
                onClick={() => setActive(index)}
              >
                <span className="approach-mode-number">{mode.number}</span>
                <span className="approach-mode-tab-copy">
                  <small>{mode.label}</small>
                  <strong>{mode.title}</strong>
                </span>
                <ArrowUpRight size={19} />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.number}
              role="tabpanel"
              className="approach-mode-feature"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className="approach-mode-image">
                <img src={current.image} alt={current.alt} loading="lazy" />
                <span>{current.number} / 03</span>
                <div className="approach-mode-image-icon">
                  <CurrentIcon size={24} />
                </div>
              </div>

              <div className="approach-mode-description">
                <span>{current.label} WITH PURPOSE</span>
                <h3>{current.title}</h3>
                <p>{current.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ApproachClosing() {
  return (
    <section className="academic-closing approach-closing">
      <PageReveal className="academic-closing-content">
        <span className="academic-closing-symbol">✳</span>
        <SubpageEyebrow number="05" label="A LIFELONG JOURNEY" />

        <h2>
          Curious minds.
          <br />
          <em>Confident futures.</em>
        </h2>

        <p>
          When learners are encouraged to ask, explore and reflect, every
          experience can become an opportunity to grow.
        </p>

        <div className="academic-closing-actions">
          <Link to="/academic-excellence" className="academic-button academic-button-dark">
            Academic Excellence <ArrowUpRight size={17} />
          </Link>

          <Link to="/#admissions" className="academic-closing-link">
            Enquire now <ArrowRight size={17} />
          </Link>
        </div>
      </PageReveal>
    </section>
  );
}

export default function LearningApproach() {
  useEffect(() => {
    document.title = "Learning Approach | The Emerald Heights World School";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="academic-page approach-page">
      <SchoolSubpageHeader currentPage="Learning Approach" />

      <main>
        <ApproachHero />
        <ApproachVision />
        <ApproachPrinciples />
        <LearningModes />
        <ApproachClosing />
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
