
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Images,
  X,
} from "lucide-react";
import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
} from "./AboutPageShared";
import "./PhotoGallery.css";

const photoFiles = [
  { file: "9T5A9484.jpg", category: "Events" },
  { file: "chess-1-scaled.jpg", category: "Activities" },
  { file: "DJI_0233-scaled.jpg", category: "Campus" },
  { file: "DJI_0234-scaled.jpg", category: "Campus" },
  { file: "DJI_0260-scaled.jpg", category: "Campus" },
  { file: "DJI_0262-scaled.jpg", category: "Campus" },
  { file: "DJI_20250723114539_0018_D-1-scaled.jpg", category: "Campus" },
  { file: "DJI_20250723114732_0029_D-scaled.jpg", category: "Campus" },
  { file: "DJI_20250723114732_0029_D1-scaled.jpg", category: "Campus" },
  { file: "DJI_20250723114921_0036_D-scaled.jpg", category: "Campus" },
  { file: "DJI_20250723120857_0072_D-scaled.jpg", category: "Campus" },
  { file: "DJI_20250723121001_0078_D-scaled.jpg", category: "Campus" },
  { file: "DJI_20250723121706_0095_D-scaled.jpg", category: "Campus" },
  { file: "football-3-scaled.jpg", category: "Sports" },
  { file: "Guru-Purnima-2-scaled.jpg", category: "Events" },
  { file: "Guru-Purnima-3-scaled.jpg", category: "Events" },
  { file: "IMG_2043.jpg", category: "Activities" },
  { file: "IMG_2045.jpg", category: "Activities" },
  { file: "IMG_2051.jpg", category: "Activities" },
  { file: "IMG_2110.jpg", category: "Activities" },
  { file: "IMG_2116.jpg", category: "Activities" },
  { file: "IMG_2118.jpg", category: "Activities" },
  { file: "MG_3865-scaled.jpg", category: "Events" },
  { file: "MG_3867-scaled.jpg", category: "Events" },
  { file: "MG_3909-scaled.jpg", category: "Events" },
  { file: "MG_3914-scaled.jpg", category: "Events" },
  { file: "MG_3916-scaled.jpg", category: "Events" },
  { file: "MG_3940-scaled.jpg", category: "Events" },
  { file: "MG_4023-scaled.jpg", category: "Events" },
  { file: "MG_4036-scaled.jpg", category: "Events" },
  { file: "MG_4099-scaled (1).jpg", category: "Events" },
  { file: "MG_4104-scaled.jpg", category: "Events" },
  { file: "robotic-1-scaled.jpg", category: "Activities" },
  { file: "robotic-2-scaled.jpg", category: "Activities" },
  { file: "summer-day-1-scaled.jpg", category: "Events" },
  { file: "summer-day-2-scaled.jpg", category: "Events" },
  { file: "TT-scaled.jpg", category: "Sports" },
];

const filters = ["All Photos", "Campus", "Sports", "Events", "Activities"];

const getPhotoUrl = (file) =>
  `/Photo-Gallary/${encodeURIComponent(file).replaceAll("%2F", "/")}`;

export default function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState("All Photos");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredPhotos =
    activeFilter === "All Photos"
      ? photoFiles
      : photoFiles.filter((photo) => photo.category === activeFilter);

  const selectedPhoto =
    selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  const closePreview = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? filteredPhotos.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === filteredPhotos.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    document.title = "Photo Gallery | The Emerald Heights World School";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePreview();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, filteredPhotos.length]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

  return (
    <div className="academic-page photo-gallery-page">
      <SchoolSubpageHeader currentPage="Photo Gallery" />

      <main>
        {/* HERO */}
        <section className="pg-hero">
          <div className="pg-hero-pattern" />

          <div className="pg-container pg-hero-inner">
            <PageReveal>
              <div className="pg-eyebrow">
                <span />
                THE EMERALD HEIGHTS WORLD SCHOOL
              </div>

              <h1>
                Moments that
                <br />
                <em>become memories.</em>
              </h1>

              <p>
                A glimpse into our school life—discover the experiences,
                celebrations, activities and everyday moments that bring our
                community together.
              </p>

              <a href="#pg-collection" className="pg-hero-link">
                Explore the gallery <ArrowRight size={17} />
              </a>
            </PageReveal>

            <div className="pg-hero-mark" aria-hidden="true">
              <Camera size={74} strokeWidth={0.8} />
              <span>CAPTURING LIFE AT EMERALD</span>
            </div>
          </div>

          <div className="pg-hero-bottom-line" />
        </section>

        {/* GALLERY */}
        <section className="pg-collection" id="pg-collection">
          <div className="pg-container">
            <div className="pg-collection-heading">
              <div>
                <div className="pg-eyebrow pg-eyebrow-dark">
                  <span />
                  SCHOOL LIFE IN PICTURES
                </div>

                <h2>
                  Our world,
                  <br />
                  <em>through the lens.</em>
                </h2>
              </div>

              <div className="pg-photo-count">
                <Images size={21} strokeWidth={1.5} />
                <span>
                  <strong>{filteredPhotos.length}</strong>
                  {filteredPhotos.length === 1 ? " photograph" : " photographs"}
                </span>
              </div>
            </div>

            {/* FILTERS */}
            <div className="pg-filter-row" aria-label="Filter photos">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "pg-filter pg-filter-active"
                      : "pg-filter"
                  }
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                  {filter === "All Photos" && (
                    <span className="pg-filter-count">{photoFiles.length}</span>
                  )}
                </button>
              ))}
            </div>

            {/* PHOTO GRID */}
            <motion.div layout className="pg-grid">
              <AnimatePresence mode="popLayout">
                {filteredPhotos.map((photo, index) => (
                  <motion.button
                    type="button"
                    layout
                    key={photo.file}
                    className={`pg-photo-card ${
                      index % 7 === 0 ? "pg-photo-card-tall" : ""
                    }`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: (index % 8) * 0.025 }}
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Open photo ${index + 1}: ${photo.file}`}
                  >
                    <img
                      src={getPhotoUrl(photo.file)}
                      alt={`${photo.category} at The Emerald Heights World School`}
                      loading={index < 8 ? "eager" : "lazy"}
                    />

                    <span className="pg-photo-shade" />

                    <span className="pg-photo-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pg-photo-category">{photo.category}</span>

                    <span className="pg-photo-open">
                      <ArrowUpRight size={20} />
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="pg-end-note">
              <span />
              <p>Every photograph tells a story.</p>
              <span />
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="pg-closing">
          <div className="pg-container pg-closing-inner">
            <div>
              <span className="pg-closing-kicker">A COMMUNITY. MANY STORIES.</span>
              <h2>
                The memories we make
                <br />
                <em>stay with us.</em>
              </h2>
            </div>

            <a href="/contact" className="pg-contact-link">
              Connect with our school <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <SchoolSubpageFooter />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="pg-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <button
              type="button"
              className="pg-lightbox-close"
              onClick={closePreview}
              aria-label="Close photo preview"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              className="pg-lightbox-arrow pg-lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={30} />
            </button>

            <motion.div
              className="pg-lightbox-content"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={getPhotoUrl(selectedPhoto.file)}
                alt={`${selectedPhoto.category} at The Emerald Heights World School`}
              />

              <div className="pg-lightbox-caption">
                <span>{selectedPhoto.category}</span>
                <p>{selectedPhoto.file}</p>
                <small>
                  {selectedIndex + 1} / {filteredPhotos.length}
                </small>
              </div>
            </motion.div>

            <button
              type="button"
              className="pg-lightbox-arrow pg-lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
