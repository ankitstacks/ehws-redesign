
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./WebsitePreloader.css";

export default function WebsitePreloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="ehws-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          aria-label="Loading The Emerald Heights World School"
          role="status"
        >
          <div className="ehws-loader-glow" />

          <motion.div
            className="ehws-loader-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <motion.div
              className="ehws-loader-logo-wrap"
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <motion.div
                className="ehws-loader-ring"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <img
                src="/images/ehws-logo-white.png"
                alt="Emerald Heights World School"
                className="ehws-loader-logo"
              />
            </motion.div>

            <motion.div
              className="ehws-loader-school-name"
              initial={{ opacity: 0, letterSpacing: "5px" }}
              animate={{ opacity: 1, letterSpacing: "3px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              EMERALD HEIGHTS
            </motion.div>

            <div className="ehws-loader-subtitle">
              THE WORLD SCHOOL
            </div>

            <div className="ehws-loader-track">
              <motion.div
                className="ehws-loader-progress"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.15, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              className="ehws-loader-caption"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              A COMMUNITY THAT CARES
            </motion.p>
          </motion.div>

          <div className="ehws-loader-bottom-line" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
