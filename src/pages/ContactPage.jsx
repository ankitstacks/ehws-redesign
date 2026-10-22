
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import {
  SchoolSubpageHeader,
  SchoolSubpageFooter,
  PageReveal,
  SubpageEyebrow,
} from "./AboutPageShared";

import "./ContactPage.css";

const schoolAddress =
  "Survey No. 26/1 and 27/1, Balyakheda, Near Sheraton Grand Palace Hotel, Between Omaxe City 1 and DLF Garden City, AB Bypass Road, Indore, Madhya Pradesh 453771";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=The+Emerald+Heights+World+School+Balyakheda+Indore";

const contactCards = [
  {
    icon: Phone,
    label: "GIVE US A CALL",
    title: "Phone",
    description: "Speak with the school office for assistance.",
    value: "7880091400-401",
    href: "tel:7880091400",
    action: "Call the school",
  },
  {
    icon: Mail,
    label: "WRITE TO US",
    title: "Email",
    description: "Have a question? Send us an email.",
    value: "info@ehws.edu.in",
    href: "mailto:info@ehws.edu.in",
    action: "Send an email",
  },
  {
    icon: MapPin,
    label: "COME VISIT US",
    title: "Location",
    description: "Find our school in Balyakheda, Indore.",
    value: "Indore, Madhya Pradesh",
    href: mapUrl,
    action: "Get directions",
  },
  {
    icon: BriefcaseBusiness,
    label: "GROW WITH US",
    title: "Career",
    description: "Connect with us regarding professional opportunities.",
    value: "Career enquiries",
    href: "mailto:info@ehws.edu.in?subject=Career%20Enquiry",
    action: "Contact for careers",
  },
];

function ContactHero() {
  return (
    <section className="contact-page-hero">
      <div className="contact-page-hero-image">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90"
          alt="Students learning together in a classroom"
          fetchPriority="high"
        />
      </div>

      <div className="contact-page-hero-overlay" />

      <div className="contact-page-hero-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="contact-page-hero-content">
        <motion.div
          className="contact-page-breadcrumb"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <strong>Contact Us</strong>
        </motion.div>

        <motion.div
          className="contact-page-hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
        >
          <SubpageEyebrow number="01" label="LET'S START A CONVERSATION" light />

          <p className="contact-page-kicker">
            We would be glad to hear from you.
          </p>

          <h1>
            Every great
            <br />
            journey starts
            <br />
            <em>with a hello.</em>
          </h1>

          <p className="contact-page-hero-description">
            Whether you have a question about our school, need directions or
            would like to explore opportunities, we are here to help.
          </p>

          <a href="#contact-options" className="contact-page-button contact-page-button-gold">
            Get in touch <ArrowDown size={17} />
          </a>
        </motion.div>

        <div className="contact-page-hero-bottom">
          <span>THE EMERALD HEIGHTS WORLD SCHOOL · INDORE</span>
          <a href="#contact-options">
            EXPLORE CONTACT OPTIONS <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactOptions() {
  return (
    <section className="contact-page-section contact-page-options" id="contact-options">
      <div className="contact-page-container">
        <PageReveal className="contact-page-section-heading">
          <SubpageEyebrow number="02" label="HOW CAN WE HELP?" />

          <h2>
            Let's find the
            <br />
            <em>right way to connect.</em>
          </h2>

          <p>
            Choose the contact option that works best for you. Our school
            contact details are listed below for your convenience.
          </p>
        </PageReveal>

        <div className="contact-page-card-grid">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <PageReveal
                key={card.title}
                className="contact-page-card"
                delay={index * 0.07}
              >
                <div className="contact-page-card-top">
                  <span>{card.label}</span>
                  <Icon size={25} strokeWidth={1.4} />
                </div>

                <h3>{card.title}</h3>
                <p>{card.description}</p>

                <a
                  href={card.href}
                  className="contact-page-card-value"
                  target={card.title === "Location" ? "_blank" : undefined}
                  rel={card.title === "Location" ? "noreferrer" : undefined}
                >
                  {card.value}
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href={card.href}
                  className="contact-page-card-action"
                  target={card.title === "Location" ? "_blank" : undefined}
                  rel={card.title === "Location" ? "noreferrer" : undefined}
                >
                  {card.action} <ArrowRight size={15} />
                </a>
              </PageReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "General enquiry",
    message: "",
  });

  const [validationMessage, setValidationMessage] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setValidationMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Website enquiry: ${form.enquiryType}`
    );

    const body = encodeURIComponent(
      [
        "Hello Emerald Heights World School,",
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Enquiry type: ${form.enquiryType}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    setValidationMessage(
      "Your email app should open with your enquiry details. Please send the email to complete your enquiry."
    );

    window.location.href =
      `mailto:info@ehws.edu.in?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-page-section contact-page-form-section" id="send-enquiry">
      <div className="contact-page-container contact-page-form-layout">
        <PageReveal className="contact-page-form-intro">
          <SubpageEyebrow number="03" label="SEND US A MESSAGE" />

          <h2>
            What's on
            <br />
            <em>your mind?</em>
          </h2>

          <p>
            Share your question or enquiry with us. Fill in the details and
            your default email application will open with a prepared message
            addressed to the school.
          </p>

          <div className="contact-page-response-note">
            <span className="contact-page-response-icon">
              <MessageCircle size={21} />
            </span>

            <div>
              <strong>We are listening.</strong>
              <span>
                For immediate assistance, you can also call the school office.
              </span>
            </div>
          </div>

          <a href="tel:7880091400" className="contact-page-call-link">
            <Phone size={17} />
            7880091400-401
            <ArrowUpRight size={16} />
          </a>
        </PageReveal>

        <PageReveal className="contact-page-form-panel" delay={0.1}>
          <div className="contact-page-form-heading">
            <span>YOUR ENQUIRY</span>
            <h3>Let's connect.</h3>
            <p>Fields marked with * are required.</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-page-form">
            <div className="contact-page-form-row">
              <label>
                Your name *
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  value={form.name}
                  onChange={updateField}
                  required
                  maxLength={100}
                />
              </label>

              <label>
                Email address *
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={form.email}
                  onChange={updateField}
                  required
                  maxLength={150}
                />
              </label>
            </div>

            <div className="contact-page-form-row">
              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your contact number"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={updateField}
                  maxLength={20}
                />
              </label>

              <label>
                Enquiry type *
                <select
                  name="enquiryType"
                  value={form.enquiryType}
                  onChange={updateField}
                  required
                >
                  <option>General enquiry</option>
                  <option>Admissions</option>
                  <option>Academic information</option>
                  <option>Career enquiry</option>
                  <option>Campus visit</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <label>
              Your message *
              <textarea
                name="message"
                placeholder="Tell us how we can help..."
                value={form.message}
                onChange={updateField}
                required
                rows={5}
                maxLength={3000}
              />
            </label>

            <div className="contact-page-form-submit">
              <button type="submit" className="contact-page-button contact-page-button-dark">
                Prepare enquiry <Send size={16} />
              </button>

              <span>
                <CheckCircle2 size={15} />
                Your email app will handle sending.
              </span>
            </div>

            {validationMessage && (
              <p className="contact-page-form-notice" role="status">
                {validationMessage}
              </p>
            )}
          </form>
        </PageReveal>
      </div>
    </section>
  );
}

function ContactLocation() {
  return (
    <section className="contact-page-location-section" id="school-location">
      <div className="contact-page-location-image">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85"
          alt="School campus building"
          loading="lazy"
        />
      </div>

      <div className="contact-page-location-overlay" />

      <div className="contact-page-container contact-page-location-inner">
        <PageReveal className="contact-page-location-copy">
          <SubpageEyebrow number="04" label="FIND YOUR WAY TO US" light />

          <h2>
            A place to
            <br />
            <em>meet, learn & grow.</em>
          </h2>

          <p>
            Visit The Emerald Heights World School at Balyakheda on AB Bypass
            Road, Indore, Madhya Pradesh.
          </p>

          <div className="contact-page-address">
            <span className="contact-page-address-icon">
              <MapPin size={23} />
            </span>

            <div>
              <strong>The Emerald Heights World School</strong>
              <p>{schoolAddress}</p>
            </div>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-page-button contact-page-button-gold"
          >
            Open Google Maps <ArrowUpRight size={17} />
          </a>
        </PageReveal>

        <PageReveal className="contact-page-location-card" delay={0.12}>
          <div className="contact-page-location-card-icon">
            <MapPin size={25} />
          </div>
          <span>OUR LOCATION</span>
          <h3>Indore, Madhya Pradesh</h3>
          <p>
            Survey No. 26/1 and 27/1, Balyakheda, AB Bypass Road.
          </p>
          <a href={mapUrl} target="_blank" rel="noreferrer">
            Get directions <ArrowRight size={16} />
          </a>
        </PageReveal>
      </div>
    </section>
  );
}

function ContactClosing() {
  return (
    <section className="contact-page-closing">
      <PageReveal className="contact-page-closing-content">
        <span className="contact-page-closing-symbol">✳</span>

        <SubpageEyebrow number="05" label="WE LOOK FORWARD TO HEARING FROM YOU" />

        <h2>
          Let's make
          <br />
          <em>the first connection.</em>
        </h2>

        <p>
          Whether you're exploring the school or simply have a question, we
          welcome you to get in touch.
        </p>

        <div className="contact-page-closing-actions">
          <a
            href="mailto:info@ehws.edu.in"
            className="contact-page-button contact-page-button-dark"
          >
            Email the school <ArrowUpRight size={17} />
          </a>

          <Link to="/" className="contact-page-closing-link">
            Return to homepage <ArrowRight size={16} />
          </Link>
        </div>
      </PageReveal>
    </section>
  );
}

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | The Emerald Heights World School";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="academic-page contact-page">
      <SchoolSubpageHeader currentPage="Contact Us" />

      <main>
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <ContactLocation />
        <ContactClosing />
      </main>

      <SchoolSubpageFooter />
    </div>
  );
}
