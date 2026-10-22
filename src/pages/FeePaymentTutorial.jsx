import { useEffect } from "react";
import { motion } from "motion/react";
import {
  PlayCircle,
  ShieldCheck,
  CreditCard,
  CircleHelp,
  ArrowUpRight,
  MonitorPlay,
} from "lucide-react";

import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
} from "./AboutPageShared";

import "./FeePaymentTutorial.css";

const paymentSteps = [
  {
    number: "01",
    title: "Watch the tutorial",
    description:
      "Play the video and follow the payment instructions shown on the screen.",
    icon: MonitorPlay,
  },
  {
    number: "02",
    title: "Verify payment details",
    description:
      "Carefully review the details displayed before proceeding with a payment.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Keep confirmation",
    description:
      "After completing your payment, retain the confirmation or receipt for reference.",
    icon: CreditCard,
  },
];

export default function FeePaymentTutorial() {
  useEffect(() => {
    document.title = "Fee Payment Tutorial | The Emerald Heights World School";

    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="academic-page fee-tutorial-page">
      <SchoolSubpageHeader currentPage="Fee Payment Tutorial" />

      <main>
        <section className="fee-tutorial-hero">
          <div className="fee-tutorial-hero-pattern" />

          <div className="fee-tutorial-container fee-tutorial-hero-inner">
            <motion.div
              className="fee-tutorial-hero-copy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <span className="fee-tutorial-eyebrow">
                <span />
                PARENT RESOURCE
              </span>

              <h1>
                Fee Payment,
                <br />
                <em>Made Simple.</em>
              </h1>

              <p>
                Follow our step-by-step video tutorial to understand the
                school's online fee payment process.
              </p>

              <a href="#fee-tutorial-video" className="fee-tutorial-hero-link">
                <PlayCircle size={18} />
                Watch Tutorial
              </a>
            </motion.div>

            <motion.div
              className="fee-tutorial-hero-art"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="fee-tutorial-art-frame">
                <div className="fee-tutorial-art-icon">
                  <CreditCard size={58} strokeWidth={1.15} />
                </div>

                <span>FEE PAYMENT GUIDE</span>

                <div className="fee-tutorial-art-rule" />

                <p>A helpful guide for parents</p>
              </div>
            </motion.div>
          </div>

          <div className="fee-tutorial-hero-rule" />
        </section>

        <section className="fee-tutorial-video-section" id="fee-tutorial-video">
          <div className="fee-tutorial-container">
            <PageReveal>
              <div className="fee-tutorial-section-heading">
                <div>
                  <span className="fee-tutorial-eyebrow fee-tutorial-eyebrow-dark">
                    <span />
                    VIDEO GUIDE
                  </span>

                  <h2>
                    Follow along,
                    <br />
                    <em>step by step.</em>
                  </h2>
                </div>

                <p>
                  Watch the complete tutorial below. You can pause, replay any
                  section, adjust the volume, or switch to fullscreen whenever
                  needed.
                </p>
              </div>
            </PageReveal>

            <PageReveal>
              <div className="fee-tutorial-player-card">
                <div className="fee-tutorial-player-topbar">
                  <div className="fee-tutorial-player-label">
                    <span className="fee-tutorial-status-dot" />
                    OFFICIAL PAYMENT TUTORIAL
                  </div>

                  <span className="fee-tutorial-player-caption">
                    EHWS · Parent Guide
                  </span>
                </div>

                <div className="fee-tutorial-video-wrap">
                  <video
                    className="fee-tutorial-video"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="School fee payment tutorial video"
                  >
                    <source
                      src="/videos/Fee-Payment-Tutorial.mp4"
                      type="video/mp4"
                    />
                    
                    Your browser does not support HTML video. Please use an
                    updated browser to watch this tutorial.
                  </video>
                </div>

                <div className="fee-tutorial-player-footer">
                  <div className="fee-tutorial-player-footer-icon">
                    <PlayCircle size={21} />
                  </div>

                  <div>
                    <strong>Fee Payment Tutorial</strong>
                    <span>
                      Use the video controls to play and navigate through the
                      tutorial.
                    </span>
                  </div>
                </div>
              </div>
            </PageReveal>

            <p className="fee-tutorial-video-note">
              For your security, verify the payment details carefully before
              confirming any transaction.
            </p>
          </div>
        </section>

        <section className="fee-tutorial-steps-section">
          <div className="fee-tutorial-container">
            <PageReveal>
              <div className="fee-tutorial-steps-heading">
                <span className="fee-tutorial-eyebrow fee-tutorial-eyebrow-dark">
                  <span />
                  BEFORE YOU BEGIN
                </span>

                <h2>Keep these things in mind.</h2>

                <p>A few useful reminders while following the tutorial.</p>
              </div>
            </PageReveal>

            <div className="fee-tutorial-steps-grid">
              {paymentSteps.map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <PageReveal key={step.number}>
                    <motion.article
                      className="fee-tutorial-step-card"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="fee-tutorial-step-top">
                        <span>{step.number}</span>

                        <div className="fee-tutorial-step-icon">
                          <StepIcon size={23} strokeWidth={1.5} />
                        </div>
                      </div>

                      <h3>{step.title}</h3>

                      <p>{step.description}</p>
                    </motion.article>
                  </PageReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="fee-tutorial-help-section">
          <div className="fee-tutorial-container fee-tutorial-help-inner">
            <div className="fee-tutorial-help-icon">
              <CircleHelp size={27} strokeWidth={1.4} />
            </div>

            <div className="fee-tutorial-help-copy">
              <span>NEED ASSISTANCE?</span>

              <h2>We're here to help.</h2>

              <p>
                If you need assistance with the fee payment process, please
                contact the school through its official contact page.
              </p>
            </div>

            <a href="/contact" className="fee-tutorial-contact-link">
              Contact School
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
