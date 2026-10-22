
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  Feather,
  Heart,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import "./OurInspiration.css";

const founderMessage = [
  "Education is the only thing in the world which cannot be stolen away from you. It plays an integral part in making the person you become. Grades and marks do not determine the success of a person's life; it is practical knowledge and depth that help make a person an extraordinary human being.",
  "Life is a journey filled with adventures, so enjoy it and make the best use of every opportunity provided. A person who dreams is a person who lives. Do not be afraid to chase your dreams, but always remember that dreams come true when you are true to your responsibilities and know your priorities.",
  "The most important thing in life is to become a good human being.",
];

const inspirations = [
  {
    number: "01",
    name: "The Mother",
    subtitle: "Discover what already lives within.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1500&q=85",
    quote:
      "True education has to unfold and reveal what is already present in the children. They open themselves in joy and open themselves to the sun.",
    detail:
      "Education should help every child discover their own potential. It should encourage self-knowledge, confidence and the courage to keep moving towards the future.",
    keywords: ["Self-discovery", "Inner growth", "Possibility"],
  },
  {
    number: "02",
    name: "Sri Aurobindo",
    subtitle: "Education as guidance, not imposition.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1500&q=85",
    quote:
      "The teacher is not an instructor or a task master; he is a helper and a guide. His business is to suggest and not to impose.",
    detail:
      "Learning begins with the learner. A teacher's role is to guide exploration, encourage independent thinking and help knowledge grow from within.",
    keywords: ["Guidance", "Independent thought", "Growth"],
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function PageHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const links = [
    { label: "Our School", href: "/#about" },
    { label: "Academics", href: "/#academics" },
    { label: "Campus Life", href: "/#campus" },
    { label: "Our Inspiration", href: "/our-inspiration" },
  ];

  return (
    <>
      <div className="inspiration-topbar">
        <div className="inspiration-topbar-inner">
          <a href="mailto:info@ehws.edu.in">info@ehws.edu.in</a>
          <span>INSPIRING MINDS. SHAPING POSSIBILITIES.</span>
          <a href="tel:7880091400401">7880091400-401</a>
        </div>
      </div>

      <header
        className={`inspiration-header ${scrolled ? "is-scrolled" : ""}`}
      >
        <nav className="inspiration-nav">
          <a className="inspiration-brand" href="/">
            <span className="inspiration-brand-mark">E</span>
            <span>
              <strong>EMERALD HEIGHTS</strong>
              <small>THE WORLD SCHOOL</small>
            </span>
          </a>

          <div className="inspiration-desktop-links">
            {links.map((link) => (
              <a
                key={link.label}
                className={
                  link.label === "Our Inspiration" ? "current" : ""
                }
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a className="inspiration-header-cta" href="/#contact">
            Let's connect <ArrowUpRight size={16} />
          </a>

          <button
            className="inspiration-menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="inspiration-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="inspiration-mobile-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="inspiration-mobile-top">
                <span>EXPLORE EMERALD</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation"
                >
                  <X />
                </button>
              </div>

              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <ArrowUpRight size={18} />
                </motion.a>
              ))}

              <a
                className="inspiration-mobile-contact"
                href="/#contact"
                onClick={() => setMenuOpen(false)}
              >
                Start a conversation <ArrowRight size={17} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function InspirationHero() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="inspiration-scroll-progress"
        style={{ scaleX: smoothProgress }}
      />

      <section className="inspiration-hero">
        <motion.div
          className="inspiration-hero-image"
          style={{ y: useSpring(0), scale: 1 }}
        />

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
            <strong>Our Inspiration</strong>
          </motion.div>

          <motion.div
            className="inspiration-hero-kicker"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span />
            THE PEOPLE BEHIND OUR PURPOSE
            <span />
          </motion.div>

          <div className="inspiration-hero-heading">
            <motion.p
              className="inspiration-hero-small"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Every great journey begins with a belief.
            </motion.p>

            <h1>
              <motion.span
                className="inspiration-title-line"
                initial={{ opacity: 0, y: 65, rotateX: -12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                A legacy of
              </motion.span>

              <motion.span
                className="inspiration-title-line inspiration-title-italic"
                initial={{ opacity: 0, y: 65, rotateX: -12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span>inspiration.</span>
              </motion.span>
            </h1>

            <motion.p
              className="inspiration-hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
            >
              The vision that shapes our values. The philosophy
              that guides our learning. The belief that every
              child has something extraordinary within.
            </motion.p>

            <motion.a
              href="#founder"
              className="inspiration-hero-button"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              Discover our inspiration
              <ArrowDown size={17} />
            </motion.a>
          </div>
        </div>

        <div className="inspiration-hero-bottom">
          <span>OUR STORY · OUR VALUES · OUR FUTURE</span>
          <a href="#founder" aria-label="Scroll to founder section">
            <ArrowDown size={19} />
          </a>
          <span>01 — 03</span>
        </div>
      </section>
    </>
  );
}

function FounderSection() {
  return (
    <section className="founder-section" id="founder">
      <div className="inspiration-container">
        <Reveal className="founder-intro">
          <div className="inspiration-section-label">
            <span>01</span>
            THE FOUNDING VISION
          </div>
          <h2>
            Our Founder
            <br />
            <em>Late Smt. Suneeta Singh</em>
          </h2>
          <p>
            A vision rooted in education, responsibility and the
            importance of becoming a good human being.
          </p>
        </Reveal>

        <div className="founder-grid">
          <Reveal className="founder-visual">
            <div className="founder-photo-frame">
              <div className="founder-photo-placeholder">
                <span className="founder-monogram">S</span>
                <span className="founder-photo-caption">
                  A LEGACY THAT LIVES ON
                </span>
              </div>
              <div className="founder-photo-number">1958 — 2011</div>
            </div>

            <div className="founder-vertical-note">
              A VISION BEYOND GENERATIONS
            </div>

            <div className="founder-floating-mark">
              <Sparkles size={24} />
            </div>
          </Reveal>

          <div className="founder-copy">
            <Reveal delay={0.1}>
              <div className="founder-quote-mark">“</div>
              <h3>
                She breathes in her children
                <br />
                <em>across the globe.</em>
              </h3>
            </Reveal>

            {founderMessage.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.1 + index * 0.08}>
                <p className="founder-paragraph">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <div className="founder-signoff">
                <span />
                <p>Love, live, dream and spread your essence in the world.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const [active, setActive] = useState(0);
  const selected = inspirations[active];

  return (
    <section className="philosophy-section" id="philosophy">
      <div className="inspiration-container">
        <Reveal className="philosophy-heading">
          <div className="inspiration-section-label light-label">
            <span>02</span>
            THE IDEAS THAT GUIDE US
          </div>
          <h2>
            Education that
            <br />
            <em>awakens possibility.</em>
          </h2>
          <p>
            Discover the educational philosophies that inspire
            our belief in self-discovery, independent thought and
            the potential within every learner.
          </p>
        </Reveal>

        <div className="philosophy-tabs" role="tablist">
          {inspirations.map((item, index) => (
            <button
              key={item.name}
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
            className="philosophy-feature"
            key={selected.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
          >
            <div className="philosophy-image">
              <img src={selected.image} alt="" loading="lazy" />
              <div className="philosophy-image-overlay" />
              <span className="philosophy-image-number">
                {selected.number}
              </span>
              <span className="philosophy-image-caption">
                A PHILOSOPHY OF GROWTH
              </span>
            </div>

            <div className="philosophy-copy">
              <span className="philosophy-overline">
                EDUCATION &amp; HUMAN POTENTIAL
              </span>
              <h3>{selected.name}</h3>
              <p className="philosophy-subtitle">{selected.subtitle}</p>
              <blockquote>{selected.quote}</blockquote>
              <p className="philosophy-detail">{selected.detail}</p>

              <div className="philosophy-keywords">
                {selected.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>

              <div className="philosophy-controls">
                <span>
                  {selected.number} <i /> 02
                </span>
                <div>
                  <button
                    onClick={() => setActive((active + 1) % inspirations.length)}
                    aria-label="Next philosophy"
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

function ClosingSection() {
  return (
    <section className="inspiration-closing">
      <div className="inspiration-closing-bg" />

      <div className="inspiration-container inspiration-closing-inner">
        <Reveal>
          <div className="inspiration-section-label">
            <span>03</span>
            THE PURPOSE THAT CONNECTS US
          </div>
          <div className="closing-symbol">
            <Heart size={25} strokeWidth={1.3} />
          </div>
          <h2>
            Beyond what we teach,
            <br />
            <em>is who we help become.</em>
          </h2>
          <p>
            Knowledge opens doors. Character gives us direction.
            The courage to explore makes the journey our own.
          </p>
          <a className="closing-button" href="/#about">
            Discover our school <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function InspirationFooter() {
  return (
    <footer className="inspiration-footer">
      <div className="inspiration-container inspiration-footer-main">
        <a href="/" className="inspiration-brand footer-brand">
          <span className="inspiration-brand-mark">E</span>
          <span>
            <strong>EMERALD HEIGHTS</strong>
            <small>THE WORLD SCHOOL</small>
          </span>
        </a>

        <p>
          A vision for education.
          <br />
          A future full of possibilities.
        </p>

        <a href="mailto:info@ehws.edu.in" className="footer-email">
          Get in touch <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="inspiration-container inspiration-footer-bottom">
        <span>© {new Date().getFullYear()} Emerald Heights World School</span>
        <a href="/">Return to homepage ↑</a>
      </div>
    </footer>
  );
}

export default function OurInspiration() {
  useEffect(() => {
    document.title = "Our Inspiration | Emerald Heights World School";

    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <div className="our-inspiration-page">
      <PageHeader />
      <main>
        <InspirationHero />
        <FounderSection />
        <PhilosophySection />
        <ClosingSection />
      </main>
      <InspirationFooter />
    </div>
  );
}
