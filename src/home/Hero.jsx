
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = "/images/ehws-campus.jpg";
    image.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="ehws-hero" id="home">
      <div
        className={`ehws-hero__image ${
          imageLoaded ? "is-loaded" : ""
        }`}
        aria-hidden="true"
      />

      <div className="ehws-hero__overlay" aria-hidden="true" />

      <div className="ehws-hero__grain" aria-hidden="true" />

      <div className="ehws-hero__content">
        <div className="ehws-hero__eyebrow">
          <span className="ehws-hero__line" />
          <span>EXCELLENCE · CHARACTER · POSSIBILITY</span>
          <span className="ehws-hero__line" />
        </div>

        <p className="ehws-hero__welcome">
          Welcome to
        </p>

        <h1 className="ehws-hero__title">
          <span className="ehws-hero__title-line">
            The Emerald Heights
          </span>

          <span className="ehws-hero__title-line ehws-hero__title-accent">
            World School
          </span>
        </h1>

        <p className="ehws-hero__description">
          A place to discover your potential, nurture your curiosity,
          and grow into the person you aspire to be.
        </p>

        <div className="ehws-hero__actions">
          <a className="ehws-hero__button" href="#about">
            <span>Discover our school</span>
            <ArrowUpRight size={19} strokeWidth={1.7} />
          </a>

          <a
            className="ehws-hero__secondary"
            href="#campus"
          >
            Explore campus life
            <ArrowUpRight size={17} strokeWidth={1.7} />
          </a>
        </div>
      </div>

      <div className="ehws-hero__bottom">
        <a className="ehws-hero__scroll" href="#about">
          <span className="ehws-hero__scroll-icon">
            <ArrowDown size={17} />
          </span>

          <span>Scroll to discover</span>
        </a>

        <div className="ehws-hero__caption">
          <span className="ehws-hero__caption-index">01</span>
          <span className="ehws-hero__caption-rule" />
          <span>A journey of discovery</span>
        </div>
      </div>
    </section>
  );
}
