
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

// Reuse the exact styling used by Our Inspiration.
import "./OurInspiration.css";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Introduction", href: "/introduction" },
  { label: "Our Inspiration", href: "/our-inspiration" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Our Campus", href: "/our-campus" },
];

export function SchoolSubpageHeader({ currentPage = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <div className="inspiration-topbar">
        <div className="inspiration-topbar-inner">
          <a href="mailto:info@ehws.edu.in">info@ehws.edu.in</a>
          <span>INSPIRING MINDS. SHAPING POSSIBILITIES.</span>
          <a href="tel:7880091400">7880091400</a>
        </div>
      </div>

      <header
        className={`inspiration-header ${scrolled ? "is-scrolled" : ""}`}
      >
        <nav className="inspiration-nav" aria-label="Main navigation">
          <a className="inspiration-brand" href="/" aria-label="Emerald Heights home">
            <span className="inspiration-brand-mark">E</span>
            <span>
              <strong>EMERALD HEIGHTS</strong>
              <small>THE WORLD SCHOOL</small>
            </span>
          </a>

          <div className="inspiration-desktop-links">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={currentPage === link.label ? "current" : ""}
                aria-current={currentPage === link.label ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a className="inspiration-header-cta" href="/#contact">
            Enquire now <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            className="inspiration-menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
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
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation"
                >
                  <X size={22} />
                </button>
              </div>

              {navigationLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  aria-current={currentPage === link.label ? "page" : undefined}
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
                Enquire now <ArrowRight size={17} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function SchoolSubpageFooter() {
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
        <span>
          © {new Date().getFullYear()} Emerald Heights World School
        </span>
        <a href="/">Return to homepage ↑</a>
      </div>
    </footer>
  );
}

export function PageReveal({ children, className = "", delay = 0 }) {
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

export function SubpageEyebrow({ number, label, light = false }) {
  return (
    <div
      className={`inspiration-section-label ${light ? "light-label" : ""}`}
    >
      <span>{number}</span>
      {label}
    </div>
  );
}
