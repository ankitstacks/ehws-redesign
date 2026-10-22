
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Leaf,
  Palette,
  Sparkles,
  Trophy,
} from "lucide-react";
import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";
import "./AboutPages.css";

const campusSpaces = [
  {
    number: "01",
    title: "Learning spaces",
    category: "CLASSROOMS",
    description:
      "Spaces designed to support focused learning, classroom interaction and the exchange of ideas.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Knowledge centre",
    category: "LIBRARY & READING",
    description:
      "An environment where students can explore books, develop research habits and follow their curiosity.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Science & discovery",
    category: "LABORATORIES",
    description:
      "Practical exploration encourages learners to observe, investigate and connect ideas with experience.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Creative expression",
    category: "ARTS & ACTIVITIES",
    description:
      "Creative activities give students opportunities to express themselves and explore new interests.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
    icon: Palette,
  },
  {
    number: "05",
    title: "Movement & teamwork",
    category: "SPORTS",
    description:
      "Sports and physical activities can nurture teamwork, discipline, resilience and a sense of fair play.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
    icon: Trophy,
  },
  {
    number: "06",
    title: "Space to breathe",
    category: "CAMPUS ENVIRONMENT",
    description:
      "Green surroundings and open spaces offer moments to pause, connect and enjoy the world around us.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
    icon: Leaf,
  },
];

function CampusHero() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="inspiration-scroll-progress" style={{ scaleX: progress }} />

      <section className="inspiration-hero campus-hero">
        <div className="inspiration-hero-image campus-hero-image" />
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
            <strong>Our Campus</strong>
          </motion.div>

          <div className="inspiration-hero-heading">
            <motion.div
              className="inspiration-hero-kicker"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span />
              A PLACE TO EXPLORE AND BELONG
              <span />
            </motion.div>

            <motion.p
              className="inspiration-hero-small"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Where everyday moments become opportunities.
            </motion.p>

            <h1>
              <motion.span
                className="inspiration-title-line"
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.4, duration: 0.9 }}
              >
                A place to
              </motion.span>
              <motion.span
                className="inspiration-title-line inspiration-title-italic"
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
              >
                <span>flourish.</span>
              </motion.span>
            </h1>

            <motion.p
              className="inspiration-hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Discover the spaces, experiences and everyday encounters that
              support learning, creativity, friendship and personal growth.
            </motion.p>

            <motion.a
              href="#campus-story"
              className="inspiration-hero-button"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              Explore our campus <ArrowDown size={17} />
            </motion.a>
          </div>
        </div>

        <div className="inspiration-hero-bottom">
          <span>SPACES · EXPERIENCES · COMMUNITY</span>
          <a href="#campus-story" aria-label="Scroll to campus introduction">
            <ArrowDown size={19} />
          </a>
          <span>01 — 03</span>
        </div>
      </section>
    </>
  );
}

function CampusIntroduction() {
  return (
    <section className="founder-section" id="campus-story">
      <div className="inspiration-container">
        <PageReveal className="founder-intro">
          <SubpageEyebrow number="01" label="MORE THAN A SCHOOL BUILDING" />
          <h2>
            Room to discover.
            <br />
            <em>Space to become.</em>
          </h2>
          <p>
            A school campus is more than its buildings. It is where questions
            begin, friendships grow, talents are explored and memories take shape.
          </p>
        </PageReveal>

        <div className="campus-intro-grid">
          <PageReveal className="campus-intro-image">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85"
              alt="School building and campus"
              loading="lazy"
            />
            <div className="campus-image-stamp">
              <Sparkles size={18} />
              <span>A PLACE FOR POSSIBILITIES</span>
            </div>
          </PageReveal>

          <div className="campus-intro-copy">
            <PageReveal>
              <span className="campus-copy-label">THE CAMPUS EXPERIENCE</span>
              <h3>
                Every space can open
                <br />
                <em>a new door.</em>
              </h3>
            </PageReveal>

            <PageReveal delay={0.1}>
              <p>
                From classroom conversations to practical activities, a school
                environment can make learning more engaging and give students
                different ways to participate.
              </p>
            </PageReveal>

            <PageReveal delay={0.2}>
              <p>
                Our campus story is about the opportunities that school life
                creates: to explore an interest, work with others, build
                confidence and discover something new.
              </p>
            </PageReveal>

            <PageReveal delay={0.3}>
              <a href="#campus-spaces" className="campus-text-link">
                Explore the spaces <ArrowRight size={17} />
              </a>
            </PageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CampusSpaces() {
  return (
    <section className="philosophy-section campus-spaces-section" id="campus-spaces">
      <div className="inspiration-container">
        <PageReveal className="philosophy-heading">
          <SubpageEyebrow number="02" label="SPACES THAT SUPPORT GROWTH" light />
          <h2>
            Many spaces.
            <br />
            <em>Many possibilities.</em>
          </h2>
          <p>
            Explore the different kinds of spaces that can contribute to a
            well-rounded school experience.
          </p>
        </PageReveal>

        <div className="campus-space-grid">
          {campusSpaces.map((space, index) => {
            const Icon = space.icon;

            return (
              <PageReveal key={space.number} delay={(index % 3) * 0.08}>
                <article className="campus-space-card">
                  <div className="campus-space-image">
                    <img src={space.image} alt={space.title} loading="lazy" />
                    <span className="campus-space-number">{space.number}</span>
                    <span className="campus-space-icon">
                      <Icon size={21} strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="campus-space-content">
                    <span className="campus-space-category">{space.category}</span>
                    <h3>{space.title}</h3>
                    <p>{space.description}</p>
                    <div className="campus-space-bottom">
                      <span>DISCOVER</span>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </article>
              </PageReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CampusLife() {
  return (
    <section className="founder-section campus-life-section">
      <div className="inspiration-container campus-life-grid">
        <PageReveal className="campus-life-heading">
          <SubpageEyebrow number="03" label="LIFE BEYOND THE LESSON" />
          <h2>
            The moments
            <br />
            <em>that stay with us.</em>
          </h2>
        </PageReveal>

        <PageReveal className="campus-life-copy" delay={0.12}>
          <p>
            School life is shaped by everyday experiences: the first question
            asked in class, the excitement of trying something new, the teamwork
            behind a shared goal and the friendships made along the way.
          </p>
          <p>
            These moments can help students develop a stronger sense of
            belonging, responsibility and confidence in their own abilities.
          </p>
          <a href="/our-approach" className="campus-text-link">
            Discover our approach <ArrowRight size={17} />
          </a>
        </PageReveal>
      </div>
    </section>
  );
}

function CampusClosing() {
  return (
    <section className="inspiration-closing campus-closing">
      <div className="inspiration-closing-bg" />
      <div className="inspiration-container inspiration-closing-inner">
        <PageReveal>
          <SubpageEyebrow number="04" label="YOUR JOURNEY STARTS HERE" />
          <div className="closing-symbol">
            <Leaf size={25} strokeWidth={1.3} />
          </div>
          <h2>
            A place to learn.
            <br />
            <em>A community to grow with.</em>
          </h2>
          <p>
            Every learner's journey is different. The right environment helps
            make room for new ideas, meaningful experiences and future possibilities.
          </p>
          <a className="closing-button" href="/#contact">
            Connect with our school <ArrowRight size={17} />
          </a>
        </PageReveal>
      </div>
    </section>
  );
}

export default function OurCampus() {
  useEffect(() => {
    document.title = "Our Campus | Emerald Heights World School";
  }, []);

  return (
    <div className="our-inspiration-page school-subpage our-campus-page">
      <SchoolSubpageHeader currentPage="Our Campus" />
      <main>
        <CampusHero />
        <CampusIntroduction />
        <CampusSpaces />
        <CampusLife />
        <CampusClosing />
      </main>
      <SchoolSubpageFooter />
    </div>
  );
}
