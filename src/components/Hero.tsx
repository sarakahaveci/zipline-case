import magazine from "../assets/images/magazine.png";
import mockCover from "../assets/images/dergison.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={
        {
          "--hero-bg": `url(${magazine})`,
        } as React.CSSProperties
      }
    >
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Profuture Teknoloji Dergisi</h1>
          <p>
            Teknoloji, inovasyon ve dijital dönüşüm dünyasından en güncel
            içerikler.
          </p>
          <button className="btn-primary">Read Now</button>
        </div>
      </div>

      <div
        className="hero-mock"
        style={{ backgroundImage: `url(${mockCover})` }}
      />
    </section>
  );
}
