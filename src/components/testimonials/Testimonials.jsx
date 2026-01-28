import "./testimonials.css";
import Container from "../container/Container";
import SectionTitle from "../section-title/SectionTitle";
import { useRef, useState } from "react";

function Testimonials({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  function handlePlay() {
    videoRef.current.play();
    setIsPlaying(true);
  }

  function handleEnded() {
    setIsPlaying(false);
  }
  return (
    <section className="testimonials" id="testimonials">
      <Container>
        <div className="testimonials-top">
          <SectionTitle text={data.title} />
        </div>
        <div className="testimonials-content">
          <div className="testimonials-info">
            <img
              className="testimonials-author-photo"
              src={data.testimonial.image}
              alt={data.testimonial.author}
            />
            <h3 className="testimonials-author">{data.testimonial.author}</h3>
            <p className="testimonials-text">{data.testimonial.text}</p>
          </div>
          <div className="testimonials-video-wrapper">
            <video
              onEnded={handleEnded}
              ref={videoRef}
              src={data.testimonial.video}
              className="testimonials-video"
            ></video>
            {!isPlaying && (
              <button onClick={handlePlay} className="testimonials-play-btn">
                <img
                  className="textimonials-play-img"
                  src="/images/play.svg"
                  alt="Play button"
                />
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
