
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import "./AdmissionPopup.css";

export default function AdmissionPopup() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  
useEffect(() => {
  if (location.pathname !== "/") {
    setIsOpen(false);
    return;
  }

  // Pehle loading animation ko complete hone ka time do.
  setIsOpen(false);

  const showTimer = window.setTimeout(() => {
  setIsOpen(true);
}, 5000);

  return () => {
    window.clearTimeout(showTimer);
  };
}, [location.pathname]);


  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && location.pathname === "/" && (
        <motion.div
          className="admission-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <motion.section
            className="admission-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="admission-popup-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <button
              type="button"
              className="admission-popup-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close admission announcement"
            >
              CLOSE <X size={15} />
            </button>

            <div className="admission-popup-image">
              <img
                src="/admission-popup-2027-28.jpg"
                alt="The Emerald Heights World School campus"
              />

              <div className="admission-popup-image-shade" />

              <div className="admission-popup-badge">
                NO ADMISSION FEE
                <span>SESSION 2027–28</span>
              </div>
            </div>

            <div className="admission-popup-body">
              <div className="admission-popup-main">
                <span className="admission-popup-eyebrow">
                  THE EMERALD HEIGHTS WORLD SCHOOL
                </span>

                <h2 id="admission-popup-title">
                  Registrations
                  <br />
                  <em>Open Now</em>
                </h2>

                <div className="admission-popup-session">
                  FOR THE SESSION 2027–28
                </div>

                <p className="admission-popup-classes">
                  Nursery to Class IX
                </p>

                <p className="admission-popup-description">
                  Begin your child's journey of learning, discovery and growth
                  with us.
                </p>

                <Link
                  to="/online-enquiry-i-to-ix"
                  className="admission-popup-cta"
                  onClick={() => setIsOpen(false)}
                >
                  Start an enquiry <ArrowUpRight size={18} />
                </Link>
              </div>

              <aside className="admission-popup-details">
                <span className="admission-popup-detail-label">
                  ADMISSIONS 2027–28
                </span>

                <h3>Your child's next chapter starts here.</h3>

                <p>
                  Contact our admissions team for class availability,
                  registration details and campus visit information.
                </p>

                <a href="tel:7880091400">
                  7880091400–401
                </a>

                <a href="mailto:info@ehws.edu.in">
                  info@ehws.edu.in
                </a>

                <div className="admission-popup-footer-note">
                  <span className="admission-popup-dot" />
                  Limited seats available for selected classes.
                </div>
              </aside>
            </div>

            <div className="admission-popup-bottom">
              <span>LEARN</span>
              <span>DISCOVER</span>
              <span>GROW</span>
              <span>ehws.edu.in</span>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
