
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Compass,
  Heart,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";
import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";
import "./AboutPages.css";

const learningMethods = [
  {
    number: "01",
    name: "Learning by discovery",
    short: "Curiosity leads the way.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    description:
      "We encourage students to ask questions, explore ideas and discover connections. Learning becomes meaningful when children actively participate in the process.",
    points: ["Question-led exploration", "Experiential activities", "Independent thinking"],
  },
  {
    number: "02",
    name: "Learning together",
    short: "Growth through collaboration.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1400&q=85",
    description:
      "Discussion, teamwork and shared experiences help students understand different perspectives, communicate with confidence and learn from one another.",
    points: ["Team-based projects", "Respectful discussion", "Shared responsibility"],
  },
  {
    number: "03",
    name: "Learning for life",
    short: "Knowledge with purpose.",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    description:
      "Education extends beyond textbooks. We value opportunities that connect knowledge with everyday life, thoughtful decisions and responsible action.",
    points: ["Practical application", "Problem-solving", "Responsible choices"],
  },
];

const principles = [
  {
    number: "01",
    title: "Know yourself",
    text: "Every learner has individual interests, strengths and possibilities worth discovering.",
    icon: Heart,
  },
  {
    number: "02",
    title: "Think independently",
    text: "Questions, reflection and exploration help students develop their own understanding.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Grow with others",
    text: "Empathy, cooperation and respect are essential parts of a meaningful education.",
    icon: Users,
  },
];

function ApproachHero() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="inspiration-scroll-progress" style={{ scaleX: progress }} />

      <section className="inspiration-hero approach-hero">
        <div className="inspiration-hero-image approach-hero-image" />
        <div className="inspiration-hero-shade" />
        <div className="inspiration-hero-decoration inspiration-decoration-one" />
        <div className="inspiration-hero-decoration inspiration-decoration-two" />

        <div className="inspiration-hero-inner">
          <motion.div
            className="inspiration-breadcrumb"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <a href="/">Home</a>
            <span>/</span>
            <span>About Us</span>
            <span>/</span>
            <strong>Our Approach</strong>
          </motion.div>

          <div className="inspiration-hero-heading">
            <motion.div
              className="inspiration-hero-kicker"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span />
              THE WAY WE LEARN AND GROW
              <span />
            </motion.div>

            <motion.p
              className="inspiration-hero-small"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Education that looks beyond the classroom.
            </motion.p>

            <h1>
              <motion.span
                className="inspiration-title-line"
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.4, duration: 0.9 }}
              >
                Learning with
              </motion.span>
              <motion.span
                className="inspiration-title-line inspiration-title-italic"
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
              >
                <span>purpose.</span>
              </motion.span>
            </h1>

            <motion.p
              className="inspiration-hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              A thoughtful approach to education that nurtures curiosity,
              independent thinking, character and the potential within every child.
            </motion.p>

            <motion.a
              href="#approach-story"
              className="inspiration-hero-button"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              Explore our approach <ArrowDown size={17} />
            </motion.a>
          </div>
        </div>

        <div className="inspiration-hero-bottom">
          <span>DISCOVER · QUESTION · GROW</span>
          <a href="#approach-story" aria-label="Scroll to our approach">
            <ArrowDown size={19} />
          </a>
          <span>01 — 03</span>
        </div>
      </section>
    </>
  );
}

function ApproachStory() {
  return (
    <section className="founder-section" id="approach-story">
      <div className="inspiration-container">
        <PageReveal className="founder-intro">
          <SubpageEyebrow number="01" label="OUR EDUCATIONAL BELIEF" />
          <h2>
            More than lessons.
            <br />
            <em>A way of becoming.</em>
          </h2>
          <p>
            Education is not simply about what a student knows. It is also about
            how they think, what they value and how they engage with the world.
          </p>
        </PageReveal>

        <div className="founder-grid approach-story-grid">
          <PageReveal className="approach-story-visual">
            <div className="approach-image-frame">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85"
                alt="Students learning in a classroom"
                loading="lazy"
              />
              <div className="approach-image-caption">
                <span>LEARNING IN ACTION</span>
                <Sparkles size={19} />
              </div>
            </div>
            <div className="approach-side-note">CURIOSITY IS THE BEGINNING</div>
          </PageReveal>

          <div className="founder-copy approach-story-copy">
            <PageReveal>
              <div className="founder-quote-mark">“</div>
              <h3>
                Help each learner discover
                <br />
                <em>what they can become.</em>
              </h3>
            </PageReveal>

            <PageReveal delay={0.1}>
              <p className="founder-paragraph">
                We believe that every child brings a unique combination of
                abilities, interests and questions. A meaningful education
                recognises these differences and gives students room to grow.
              </p>
            </PageReveal>

            <PageReveal delay={0.2}>
              <p className="founder-paragraph">
                Through guidance, exploration and shared experiences, students
                can develop confidence, resilience and a lasting interest in learning.
              </p>
            </PageReveal>

            <PageReveal delay={0.3}>
              <div className="founder-signoff">
                <span />
                <p>Knowledge, character and the joy of discovery.</p>
              </div>
            </PageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="philosophy-section approach-principles">
      <div className="inspiration-container">
        <PageReveal className="philosophy-heading">
          <SubpageEyebrow number="02" label="THE PRINCIPLES THAT GUIDE US" light />
          <h2>
            Every child.
            <br />
            <em>Every possibility.</em>
          </h2>
          <p>
            Our approach values the whole learner — the mind, the individual
            and the relationships that help a young person flourish.
          </p>
        </PageReveal>

        <div className="approach-principle-grid">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <PageReveal key={item.number} delay={index * 0.1}>
                <article className="approach-principle-card">
                  <div className="approach-principle-top">
                    <span>{item.number}</span>
                    <Icon size={23} strokeWidth={1.4} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="approach-card-line" />
                </article>
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
  const selected = learningMethods[active];
  const Icon = selected.icon;

  return (
    <section className="founder-section approach-learning-section" id="learning-methods">
      <div className="inspiration-container">
        <PageReveal className="founder-intro">
          <SubpageEyebrow number="03" label="LEARNING IN MANY FORMS" />
          <h2>
            Different ways to learn.
            <br />
            <em>One meaningful journey.</em>
          </h2>
          <p>
            Explore some of the experiences that help make learning active,
            collaborative and connected to life.
          </p>
        </PageReveal>

        <div className="approach-method-tabs" role="tablist" aria-label="Learning methods">
          {learningMethods.map((item, index) => (
            <button
              key={item.number}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{item.number}</span>
              {item.name}
              <ArrowUpRight size={17} />
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            className="approach-method-feature"
            key={selected.number}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <div className="approach-method-image">
              <img src={selected.image} alt={selected.name} loading="lazy" />
              <span>{selected.number}</span>
            </div>
            <div className="approach-method-copy">
              <span className="approach-overline">
                <Icon size={17} /> HOW LEARNING COMES ALIVE
              </span>
              <h3>{selected.name}</h3>
              <p className="approach-method-short">{selected.short}</p>
              <p>{selected.description}</p>

              <ul>
                {selected.points.map((point) => (
                  <li key={point}>
                    <span />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="approach-method-controls">
                <span>{selected.number} / 03</span>
                <div>
                  <button
                    type="button"
                    aria-label="Previous learning method"
                    onClick={() =>
                      setActive((active - 1 + learningMethods.length) % learningMethods.length)
                    }
                  >
                    <ArrowRight className="approach-arrow-back" size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next learning method"
                    onClick={() => setActive((active + 1) % learningMethods.length)}
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ApproachClosing() {
  return (
    <section className="inspiration-closing">
      <div className="inspiration-closing-bg" />
      <div className="inspiration-container inspiration-closing-inner">
        <PageReveal>
          <SubpageEyebrow number="04" label="THE JOURNEY AHEAD" />
          <div className="closing-symbol">
            <BookOpen size={25} strokeWidth={1.3} />
          </div>
          <h2>
            Learning today.
            <br />
            <em>Possibilities for tomorrow.</em>
          </h2>
          <p>
            We want every learner to leave the classroom with more than answers:
            with questions worth asking, values worth keeping and the confidence
            to keep growing.
          </p>
          <a className="closing-button" href="/our-campus">
            Discover our campus <ArrowRight size={17} />
          </a>
        </PageReveal>
      </div>
    </section>
  );
}

export default function OurApproach() {
  useEffect(() => {
    document.title = "Our Approach | Emerald Heights World School";
  }, []);

  return (
    <div className="our-inspiration-page school-subpage our-approach-page">
      <SchoolSubpageHeader currentPage="Our Approach" />
      <main>
        <ApproachHero />
        <ApproachStory />
        <PrinciplesSection />
        <LearningSection />
        <ApproachClosing />
      </main>
      <SchoolSubpageFooter />
    </div>
  );
}
