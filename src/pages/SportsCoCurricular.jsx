
import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Dumbbell,
  Trophy,
  Target,
  Waves,
  CircleDot,
  Palette,
  Music2,
  Drama,
  Sparkles,
  Heart,
  Activity,
  Users,
  ChevronRight,
} from "lucide-react";

import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";

import "./SportsCoCurricular.css";

const sports = [
  {
    name: "Badminton",
    category: "Indoor",
    number: "01",
    detail: "Speed, agility and precision come together on the court.",
    facilities: "Seven wooden courts",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=85",
    icon: Activity,
  },
  {
    name: "Basketball",
    category: "Outdoor",
    number: "02",
    detail: "Building teamwork, coordination and confident decision-making.",
    facilities: "Six hard courts",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=85",
    icon: CircleDot,
  },
  {
    name: "Cricket",
    category: "Outdoor",
    number: "03",
    detail: "Learning strategy, patience and the value of playing as a team.",
    facilities: "International-standard ground",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85",
    icon: Trophy,
  },
  {
    name: "Football",
    category: "Outdoor",
    number: "04",
    detail: "Developing stamina, sportsmanship and collective achievement.",
    facilities: "Football ground",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85",
    icon: CircleDot,
  },
  {
    name: "Swimming",
    category: "Aquatic",
    number: "05",
    detail: "Growing confidence in the water while building fitness and endurance.",
    facilities: "Swimming programme",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=85",
    icon: Waves,
  },
  {
    name: "Tennis",
    category: "Outdoor",
    number: "06",
    detail: "Sharpening focus, footwork and tactical thinking with every rally.",
    facilities: "Six synthetic courts",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1000&q=85",
    icon: CircleDot,
  },
  {
    name: "Chess",
    category: "Indoor",
    number: "07",
    detail: "Encouraging logical reasoning, concentration and thoughtful choices.",
    facilities: "Chess for primary classes",
    image:
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=1000&q=85",
    icon: Target,
  },
  {
    name: "Squash",
    category: "Indoor",
    number: "08",
    detail: "Combining quick reflexes, movement and strategic play.",
    facilities: "Six glass-back courts",
    image:
      "https://images.unsplash.com/photo-1593786481097-9b7c1e4f9f5d?auto=format&fit=crop&w=1000&q=85",
    icon: Activity,
  },
  {
    name: "Table Tennis",
    category: "Indoor",
    number: "09",
    detail: "Training hand-eye coordination, precision and fast reactions.",
    facilities: "15 tables",
    image:
      "https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&w=1000&q=85",
    icon: CircleDot,
  },
  {
    name: "Skating",
    category: "Outdoor",
    number: "10",
    detail: "Developing balance, coordination and confidence through movement.",
    facilities: "Dedicated skating rink",
    image:
      "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&w=1000&q=85",
    icon: Activity,
  },
  {
    name: "Shooting",
    category: "Indoor",
    number: "11",
    detail: "Practising concentration, discipline and controlled precision.",
    facilities: "Indoor shooting galleries",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=85",
    icon: Target,
  },
  {
    name: "Yoga & Fitness",
    category: "Wellness",
    number: "12",
    detail: "Supporting balance, flexibility, mindfulness and physical wellbeing.",
    facilities: "Yoga and fitness activities",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=85",
    icon: Heart,
  },
];

const creativeActivities = [
  {
    title: "Dance",
    subtitle: "Movement & Expression",
    description:
      "Explore classical and Western dance forms while developing rhythm, expression and cultural appreciation.",
    icon: Activity,
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Music",
    subtitle: "Find Your Rhythm",
    description:
      "Discover vocal and instrumental music through practice, collaboration and performance.",
    icon: Music2,
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Art & Craft",
    subtitle: "Ideas into Art",
    description:
      "Experiment with colours, materials and techniques to develop original ideas and creative confidence.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Dramatics",
    subtitle: "Stories on Stage",
    description:
      "Build communication, imagination and confidence through theatre and expressive performance.",
    icon: Drama,
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=85",
  },
];

const otherSports = [
  "Volleyball",
  "Squash",
  "Martial Arts",
  "Gymnastics",
  "Handball",
  "Netball",
  "Throw Ball",
  "Billiards",
];

const filters = ["All", "Indoor", "Outdoor", "Aquatic", "Wellness"];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`sc-section-heading ${centered ? "is-centered" : ""}`}>
      <SubpageEyebrow>{eyebrow}</SubpageEyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SportsHero() {
  return (
    <section className="sc-hero">
      <div className="sc-hero-image" />
      <div className="sc-hero-overlay" />
      <div className="sc-hero-grain" />

      <div className="sc-hero-content">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="sc-hero-kicker">
            <span /> BEYOND THE CLASSROOM
          </span>

          <h1>
            Discover your
            <br />
            <em>strength.</em> Find your
            <br />
            <span>passion.</span>
          </h1>

          <p>
            From the playing field to the creative studio, every experience
            helps our students discover their abilities, build character and
            grow with confidence.
          </p>

          <div className="sc-hero-actions">
            <a href="#sports" className="sc-btn sc-btn-light">
              Explore sports <ArrowRight size={17} />
            </a>
            <a href="#co-curricular" className="sc-hero-text-link">
              Discover creativity <ArrowDown size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="sc-hero-bottom">
        <span>SPORTS</span>
        <span className="sc-hero-bottom-line" />
        <span>CREATIVITY</span>
        <span className="sc-hero-bottom-line" />
        <span>CHARACTER</span>
      </div>

      <div className="sc-hero-side-note">THE EMERALD HEIGHTS WORLD SCHOOL</div>
    </section>
  );
}

function SportsIntro() {
  return (
    <section className="sc-intro sc-container">
      <PageReveal>
        <div className="sc-intro-label">
          <span className="sc-small-line" />
          A CULTURE OF PARTICIPATION
        </div>

        <div className="sc-intro-grid">
          <h2>
            Growing beyond
            <br />
            <em>the ordinary.</em>
          </h2>

          <div className="sc-intro-copy">
            <p>
              We believe education extends far beyond textbooks. Sports and
              co-curricular experiences give students the opportunity to
              explore interests, learn from challenges and develop skills
              that stay with them for life.
            </p>
            <p>
              Through participation, practice and teamwork, students learn
              discipline, resilience, creativity and respect for others.
            </p>
          </div>
        </div>
      </PageReveal>

      <div className="sc-values-row">
        {[
          { icon: Trophy, title: "Sportsmanship", text: "Play fair. Grow strong." },
          { icon: Users, title: "Teamwork", text: "Achieve more together." },
          { icon: Sparkles, title: "Creativity", text: "Imagine without limits." },
          { icon: Heart, title: "Wellbeing", text: "Grow mind and body." },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              className="sc-value"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="sc-value-icon">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function SportsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSports = useMemo(
    () =>
      activeFilter === "All"
        ? sports
        : sports.filter((sport) => sport.category === activeFilter),
    [activeFilter]
  );

  return (
    <section className="sc-sports-section" id="sports">
      <div className="sc-container">
        <PageReveal>
          <SectionHeading
            eyebrow="01 / SPORTS & ATHLETICS"
            title={
              <>
                Find your <em>game.</em>
              </>
            }
            description="Explore opportunities to move, compete, challenge yourself and discover the athlete within."
          />
        </PageReveal>

        <div className="sc-filter-bar" aria-label="Filter sports">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "active" : ""}
              aria-pressed={activeFilter === filter}
            >
              {filter}
              {activeFilter === filter && <span />}
            </button>
          ))}
          <span className="sc-filter-count">
            {filteredSports.length.toString().padStart(2, "0")} ACTIVITIES
          </span>
        </div>

        <motion.div layout className="sc-sports-grid">
          {filteredSports.map((sport, index) => {
            const Icon = sport.icon;
            return (
              <motion.article
                layout
                key={sport.name}
                className="sc-sport-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              >
                <div className="sc-sport-image-wrap">
                  <img
                    src={sport.image}
                    alt={`${sport.name} activity`}
                    loading="lazy"
                  />
                  <span className="sc-sport-number">{sport.number}</span>
                  <span className="sc-sport-category">{sport.category}</span>
                  <div className="sc-sport-image-shade" />
                </div>

                <div className="sc-sport-card-body">
                  <div className="sc-sport-card-title">
                    <h3>{sport.name}</h3>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <p>{sport.detail}</p>
                  <div className="sc-sport-facility">
                    <span />
                    {sport.facilities}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function CoCurricularSection() {
  return (
    <section className="sc-creative-section" id="co-curricular">
      <div className="sc-container">
        <PageReveal>
          <SectionHeading
            eyebrow="02 / CO-CURRICULAR EXPERIENCES"
            title={
              <>
                Let creativity <em>lead.</em>
              </>
            }
            description="Every student has a story to tell, a skill to discover and a creative voice waiting to be heard."
          />
        </PageReveal>

        <div className="sc-creative-grid">
          {creativeActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.article
                className="sc-creative-card"
                key={activity.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="sc-creative-image">
                  <img src={activity.image} alt={activity.title} loading="lazy" />
                  <span className="sc-creative-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                </div>
                <div className="sc-creative-body">
                  <span className="sc-creative-subtitle">{activity.subtitle}</span>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  <span className="sc-creative-line" />
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="sc-studio-note">
          <Sparkles size={19} />
          <p>
            From dance and music to art, craft and dramatics, students are
            encouraged to explore their interests and learn through creative
            expression.
          </p>
        </div>
      </div>
    </section>
  );
}

function OtherActivities() {
  return (
    <section className="sc-more-section">
      <div className="sc-container sc-more-layout">
        <PageReveal>
          <div className="sc-more-copy">
            <SubpageEyebrow>03 / MORE TO EXPLORE</SubpageEyebrow>
            <h2>
              There is a place
              <br />
              for <em>every passion.</em>
            </h2>
            <p>
              A broad range of activities gives students opportunities to
              discover new interests, practise new skills and take on fresh
              challenges.
            </p>
          </div>
        </PageReveal>

        <div className="sc-activity-tags">
          {otherSports.map((activity, index) => (
            <motion.div
              key={activity}
              className="sc-activity-tag"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {activity}
              <ChevronRight size={16} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="sc-closing">
      <div className="sc-closing-image" />
      <div className="sc-closing-overlay" />
      <div className="sc-closing-content sc-container">
        <PageReveal>
          <SubpageEyebrow light>THE EMERALD EXPERIENCE</SubpageEyebrow>
          <h2>
            More than skills.
            <br />
            <em>A foundation for life.</em>
          </h2>
          <p>
            Every practice, performance and shared achievement is an
            opportunity to grow into a more confident, capable and
            compassionate individual.
          </p>
          <a href="/#contact" className="sc-btn sc-btn-gold">
            Connect with our school <ArrowRight size={17} />
          </a>
        </PageReveal>
      </div>
    </section>
  );
}

export default function SportsCoCurricular() {
  useEffect(() => {
    document.title =
      "Sports & Co-Curricular | The Emerald Heights World School";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="academic-page sc-page">
      <SchoolSubpageHeader currentPage="Sports & Co-Curricular" />
      <main>
        <SportsHero />
        <SportsIntro />
        <SportsSection />
        <CoCurricularSection />
        <OtherActivities />
        <ClosingSection />
      </main>
      <SchoolSubpageFooter />
    </div>
  );
}
