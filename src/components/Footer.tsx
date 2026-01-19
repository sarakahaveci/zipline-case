export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* LEFT */}
        <div className="footer-left">
          <h4>Profuture Teknoloji Dergisi</h4>
          <p>
          Prof Dr Elif baskaya Acar</p>
          <p>elif@gmail.com</p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <p> Mail Adresi</p>
          <span>profuture@gmail.com</span>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h5>İletişim</h5>
          <p>info@profuture.com</p>
          <p>+90 212 000 00 00</p>
        </div>

      </div>

      {/* RED LINE */}
      <div className="footer-bottom-line">
        <p className="bottom-line-text">profutre teknoloji - tum halkalri sakildir 2025 @</p>
      </div>
    </footer>
  );
}
