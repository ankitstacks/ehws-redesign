import { useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Shirt,
  Snowflake,
  Info,
  BookOpen,
  Sparkles,
} from "lucide-react";

import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
} from "./AboutPageShared";

import "./SchoolUniform.css";

const uniformGroups = [
  {
    number: "01",
    title: "Junior School",
    subtitle: "A comfortable start to school life",
    classes: "Junior School",
    description:
      "The junior uniform is designed around comfort and ease of movement for younger learners throughout their school day.",
    regularItems: [
      "Royal blue T-shirt with school logo",
      "Navy blue shorts for boys",
      "Navy blue skort for girls",
      "Navy blue socks with white stripes",
      "Black sports shoes",
    ],
    winterItems: ["Navy blue tracksuit with school identity"],
    pdf: "/EHWS-Junior-School-Uniform-2026-27-3.pdf",
    pdfLabel: "Junior School Uniform PDF",
    year: "2025–26",
    accent: "junior",
  },
  {
    number: "02",
    title: "Senior School",
    subtitle: "A smart and consistent school identity",
    classes: "Senior School",
    description:
      "The senior uniform combines the prescribed school attire with sportswear and a winter blazer as described in the school's published uniform document.",
    regularItems: [
      "Light grey half-sleeve shirt with school logo",
      "Full pants for boys",
      "Box-pleated skirt for girls, below the knees",
      "Dark blue striped scarf",
      "Belt with school logo",
      "Navy blue socks with white stripes",
      "Black sports shoes",
    ],
    winterItems: [
      "Navy blue blazer with school logo",
      "Navy blue tracksuit for sports",
      "Black leggings beneath the skirt are optional, as specified in the published document",
    ],
    pdf: "/EHWS-Senior-School-Uniform-2026-27-3.pdf",
    pdfLabel: "Senior School Uniform PDF",
    year: "2025–26",
    accent: "senior",
  },
];

function UniformHero() {
  return (
    <section className="uniform-hero">
      <div className="uniform-hero-pattern" />

      <div className="uniform-container uniform-hero-inner">
        <PageReveal>
          <div className="uniform-eyebrow">
            <span />
            THE EMERALD HEIGHTS WORLD SCHOOL
          </div>

          <h1>
            Worn with pride.
            <br />
            <em>United in purpose.</em>
          </h1>

          <p>
            Our school uniform reflects a shared sense of belonging,
            responsibility and school spirit. Explore the published uniform
            guidelines for Junior and Senior School.
          </p>

          <a href="#uniform-guidelines" className="uniform-primary-link">
            Explore uniform guidelines
            <ArrowUpRight size={17} />
          </a>
        </PageReveal>

        <motion.div
          className="uniform-hero-art"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="uniform-art-frame">
            <div className="uniform-art-circle">
              <Shirt size={88} strokeWidth={0.85} />
            </div>

            <span className="uniform-art-number">EHWS / UNIFORM</span>
            <span className="uniform-art-line" />
            <span className="uniform-art-caption">A sense of belonging</span>
          </div>
        </motion.div>
      </div>

      <div className="uniform-hero-rule" />
    </section>
  );
}

function UniformCard({ group }) {
  return (
    <motion.article
      className={`uniform-card uniform-card-${group.accent}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="uniform-card-top">
        <div>
          <span className="uniform-card-number">{group.number}</span>
          <span className="uniform-card-kicker">{group.subtitle}</span>
        </div>

        <div className="uniform-card-symbol">
          <Shirt size={27} strokeWidth={1.1} />
        </div>
      </div>

      <h3>{group.title}</h3>
      <p className="uniform-card-description">{group.description}</p>

      <div className="uniform-card-divider" />

      <div className="uniform-list-section">
        <h4>
          <Check size={16} />
          Regular Uniform
        </h4>

        <ul>
          {group.regularItems.map((item) => (
            <li key={item}>
              <span className="uniform-list-dot" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="uniform-list-section uniform-winter-section">
        <h4>
          <Snowflake size={16} />
          Winter Uniform
        </h4>

        <ul>
          {group.winterItems.map((item) => (
            <li key={item}>
              <span className="uniform-list-dot" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="uniform-card-footer">
        <div className="uniform-pdf-meta">
          <BookOpen size={17} />
          <span>
            Official uniform document
            <small>Published reference: {group.year}</small>
          </span>
        </div>

        <a
          className="uniform-pdf-link"
          href={group.pdf}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${group.pdfLabel}`}
        >
          <span>View PDF</span>
          <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}

function UniformNote() {
  return (
    <section className="uniform-note-section">
      <div className="uniform-container">
        <div className="uniform-note">
          <div className="uniform-note-icon">
            <Info size={23} strokeWidth={1.5} />
          </div>

          <div className="uniform-note-content">
            <span className="uniform-note-kicker">A NOTE FOR PARENTS</span>
            <h3>Choosing your uniform supplier</h3>
            <p>
              The school has stated that it has not authorised any particular
              uniform shop. Parents may purchase the uniform from any shop,
              while referring to the school's published uniform specifications.
            </p>

            <a href="/uniform" className="uniform-note-link">
              Visit the uniform page
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function UniformClosing() {
  return (
    <section className="uniform-closing">
      <div className="uniform-container uniform-closing-inner">
        <div className="uniform-closing-icon">
          <Sparkles size={24} strokeWidth={1.2} />
        </div>

        <div className="uniform-closing-copy">
          <span>THE EMERALD HEIGHTS WORLD SCHOOL</span>
          <h2>
            One community.
            <br />
            <em>One shared identity.</em>
          </h2>
        </div>

        <a href="/contact" className="uniform-contact-link">
          Contact the school
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default function SchoolUniform() {
  useEffect(() => {
    document.title = "School Uniform | The Emerald Heights World School";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="academic-page school-uniform-page">
      <SchoolSubpageHeader currentPage="School Uniform" />

      <main>
        <UniformHero />

        <section className="uniform-guidelines" id="uniform-guidelines">
          <div className="uniform-container">
            <div className="uniform-section-heading">
              <div>
                <div className="uniform-eyebrow uniform-eyebrow-dark">
                  <span />
                  UNIFORM GUIDELINES
                </div>

                <h2>
                  Every stage,
                  <br />
                  <em>its own journey.</em>
                </h2>
              </div>

              <p>
                Refer to the published school uniform documents for the detailed
                specifications applicable to each school section.
              </p>
            </div>

            <div className="uniform-cards">
              {uniformGroups.map((group) => (
                <UniformCard group={group} key={group.number} />
              ))}
            </div>

            <p className="uniform-document-disclaimer">
              The linked official PDFs are labelled 2025–26. Please confirm the
              applicable uniform specifications for the current academic session
              with the school before purchasing.
            </p>
          </div>
        </section>

        <UniformNote />
        <UniformClosing />
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
