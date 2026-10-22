
import { useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Globe2,
  Earth,
  MessagesSquare,
  Handshake,
  Landmark,
  Lightbulb,
  Users,
  Compass,
  Sparkles,
  BookOpen,
  HeartHandshake,
} from "lucide-react";

import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";

import "./Internationalism.css";

const globalValues = [
  {
    icon: Globe2,
    number: "01",
    title: "Global Perspective",
    text: "Explore world issues, different viewpoints and the connections that shape our shared future.",
  },
  {
    icon: Handshake,
    number: "02",
    title: "Cultural Understanding",
    text: "Appreciate different traditions, identities and experiences with openness and respect.",
  },
  {
    icon: MessagesSquare,
    number: "03",
    title: "Dialogue & Diplomacy",
    text: "Learn to express ideas, listen carefully and work constructively through different opinions.",
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Responsible Leadership",
    text: "Develop the confidence to think critically, take initiative and contribute positively to society.",
  },
];

const munSkills = [
  {
    icon: BookOpen,
    title: "Research & Awareness",
    text: "Understand international affairs and investigate the background of global challenges.",
  },
  {
    icon: MessagesSquare,
    title: "Public Speaking",
    text: "Present arguments clearly, support ideas with research and communicate with confidence.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Collaboration",
    text: "Listen to different perspectives, build consensus and work towards shared solutions.",
  },
  {
    icon: Landmark,
    title: "Critical Thinking",
    text: "Evaluate complex issues and consider practical, balanced approaches to solving them.",
  },
];

const globalIssues = [
  {
    number: "01",
    title: "Climate & Sustainability",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Human Rights",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Peace & Cooperation",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=85",
  },
];

function InternationalismHero() {
  return (
    <section className="im-hero">
      <div className="im-hero-image" />
      <div className="im-hero-shade" />
      <div className="im-hero-content im-container">
        <motion.div
          className="im-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <span className="im-hero-kicker">
            <span /> LEARNING WITHOUT BORDERS
          </span>

          <h1>
            One world.
            <br />
            <em>Many perspectives.</em>
            <br />
            Endless possibilities.
          </h1>

          <p>
            Inspiring young minds to look beyond borders, understand diverse
            perspectives and become thoughtful contributors to a connected
            world.
          </p>

          <div className="im-hero-actions">
            <a className="im-btn im-btn-light" href="#our-approach">
              Explore internationalism <ArrowRight size={17} />
            </a>
            <a className="im-hero-link" href="#mun">
              Discover MUN <span>↓</span>
            </a>
          </div>
        </motion.div>

        <div className="im-hero-orbit" aria-hidden="true">
          <div className="im-orbit im-orbit-one" />
          <div className="im-orbit im-orbit-two" />
          <div className="im-orbit-core">
            <Earth size={66} strokeWidth={0.85} />
          </div>
          <span className="im-orbit-label im-orbit-label-one">
            UNDERSTAND
          </span>
          <span className="im-orbit-label im-orbit-label-two">
            CONNECT
          </span>
          <span className="im-orbit-label im-orbit-label-three">
            CONTRIBUTE
          </span>
        </div>
      </div>

      <div className="im-hero-footer im-container">
        <span>OPEN MINDS</span>
        <i />
        <span>SHARED VALUES</span>
        <i />
        <span>GLOBAL CITIZENSHIP</span>
      </div>
    </section>
  );
}

function InternationalismIntro() {
  return (
    <section className="im-intro im-container" id="our-approach">
      <PageReveal>
        <div className="im-intro-topline">
          <SubpageEyebrow>OUR GLOBAL OUTLOOK</SubpageEyebrow>
          <span className="im-intro-index">01 — A WORLD OF LEARNING</span>
        </div>

        <div className="im-intro-grid">
          <h2>
            Educating minds.
            <br />
            <em>Connecting worlds.</em>
          </h2>

          <div className="im-intro-copy">
            <p>
              In an interconnected world, education means more than knowing
              what happens around us. It means understanding why it matters,
              appreciating different perspectives and recognising our shared
              responsibilities.
            </p>
            <p>
              At The Emerald Heights World School, internationalism encourages
              students to become open-minded, empathetic and informed
              individuals who can engage thoughtfully with the wider world.
            </p>
          </div>
        </div>
      </PageReveal>

      <div className="im-values-grid">
        {globalValues.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              className="im-value-card"
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="im-value-top">
                <span>{item.number}</span>
                <Icon size={24} strokeWidth={1.4} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="im-value-rule" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function MUNSection() {
  return (
    <section className="im-mun-section" id="mun">
      <div className="im-container">
        <div className="im-mun-layout">
          <PageReveal>
            <div className="im-mun-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=90"
                alt="Students engaging in a formal discussion"
                loading="lazy"
              />
              <div className="im-mun-image-overlay" />
              <div className="im-mun-image-caption">
                <span>LISTEN. DEBATE. COLLABORATE.</span>
                <strong>Ideas can shape tomorrow.</strong>
              </div>
              <div className="im-mun-image-mark">
                <Landmark size={25} strokeWidth={1.3} />
              </div>
            </div>
          </PageReveal>

          <PageReveal>
            <div className="im-mun-copy">
              <SubpageEyebrow>02 / MODEL UNITED NATIONS</SubpageEyebrow>
              <h2>
                Think globally.
                <br />
                <em>Lead thoughtfully.</em>
              </h2>
              <p>
                Model United Nations gives students an opportunity to explore
                international affairs by representing countries, discussing
                global challenges and working towards proposed solutions.
              </p>
              <p>
                Through research, debate and negotiation, students practise
                expressing ideas with clarity, listening to different
                viewpoints and collaborating on complex issues.
              </p>
              <a className="im-inline-link" href="#global-issues">
                Explore the issues <ArrowRight size={16} />
              </a>
            </div>
          </PageReveal>
        </div>

        <div className="im-mun-skills">
          {munSkills.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="im-mun-skill"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <span className="im-mun-skill-icon">
                  <Icon size={21} strokeWidth={1.5} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GlobalIssuesSection() {
  return (
    <section className="im-issues-section" id="global-issues">
      <div className="im-container">
        <PageReveal>
          <div className="im-issues-heading">
            <div>
              <SubpageEyebrow>03 / UNDERSTANDING OUR WORLD</SubpageEyebrow>
              <h2>
                Big questions.
                <br />
                <em>Meaningful conversations.</em>
              </h2>
            </div>
            <p>
              Exploring global issues helps students connect classroom
              learning with real-world questions and consider how thoughtful
              cooperation can make a difference.
            </p>
          </div>
        </PageReveal>

        <div className="im-issues-grid">
          {globalIssues.map((issue, index) => (
            <motion.article
              className="im-issue-card"
              key={issue.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="im-issue-image">
                <img src={issue.image} alt="" loading="lazy" />
                <span>{issue.number}</span>
              </div>
              <div className="im-issue-title">
                <h3>{issue.title}</h3>
                <ArrowRight size={18} />
              </div>
            </motion.article>
          ))}
        </div>

        <p className="im-issues-note">
          These are examples of global themes students can explore through
          research, discussion and collaborative learning.
        </p>
      </div>
    </section>
  );
}

function GlobalCommunitySection() {
  return (
    <section className="im-community-section">
      <div className="im-community-background" />
      <div className="im-community-shade" />

      <div className="im-container im-community-layout">
        <PageReveal>
          <div className="im-community-copy">
            <SubpageEyebrow light>04 / A CONNECTED COMMUNITY</SubpageEyebrow>
            <h2>
              Learning beyond
              <br />
              <em>classroom walls.</em>
            </h2>
            <p>
              Internationalism is also about connecting with people, learning
              from experiences beyond our immediate surroundings and
              recognising the value of shared humanity.
            </p>
            <p>
              The Emerald Heights World School has announced its membership
              in the Round Square global community, creating a connection to
              a wider network focused on learning beyond the classroom.
            </p>
            <a
              className="im-btn im-btn-gold"
              href="https://ehws.edu.in/the-emerald-heights-world-school-joins-a-global-community-of-schools-committed-to-learning-beyond-the-classroom/"
              target="_blank"
              rel="noreferrer"
            >
              Read the school announcement <ArrowRight size={16} />
            </a>
          </div>
        </PageReveal>

        <motion.div
          className="im-community-emblem"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="im-emblem-ring">
            <Globe2 size={67} strokeWidth={0.85} />
          </div>
          <span>ONE SHARED WORLD</span>
          <strong>Many ways to make a difference.</strong>
        </motion.div>
      </div>
    </section>
  );
}

function InternationalismOutcomes() {
  const outcomes = [
    {
      icon: Compass,
      title: "Curiosity",
      text: "Ask questions and explore perspectives beyond familiar experiences.",
    },
    {
      icon: HeartHandshake,
      title: "Empathy",
      text: "Respect differences and understand experiences beyond your own.",
    },
    {
      icon: Users,
      title: "Collaboration",
      text: "Work with others to exchange ideas and develop shared solutions.",
    },
    {
      icon: Sparkles,
      title: "Positive Impact",
      text: "Use knowledge and confidence to contribute thoughtfully to society.",
    },
  ];

  return (
    <section className="im-outcomes-section">
      <div className="im-container">
        <PageReveal>
          <div className="im-outcomes-heading">
            <SubpageEyebrow>05 / THE LEARNER'S JOURNEY</SubpageEyebrow>
            <h2>
              Global outlook.
              <br />
              <em>Human values.</em>
            </h2>
            <p>
              Internationalism helps shape learners who are ready to engage
              with the world thoughtfully and treat others with understanding
              and respect.
            </p>
          </div>
        </PageReveal>

        <div className="im-outcomes-grid">
          {outcomes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                className="im-outcome"
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Icon size={27} strokeWidth={1.4} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InternationalismClosing() {
  return (
    <section className="im-closing-section">
      <div className="im-container">
        <PageReveal>
          <span className="im-closing-kicker">THE WORLD IS OUR CLASSROOM</span>
          <h2>
            Think with an open mind.
            <br />
            <em>Act with a global heart.</em>
          </h2>
          <p>
            Every perspective we understand brings us one step closer to a
            more thoughtful, inclusive and connected world.
          </p>
          <a className="im-btn im-btn-light" href="/#contact">
            Connect with our school <ArrowRight size={17} />
          </a>
        </PageReveal>
      </div>
    </section>
  );
}

export default function Internationalism() {
  useEffect(() => {
    document.title =
      "Internationalism | The Emerald Heights World School";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="academic-page im-page">
      <SchoolSubpageHeader currentPage="Internationalism" />
      <main>
        <InternationalismHero />
        <InternationalismIntro />
        <MUNSection />
        <GlobalIssuesSection />
        <GlobalCommunitySection />
        <InternationalismOutcomes />
        <InternationalismClosing />
      </main>
      <SchoolSubpageFooter />
    </div>
  );
}
