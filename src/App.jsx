import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  Sparkles,
  Globe2,
  Award,
  Play,
  ExternalLink,
} from "lucide-react";
import AdmissionPopup from "./components/AdmissionPopup";
import "./App.css";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Our Inspiration", href: "/our-inspiration" },
      { label: "Introduction", href: "/introduction" },
      { label: "Our Approach", href: "/our-approach" },
      { label: "Our Campus", href: "/our-campus" },
    ],
  },
  {
    label: "Academics",
    href: "#academics",
    children: [
      { label: "Academic Excellence", href: "/academic-excellence" },
      { label: "Learning Approach", href: "/learning-approach" },
    ],
  },
  {
    label: "Admissions",
    href: "#admissions",
    children: [
      { label: "NURSERY, LKG AND UKG", href: "/nur-lkg-ukg" },
      { label: "I TO IX", href: "/i-to-ix" },
    ],
  },
  { label: "Campus Life", href: "#campus" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "/contact" },
];

/* =========================================================
   DATA
========================================================= */

const highlights = [
  {
    number: "01",
    title: "Inspired Learning",
    description:
      "Encouraging curiosity, creativity and a lifelong love of learning.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Holistic Growth",
    description:
      "Developing confident, compassionate and responsible individuals.",
    icon: Users,
  },
  {
    number: "03",
    title: "Excellence",
    description:
      "Creating opportunities for every learner to discover their potential.",
    icon: Trophy,
  },
];

const galleryItems = [
  {
    title: "Learning Beyond Classrooms",
    category: "LEARNING",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "A Community That Inspires",
    category: "COMMUNITY",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Discovering New Horizons",
    category: "CAMPUS LIFE",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
  },
];

const universityAchievements = [
  {
    name: "Student Achievement 01",
    university: "Harvard University",
    location: "Cambridge, Massachusetts, USA",
    scholarship: "$308,000",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
    tag: "GLOBAL OPPORTUNITIES",
  },
  {
    name: "Student Achievement 02",
    university: "University of Pennsylvania",
    location: "Philadelphia, Pennsylvania, USA",
    scholarship: "$260,000",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85",
    tag: "ACADEMIC EXCELLENCE",
  },
  {
    name: "Student Achievement 03",
    university: "University of Pennsylvania",
    location: "Philadelphia, Pennsylvania, USA",
    scholarship: "To be confirmed",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=700&q=85",
    tag: "STUDENT SUCCESS",
  },
  {
    name: "Student Achievement 04",
    university: "Dartmouth College",
    location: "Hanover, New Hampshire, USA",
    scholarship: "To be confirmed",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
    tag: "INTERNATIONAL FUTURES",
  },
  {
    name: "Student Achievement 05",
    university: "University of Pennsylvania",
    location: "Philadelphia, Pennsylvania, USA",
    scholarship: "To be confirmed",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=700&q=85",
    tag: "GLOBAL EDUCATION",
  },
];

const heroSlides = [
  {
    eyebrow: "THE EMERALD HEIGHTS WORLD SCHOOL",
    title: "Where Learning",
    accent: "Comes Alive.",
    description:
      "Nurturing curious minds, inspiring possibilities and preparing young people to make a meaningful difference in the world.",
    image: "/admission-popup-2027-28.jpg",
  },
  {
    eyebrow: "DISCOVER YOUR POTENTIAL",
    title: "Dream Beyond",
    accent: "Boundaries.",
    description:
      "A learning environment that celebrates individuality, encourages exploration and gives every learner room to grow.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=90",
  },
  {
    eyebrow: "LEARNING WITH PURPOSE",
    title: "Building Bright",
    accent: "Futures.",
    description:
      "Helping students develop knowledge, character and the confidence to shape tomorrow.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=2000&q=90",
  },
  {
    eyebrow: "A COMMUNITY THAT CARES",
    title: "Growing Together,",
    accent: "Every Day.",
    description:
      "Where friendships flourish, talents are discovered and every student's journey matters.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2000&q=90",
  },
  {
    eyebrow: "INSPIRED BY A GREATER VISION",
    title: "Learn. Live.",
    accent: "Become.",
    description:
      "Education that goes beyond academic achievement to nurture thoughtful, capable and compassionate human beings.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=90",
  },
];

/* =========================================================
   LIFE AT EMERALD HEIGHTS DATA
   UPDATED WITH YOUR SCHOOL THUMBNAIL IMAGES
========================================================= */

const lifeAtEmeraldHeights = [
  {
    title: "ACADEMICS",
    category: "LEARNING & EXCELLENCE",
    description:
      "Discover a learning environment that encourages curiosity, critical thinking and academic growth.",
    image: "/images/ehws-classroom.jpg",
    href: "/academic-excellence",
    number: "01",
  },
  {
    title: "CAREER GUIDANCE",
    category: "FUTURE & CAREERS",
    description:
      "Explore opportunities, discover individual strengths and prepare for future academic and career choices.",
    image: "/images/ehws-university-fair.jpg",
    href: "/career-guidance",
    number: "02",
  },
  {
    title: "SPORTS & CO-CURRICULAR",
    category: "BEYOND THE CLASSROOM",
    description:
      "Discover how sports, creative activities and teamwork support confidence, discipline and holistic development.",
    image: "/images/ehws-skating.jpg",
    href: "/sports-co-curricular",
    number: "03",
  },
  {
    title: "INTERNATIONALISM",
    category: "GLOBAL PERSPECTIVES",
    description:
      "Explore global perspectives, cultural understanding and opportunities to connect with the wider world.",
    image: "/images/ehws-music.jpg",
    href: "/internationalism",
    number: "04",
  },
];

/* =========================================================
   SCHOOL VIDEOS
========================================================= */

const schoolVideos = [
  {
    id: "dcnCzqJnHNo",
    title: "Closing Video of RSIC 2019",
    category: "EVENT HIGHLIGHTS",
    description:
      "Relive memorable moments from the closing of RSIC 2019 and revisit an important school event.",
    number: "01",
  },
  {
    id: "n6NEYFxdBFQ",
    title: "RSIC 2019 Hosted by EHIS",
    category: "SCHOOL EVENTS",
    description:
      "Look back at RSIC 2019, hosted by EHIS, and the experiences that brought participants together.",
    number: "02",
  },
  {
    id: "qUeTCUskS9c",
    title: "Knowledge Is King",
    category: "LEARNING & INSPIRATION",
    description:
      "An inspiring video celebrating the importance of knowledge, learning and curiosity.",
    number: "03",
  },
];

/* =========================================================
   BRAND
========================================================= */


function Brand({ light = false }) {
  return (
    <a
      href="/"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="The Emerald Heights World School home"
    >
      <img
        src="/images/ehws-logo-white.png"
        alt="The Emerald Heights World School"
        className="navbar-school-logo"
      />
    </a>
  );
}


/* =========================================================
   HEADER
========================================================= */

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const handleNavClick = (event, href) => {
    if (href.startsWith("/")) {
      closeMobileMenu();
      return;
    }

    if (href.startsWith("#")) {
      const target = document.querySelector(href);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", href);
      }

      closeMobileMenu();
    }
  };

  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              className="nav-item"
              key={item.label}
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="nav-link"
                onClick={(event) => handleNavClick(event, item.href)}
                aria-haspopup={item.children ? "true" : undefined}
                aria-expanded={
                  item.children ? activeDropdown === item.label : undefined
                }
              >
                {item.label}

                {item.children && (
                  <ChevronDown
                    size={14}
                    className={
                      activeDropdown === item.label
                        ? "nav-chevron nav-chevron-open"
                        : "nav-chevron"
                    }
                  />
                )}
              </a>

              {item.children && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      className="nav-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.children.map((child, index) => (
                        <motion.a
                          href={child.href}
                          key={child.label}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.035 }}
                          onClick={(event) => handleNavClick(event, child.href)}
                          className="dropdown-link"
                        >
                          <span>{child.label}</span>
                          <ArrowUpRight size={15} />
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <a
          href="#admissions"
          className="header-cta"
          onClick={(event) => handleNavClick(event, "#admissions")}
        >
          <span>Enquire Now</span>
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mobile-menu-inner">
              {navItems.map((item) => (
                <div className="mobile-nav-group" key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="mobile-nav-link mobile-dropdown-trigger"
                        onClick={() =>
                          setActiveDropdown((current) =>
                            current === item.label ? null : item.label,
                          )
                        }
                        aria-expanded={activeDropdown === item.label}
                      >
                        {item.label}

                        <ChevronDown
                          size={18}
                          className={
                            activeDropdown === item.label
                              ? "nav-chevron nav-chevron-open"
                              : "nav-chevron"
                          }
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            className="mobile-submenu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            {item.children.map((child) => (
                              <a
                                href={child.href}
                                key={child.label}
                                className="mobile-submenu-link"
                                onClick={(event) =>
                                  handleNavClick(event, child.href)
                                }
                              >
                                {child.label}
                                <ArrowUpRight size={15} />
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={(event) => handleNavClick(event, item.href)}
                    >
                      {item.label}
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              ))}

              <a
                href="#admissions"
                className="mobile-enquire"
                onClick={(event) => handleNavClick(event, "#admissions")}
              >
                Enquire Now <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="hero-image"
            style={{ backgroundImage: `url("${slide.image}")` }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="hero-overlay" />
        <div className="hero-grain" />
      </div>

      <div className="hero-content">
        <motion.div
          key={`hero-copy-${currentSlide}`}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-copy"
        >
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            <span>{slide.eyebrow}</span>
          </div>

          <h1 className="hero-title">
            {slide.title}
            <br />
            <span>{slide.accent}</span>
          </h1>

          <p className="hero-description">{slide.description}</p>

          <div className="hero-actions">
            <a href="#about" className="button button-gold">
              Discover Our School <ArrowUpRight size={17} />
            </a>

            <a href="#academics" className="hero-text-link">
              Explore Learning <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <div className="hero-pagination">
          {heroSlides.map((item, index) => (
            <button
              type="button"
              key={item.eyebrow}
              className={`hero-pagination-item ${
                index === currentSlide ? "active" : ""
              }`}
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            >
              <span className="hero-pagination-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="hero-pagination-track">
                <span
                  className="hero-pagination-fill"
                  style={{
                    transform:
                      index === currentSlide ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </span>
            </button>
          ))}
        </div>

        <a href="#about" className="hero-scroll">
          <span>SCROLL TO DISCOVER</span>
          <span className="hero-scroll-line" />
        </a>
      </div>
    </section>
  );
}

/* =========================================================
   SECTION EYEBROW
========================================================= */

function SectionEyebrow({ children }) {
  return (
    <div className="section-eyebrow">
      <span />
      {children}
    </div>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="section-container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-image-main">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
              alt="Students learning together"
              loading="lazy"
            />
          </div>

          <div className="about-image-small">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=85"
              alt="Students exploring new ideas"
              loading="lazy"
            />
          </div>

          <div className="about-stamp">
            <Sparkles size={20} />
            <span>Learning with purpose</span>
          </div>

          <div className="about-visual-caption">
            <span>01 / OUR PHILOSOPHY</span>
          </div>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow>WELCOME TO EMERALD HEIGHTS</SectionEyebrow>

          <h2 className="section-title">
            Education is more than
            <br />
            <span className="text-italic">what you know.</span>
          </h2>

          <p className="section-description">
            At The Emerald Heights World School, we believe education is a
            journey of discovery — one that nurtures knowledge, character,
            curiosity and a deeper understanding of the world.
          </p>

          <p className="section-description">
            Inspired by a vision of holistic development, we encourage every
            learner to explore their strengths, ask meaningful questions and
            become a thoughtful, confident individual.
          </p>

          <a href="/our-inspiration" className="text-link">
            Discover Our Inspiration <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   INSPIRATION STRIP
========================================================= */

function InspirationStrip() {
  return (
    <section className="inspiration-strip">
      <div className="inspiration-strip-inner">
        <span className="strip-symbol">✳</span>

        <p>
          “Education is not just preparation for life. It is the unfolding of
          life itself.”
        </p>

        <a href="/our-inspiration" aria-label="Explore our inspiration">
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}

/* =========================================================
   APPROACH
========================================================= */

function ApproachSection() {
  return (
    <section className="approach-section section-pad" id="approach">
      <div className="section-container">
        <div className="section-heading-centered">
          <SectionEyebrow>THE EMERALD APPROACH</SectionEyebrow>

          <h2 className="section-title">
            Space to learn.
            <br />
            <span className="text-italic">Freedom to become.</span>
          </h2>

          <p className="section-description">
            A meaningful education helps students grow academically, creatively,
            socially and emotionally.
          </p>
        </div>

        <div className="highlight-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="highlight-card"
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ y: -7 }}
              >
                <div className="highlight-card-top">
                  <span>{item.number}</span>
                  <Icon size={24} strokeWidth={1.4} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <span className="highlight-card-bottom">
                  <ArrowUpRight size={18} />
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ACADEMICS
========================================================= */

function AcademicsSection() {
  return (
    <section className="academics-section section-pad" id="academics">
      <div className="section-container academics-grid">
        <div className="academics-copy">
          <SectionEyebrow>THE ART OF LEARNING</SectionEyebrow>

          <h2 className="section-title">
            Curiosity today.
            <br />
            <span className="text-italic">Possibility tomorrow.</span>
          </h2>

          <p className="section-description">
            We aim to create an environment where students are encouraged to
            think independently, collaborate with others and apply what they
            learn to the world around them.
          </p>

          <a href="#admissions" className="button button-dark">
            Explore Admissions <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="academics-visual">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1400&q=85"
            alt="Collaborative learning"
            loading="lazy"
          />

          <div className="academics-image-caption">
            <GraduationCap size={23} />
            <div>
              <span>BEYOND THE CLASSROOM</span>
              <strong>Learning for life</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   UNIVERSITY ACHIEVEMENTS CAROUSEL
========================================================= */

function UniversityAchievements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const visibleCards = 3;
  const maxIndex = Math.max(0, universityAchievements.length - visibleCards);

  const next = () => {
    setActiveIndex((index) => (index >= maxIndex ? 0 : index + 1));
  };

  const previous = () => {
    setActiveIndex((index) => (index <= 0 ? maxIndex : index - 1));
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(next, 3500);
    return () => window.clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section
      className="university-section"
      id="university-achievements"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="university-decoration university-decoration-one" />
      <div className="university-decoration university-decoration-two" />

      <div className="section-container university-container">
        <motion.div
          className="university-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <SectionEyebrow>BEYOND BOUNDARIES</SectionEyebrow>

          <h2 className="university-title">
            A world of possibilities.
            <br />
            <span>Ambitions without borders.</span>
          </h2>

          <p className="university-description">
            We encourage our students to explore global opportunities, discover
            their potential and prepare for the next chapter of their academic
            journey.
          </p>

          <div className="university-heading-rule">
            <span />
            <Globe2 size={20} />
            <span />
          </div>
        </motion.div>

        <div className="university-carousel">
          <div className="university-carousel-toolbar">
            <div>
              <span className="university-mini-label">
                STUDENT DESTINATIONS
              </span>
              <p>Inspiring journeys. Global horizons.</p>
            </div>

            <div className="university-controls">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous student achievements"
                className="university-arrow"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next student achievements"
                className="university-arrow"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>

          <div
            className="university-viewport"
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;

              const distance =
                event.changedTouches[0].clientX - touchStartX.current;

              if (distance < -45) next();
              if (distance > 45) previous();

              touchStartX.current = null;
            }}
          >
            <motion.div
              className="university-track"
              animate={{
                x: `calc(${activeIndex} * (var(--university-card-width) + var(--university-gap)) * -1)`,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 22,
              }}
            >
              {universityAchievements.map((student, index) => (
                <article className="university-card" key={student.name}>
                  <div className="university-card-image">
                    <img
                      src={student.image}
                      alt={`Sample portrait for ${student.name}`}
                      loading="lazy"
                    />

                    <span className="university-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="university-card-image-label">
                      {student.tag}
                    </span>
                  </div>

                  <div className="university-card-content">
                    <span className="university-card-eyebrow">
                      UNIVERSITY DESTINATION
                    </span>

                    <h3>{student.name}</h3>

                    <div className="university-name">
                      <GraduationCap size={19} />
                      <span>{student.university}</span>
                    </div>

                    <p className="university-location">
                      <MapPin size={15} />
                      {student.location}
                    </p>

                    <div className="university-scholarship">
                      <span>
                        <Award size={17} />
                        Scholarship
                      </span>
                      <strong>{student.scholarship}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          <div className="university-carousel-bottom">
            <div className="university-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  type="button"
                  key={index}
                  aria-label={`Go to carousel position ${index + 1}`}
                  aria-pressed={activeIndex === index}
                  className={
                    activeIndex === index
                      ? "university-dot university-dot-active"
                      : "university-dot"
                  }
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <span className="university-counter">
              {String(activeIndex + 1).padStart(2, "0")}
              <span> / </span>
              {String(maxIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="university-bottom-note">
          <Sparkles size={18} />
          <p>
            Every student's journey is unique. We aim to help learners discover
            opportunities that align with their strengths and goals.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SCHOOL VIDEO SECTION
========================================================= */

function SchoolVideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="school-video-section" id="school-videos">
      <div className="section-container">
        <motion.div
          className="school-video-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="school-video-heading-copy">
            <SectionEyebrow>EXPERIENCES & MEMORIES</SectionEyebrow>

            <h2 className="school-video-title">
              Moments that
              <br />
              <span>stay with us.</span>
            </h2>

            <p className="school-video-description">
              Explore memorable events, celebrate our school community and
              revisit moments that make the school journey special.
            </p>
          </div>

          <a
            href="https://www.youtube.com/"
            className="school-video-channel-link"
            target="_blank"
            rel="noreferrer"
          >
            <span>Explore on YouTube</span>
            <ExternalLink size={17} />
          </a>
        </motion.div>

        <div className="school-video-grid">
          {schoolVideos.map((video, index) => (
            <motion.article
              className="school-video-card"
              key={video.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -7 }}
            >
              <div className="school-video-media">
                {activeVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={`Video thumbnail: ${video.title}`}
                      loading="lazy"
                    />

                    <div className="school-video-image-overlay" />

                    <span className="school-video-number">{video.number}</span>

                    <button
                      type="button"
                      className="school-video-play"
                      aria-label={`Play ${video.title}`}
                      onClick={() => setActiveVideo(video.id)}
                    >
                      <Play size={23} fill="currentColor" />
                    </button>

                    <span className="school-video-play-label">WATCH VIDEO</span>
                  </>
                )}
              </div>

              <div className="school-video-card-content">
                <div className="school-video-card-meta">
                  <span className="school-video-category">
                    {video.category}
                  </span>
                  <span className="school-video-meta-dot" />
                  <span className="school-video-meta-number">
                    {video.number}
                  </span>
                </div>

                <h3>{video.title}</h3>
                <p>{video.description}</p>

                <div className="school-video-card-footer">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="school-video-watch-link"
                  >
                    Watch on YouTube <ArrowUpRight size={16} />
                  </a>

                  <button
                    type="button"
                    className="school-video-inline-button"
                    onClick={() =>
                      setActiveVideo((current) =>
                        current === video.id ? null : video.id,
                      )
                    }
                  >
                    {activeVideo === video.id ? "Close video" : "Play here"}
                    <Play size={14} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="school-video-bottom-note">
          <span className="school-video-note-icon">
            <Sparkles size={18} />
          </span>

          <p>Every event holds a story. Every experience becomes a memory.</p>

          <a href="#gallery" aria-label="Explore campus gallery">
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   LIFE AT EMERALD HEIGHTS
========================================================= */

function LifeAtEmeraldHeights() {
  return (
    <section className="life-emerald-section" id="life-at-emerald">
      <div className="section-container">
        <motion.div
          className="life-emerald-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="life-emerald-kicker">MORE THAN AN EDUCATION</span>

          <h2>
            LIFE AT <span>EMERALD HEIGHTS</span>
          </h2>

          <p>
            Explore the experiences, opportunities and ideas that shape learning
            beyond the classroom.
          </p>

          <div className="life-emerald-divider">
            <span />
            <Sparkles size={17} />
            <span />
          </div>
        </motion.div>

        <div className="life-emerald-grid">
          {lifeAtEmeraldHeights.map((item, index) => (
            <motion.article
              className="life-emerald-card"
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index % 2 === 0 ? 0.08 : 0.18,
              }}
            >
              <a
                className="life-emerald-image-link"
                href={item.href}
                aria-label={`Explore ${item.title}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />

                <span className="life-emerald-image-overlay" />

                <span className="life-emerald-number">{item.number}</span>

                <span className="life-emerald-image-arrow">
                  <ArrowUpRight size={22} />
                </span>
              </a>

              <div className="life-emerald-card-content">
                <span className="life-emerald-category">{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a className="life-emerald-read-more" href={item.href}>
                  READ MORE
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CAMPUS SECTION / GALLERY
========================================================= */

function CampusSection() {
  return (
    <section className="campus-section section-pad" id="campus">
      <div className="section-container">
        <div className="campus-heading">
          <div>
            <SectionEyebrow>OUR WORLD</SectionEyebrow>

            <h2 className="section-title">
              Every day holds
              <br />
              <span className="text-italic">something wonderful.</span>
            </h2>
          </div>

          <a href="#gallery" className="text-link">
            Explore campus life <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="gallery-grid" id="gallery">
          {galleryItems.map((item, index) => (
            <motion.article
              className={`gallery-card gallery-card-${index + 1}`}
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={item.image} alt={item.title} loading="lazy" />

              <div className="gallery-card-overlay" />

              <div className="gallery-card-content">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <ArrowUpRight size={20} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ADMISSIONS
========================================================= */

function AdmissionsSection() {
  return (
    <section className="admissions-section section-pad" id="admissions">
      <div className="admissions-background" />

      <div className="section-container admissions-content">
        <SectionEyebrow>YOUR JOURNEY STARTS HERE</SectionEyebrow>

        <h2 className="section-title">
          Every great journey
          <br />
          <span className="text-italic">begins with a first step.</span>
        </h2>

        <p className="section-description">
          Discover a place where your child can explore, grow and prepare for a
          world of possibilities.
        </p>

        <a href="/nur-lkg-ukg" className="button button-gold">
          Begin Your Journey <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  const footerGroups = [
    {
      title: "QUICK LINKS",
      links: [
        { label: "Prospectus 2027–28", href: "/Prospectus-2027-28.pdf" },
        { label: "Fee Structure 2027–28", href: "/fee-structure" },
        { label: "Newsletters", href: "/News-Letter-First-Edition-2025-26.pdf" },
        { label: "Documents", href: "/documents" },
      ],
    },
    {
      title: "EXPLORE",
      links: [
        { label: "Photo Gallery", href: "/photo-gallery" },
        { label: "School Map", href: "/our-campus" },
        { label: "Book List 2026–27", href: "/EHWS-BOOK-LIST-NURSERY-TO-IX-WS-2026-27-1.pdf" },
        { label: "School Uniform", href: "/uniform" },
        { label: "Fee Payment Tutorial", href: "/fee-payment-tutorial" },
      ],
    },
    {
      title: "INFORMATION",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/PRIVACY-POLICY-EHWS.pdf" },
        { label: "Payment Policy", href: "/Payment-Policy.pdf" },
        { label: "Fee Refund Policy", href: "/FEE-REFUND-POLICY.pdf" },
        { label: "Terms & Conditions", href: "/Revised-TERMS-CONDITIONS-EHWS.pdf" },
        {
          label: "Mandatory Public Disclosure",
          href: "/Mandatory-Disclosure-Details-Oct-8-2026.pdf",
        },
      ],
    },
  ];

  return (
    <footer className="ehws-footer" id="contact">
      <div className="ehws-footer-top-line" />

      <div className="section-container ehws-footer-container">
        <div className="ehws-footer-grid">
          {/* SCHOOL BRAND AND ADDRESS */}
          <div className="ehws-footer-brand">
            <a
              href="/"
              className="ehws-footer-logo-link"
              aria-label="The Emerald Heights World School home"
            >
              <img
                src="/images/ehws-logo-white.png"
                alt="The Emerald Heights World School logo"
                className="ehws-footer-logo"
                loading="lazy"
              />
            </a>

            <p className="ehws-footer-tagline">
              Learn with purpose.
              <br />
              Live with meaning.
            </p>

            <div className="ehws-footer-address">
              <span className="ehws-footer-icon">
                <MapPin size={19} strokeWidth={1.5} />
              </span>

              <p>
                Survey No. 26/1 and 27/1, Balyakheda,
                <br />
                Near Sheraton Grand Palace Hotel,
                <br />
                Between Omaxe City 1 and DLF Garden City,
                <br />
                AB Bypass Road, Indore, Madhya Pradesh – 453771
              </p>
            </div>

            <a
              className="ehws-footer-contact-link"
              href="mailto:info@ehws.edu.in"
            >
              <Mail size={17} strokeWidth={1.6} />
              <span>info@ehws.edu.in</span>
            </a>

            <a className="ehws-footer-contact-link" href="tel:+917880091400">
              <Phone size={17} strokeWidth={1.6} />
              <span>7880091400–401</span>
            </a>
          </div>

          {/* FOOTER LINK GROUPS */}
          {footerGroups.map((group) => (
            <div className="ehws-footer-column" key={group.title}>
              <h3>{group.title}</h3>

              <span className="ehws-footer-heading-line" />

              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>
                      <span>{link.label}</span>
                      <ArrowUpRight
                        className="ehws-footer-link-arrow"
                        size={14}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FOOTER BOTTOM */}
        <div className="ehws-footer-bottom">
          <p className="ehws-footer-copyright">
            © {new Date().getFullYear()} The Emerald Heights World School.
            <span> All rights reserved.</span>
          </p>

          <p className="ehws-footer-bottom-motto">
            Shaping minds. Inspiring futures.
          </p>

          <div className="ehws-footer-socials">
            <a
              href="https://www.facebook.com/emeraldheightsworldofficial"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/emeraldheightsworldofficial/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5.2 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM3.6 8.5h3.2v11H3.6zm5.3 0H12v1.5h.1a3.8 3.8 0 0 1 3.4-1.8c3.4 0 4 2.2 4 5v6.3h-3.2v-5.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H8.9z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/emeraldheightsworldofficial/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3.5"
                  y="3.5"
                  width="17"
                  height="17"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="17.6" cy="6.8" r="1.1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

export default function App() {
  useEffect(() => {
    document.title = "The Emerald Heights World School";

    const revealTargets = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealTargets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Header />

      <main>
        <Hero />

        <AboutSection />

        <InspirationStrip />

        <ApproachSection />

        <AcademicsSection />

        {/* University achievements carousel */}
        <UniversityAchievements />

        {/* School videos */}
        <SchoolVideoSection />

        {/* Life at Emerald Heights */}
        <LifeAtEmeraldHeights />

        {/* Campus gallery */}
        <CampusSection />

        <AdmissionsSection />
      </main>

      <Footer />

      {/* Homepage admission announcement */}
      <AdmissionPopup />
    </div>
  );
}
