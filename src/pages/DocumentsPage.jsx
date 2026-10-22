import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  FileText,
  ShieldCheck,
  CalendarDays,
  Building2,
  Users,
  Droplets,
  GraduationCap,
  ArrowUpRight,
  ExternalLink,
  Landmark,
  ClipboardCheck,
} from "lucide-react";

import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
} from "./AboutPageShared";

import "./DocumentsPage.css";

const OFFICIAL_DOCUMENTS = "https://ehws.edu.in/documents/";

const documents = [
  {
    title: "Affiliation",
    description: "School affiliation and related official records.",
    category: "School Information",
    icon: Landmark,
    url: OFFICIAL_DOCUMENTS,
    direct: false,
  },
  {
    title: "Academic Calendar",
    description: "Academic schedule and important school dates.",
    category: "Academic",
    icon: CalendarDays,
    url: OFFICIAL_DOCUMENTS,
    direct: false,
  },
  {
    title: "Building Safety Certificate",
    description: "Official documentation related to building safety.",
    category: "Safety & Compliance",
    icon: Building2,
    url: "https://ehws.edu.in/wp-content/uploads/2025/04/BUILDING-SAFETY-CERTIFICATE.pdf",
    direct: true,
  },
  {
    title: "Fire Safety Certificate with NOC",
    description: "Fire safety documentation issued by the competent authority.",
    category: "Safety & Compliance",
    icon: ShieldCheck,
    url: "https://ehws.edu.in/wp-content/uploads/2025/04/FIRE-SAFETY-CERTIFICATE.pdf",
    direct: true,
  },
  {
    title: "No Objection Certificate",
    description: "School's published No Objection Certificate.",
    category: "Safety & Compliance",
    icon: ClipboardCheck,
    url: "https://ehws.edu.in/wp-content/uploads/2025/04/NO-OBJECTION-CERTIFICATE.pdf",
    direct: true,
  },
  {
    title: "Parents Teacher Association",
    description: "Information related to the Parents Teacher Association.",
    category: "School Information",
    icon: Users,
    url: OFFICIAL_DOCUMENTS,
    direct: false,
  },
  {
    title: "RTE Recognition Certificate",
    description:
      "Recognition documentation under the Right to Education framework.",
    category: "Recognition",
    icon: GraduationCap,
    url: "https://ehws.edu.in/wp-content/uploads/2025/04/RTE-RECOGNITION-CERTIFICATE.pdf",
    direct: true,
  },
  {
    title: "RTE Certificate",
    description: "Additional RTE-related school documentation.",
    category: "Recognition",
    icon: FileText,
    url: OFFICIAL_DOCUMENTS,
    direct: false,
  },
  {
    title: "School Management Committee",
    description: "School management committee information and records.",
    category: "School Information",
    icon: Users,
    url: OFFICIAL_DOCUMENTS,
    direct: false,
  },
  {
    title: "Society Registration",
    description: "Published society registration certificate.",
    category: "Recognition",
    icon: Landmark,
    url: "https://ehws.edu.in/wp-content/uploads/2025/04/SOCIETY-REGISTRATION-CERTIFICATE.pdf",
    direct: true,
  },
  {
    title: "Water and Hygiene Certificate",
    description: "Published water safety and hygiene documentation.",
    category: "Safety & Compliance",
    icon: Droplets,
    url: "https://ehws.edu.in/wp-content/uploads/2025/04/WATER-SAFETY-AND-HYGIENE.pdf",
    direct: true,
  },
  {
    title: "Self Generation Certificate",
    description: "Self-certification documentation published by the school.",
    category: "Recognition",
    icon: ClipboardCheck,
    url: "https://ehws.edu.in/wp-content/uploads/2025/05/Self-Generation-Certificate.pdf",
    direct: true,
  },
  {
    title: "Teachers' List",
    description:
      "Refer to the official school documents page for the published list.",
    category: "School Information",
    icon: GraduationCap,
    url: OFFICIAL_DOCUMENTS,
    direct: false,
  },
];

const categories = [
  "All Documents",
  "School Information",
  "Academic",
  "Safety & Compliance",
  "Recognition",
];

export default function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Documents");

  useEffect(() => {
    document.title =
      "Documents & Certifications | The Emerald Heights World School";

    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredDocuments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return documents.filter((document) => {
      const matchesCategory =
        activeCategory === "All Documents" ||
        document.category === activeCategory;

      const matchesSearch =
        !query ||
        document.title.toLowerCase().includes(query) ||
        document.description.toLowerCase().includes(query) ||
        document.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="academic-page documents-page">
      <SchoolSubpageHeader currentPage="Documents" />

      <main>
        <section className="documents-hero">
          <div className="documents-hero-pattern" />

          <div className="documents-container documents-hero-inner">
            <motion.div
              className="documents-hero-copy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="documents-eyebrow">
                <span />
                SCHOOL RESOURCES
              </span>

              <h1>
                Documents &
                <br />
                <em>Certifications.</em>
              </h1>

              <p>
                Access school information, academic resources and official
                documentation in one convenient place.
              </p>

              <a href="#documents-library" className="documents-hero-link">
                Explore Documents
                <ArrowUpRight size={17} />
              </a>
            </motion.div>

            <motion.div
              className="documents-hero-art"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <div className="documents-art-frame">
                <div className="documents-art-icon">
                  <FileText size={62} strokeWidth={1.15} />
                </div>

                <span>OFFICIAL SCHOOL RECORDS</span>

                <div className="documents-art-rule" />

                <p>Information you can access</p>
              </div>
            </motion.div>
          </div>

          <div className="documents-hero-rule" />
        </section>

        <section className="documents-library-section" id="documents-library">
          <div className="documents-container">
            <PageReveal>
              <div className="documents-section-heading">
                <div>
                  <span className="documents-eyebrow documents-eyebrow-dark">
                    <span />
                    DOCUMENT LIBRARY
                  </span>

                  <h2>
                    Find what
                    <br />
                    <em>you need.</em>
                  </h2>
                </div>

                <p>
                  Browse the available document categories or search by name to
                  find a particular record.
                </p>
              </div>
            </PageReveal>

            <div className="documents-toolbar">
              <label className="documents-search">
                <Search size={18} />

                <input
                  type="search"
                  placeholder="Search documents..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search documents"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    Clear
                  </button>
                )}
              </label>

              <span className="documents-count">
                {filteredDocuments.length}{" "}
                {filteredDocuments.length === 1 ? "document" : "documents"}
              </span>
            </div>

            <div className="documents-filters" aria-label="Document categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "documents-filter active"
                      : "documents-filter"
                  }
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredDocuments.length > 0 ? (
              <div className="documents-grid">
                {filteredDocuments.map((document, index) => {
                  const DocumentIcon = document.icon;

                  return (
                    <PageReveal key={document.title}>
                      <motion.article
                        className="documents-card"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="documents-card-top">
                          <div className="documents-card-icon">
                            <DocumentIcon size={24} strokeWidth={1.5} />
                          </div>

                          <span className="documents-card-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <span className="documents-card-category">
                          {document.category}
                        </span>

                        <h3>{document.title}</h3>

                        <p>{document.description}</p>

                        <a
                          className="documents-card-link"
                          href={document.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {document.direct
                            ? "View Document"
                            : "Open Official Page"}

                          {document.direct ? (
                            <ExternalLink size={16} />
                          ) : (
                            <ArrowUpRight size={16} />
                          )}
                        </a>
                      </motion.article>
                    </PageReveal>
                  );
                })}
              </div>
            ) : (
              <div className="documents-empty">
                <Search size={28} />

                <h3>No documents found</h3>

                <p>Try another search term or choose a different category.</p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All Documents");
                  }}
                >
                  Show all documents
                </button>
              </div>
            )}

            <div className="documents-note">
              <div className="documents-note-icon">
                <ShieldCheck size={25} />
              </div>

              <div>
                <span>OFFICIAL INFORMATION</span>

                <h3>Need another document?</h3>

                <p>
                  Some records are linked directly to their published PDF, while
                  others can be accessed through the school's official documents
                  page. Please verify the latest applicable version before
                  relying on a certificate.
                </p>

                <a href="/documents" className="documents-note-link">
                  Visit Documents Page
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
