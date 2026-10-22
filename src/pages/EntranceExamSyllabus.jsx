
import React from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Download,
} from "lucide-react";
import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";
import "./EntranceExamSyllabus.css";

const syllabusResources = [
  { className: "Class I", file: "/Entrance-Exam-Syllabus-Class-I.pdf" },
  { className: "Class II", file: "/Entrance-Exam-Syllabus-Class-II.pdf" },
  { className: "Class III", file: "/Entrance-Exam-Syllabus-Class-III.pdf" },
  { className: "Class IV", file: "/Entrance-Exam-Syllabus-Class-IV.pdf" },
  { className: "Class V", file: "/Entrance-Exam-Syllabus-Class-V.pdf" },
  { className: "Class VI", file: "/Entrance-Exam-Syllabus-Class-VI.pdf" },
  { className: "Class VII", file: "/Entrance-Exam-Syllabus-Class-VII.pdf" },
  { className: "Class VIII", file: "/Entrance-Exam-Syllabus-Class-VIII.pdf" },
  { className: "Class IX", file: "/Entrance-Exam-Syllabus-Class-IX.pdf" },
];

export default function EntranceExamSyllabus() {
  return (
    <div className="ees-page">
      <SchoolSubpageHeader currentPage="Entrance Exam Syllabus" />

      <main>
        <section className="ees-hero">
          <div className="ees-hero-orb ees-orb-one" />
          <div className="ees-hero-orb ees-orb-two" />

          <div className="ees-hero-content">
            <PageReveal>
              <SubpageEyebrow>ADMISSIONS · SESSION 2027–28</SubpageEyebrow>

              <h1>
                Entrance Exam <em>Syllabus</em>
              </h1>

              <p>
                Prepare for the next step in your child's academic journey.
                Select the relevant class below to access its entrance
                examination syllabus.
              </p>

              <div className="ees-hero-note">
                <BookOpen size={18} />
                <span>Class-wise syllabus · Classes I–IX</span>
              </div>
            </PageReveal>
          </div>
        </section>

        <section className="ees-content">
          <div className="ees-container">
            <PageReveal>
              <div className="ees-section-heading">
                <SubpageEyebrow>SYLLABUS LIBRARY</SubpageEyebrow>
                <h2>Choose your class.</h2>
                <p>
                  Select a class to open its entrance examination syllabus.
                  Please ensure that you choose the correct class.
                </p>
              </div>
            </PageReveal>

            <div className="ees-grid">
              {syllabusResources.map((item, index) => (
                <PageReveal key={item.className}>
                  <motion.a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ees-card"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="ees-card-top">
                      <span className="ees-card-icon">
                        <GraduationCap size={23} />
                      </span>
                      <span className="ees-card-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>
                      ENTRANCE EXAM SYLLABUS
                      <span>{item.className.toUpperCase()}</span>
                    </h3>

                    <div className="ees-card-action">
                      <span>
                        <Download size={16} />
                        View syllabus
                      </span>
                      <ArrowUpRight size={18} />
                    </div>
                  </motion.a>
                </PageReveal>
              ))}
            </div>

            <PageReveal>
              <div className="ees-help-panel">
                <div className="ees-help-icon">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3>Need help with the syllabus?</h3>
                  <p>
                    Contact the school to confirm the applicable syllabus
                    and admission requirements for your child's class.
                  </p>
                </div>
                <a href="mailto:info@ehws.edu.in">
                  Contact school <ArrowUpRight size={16} />
                </a>
              </div>
            </PageReveal>

            <a className="ees-back-link" href="/i-to-ix">
              <ArrowLeft size={17} />
              Back to I to IX Admissions
            </a>
          </div>
        </section>
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
