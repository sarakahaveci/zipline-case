import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container top-inner">
          <div className="contact-info">
            <span className="email">✉ profuture@gmail.com</span>
          </div>
          <div className="journal-meta">
            <span>ISSN: <b>345-255</b></span>
            <span>Başlangıç: <b>2025</b></span>
            <span>Periyot: <b>Yılda 2 Sayı</b></span>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container main-inner">
          <div className="logo-section">
            <img src={logo} alt="Profuture Logo" className="logo" />
          </div>
          
          <nav className="nav">
            <a href="#" className="nav-item home-icon">🏠</a>
            <a href="#">Amaç ve Kapsam</a>
            <a href="#">Etik İlkeler ve Yayın Politikası</a>
            <a href="#">Makale Çağrıları</a>
            <a href="#">Sayılar</a>
            <a href="#">İletişim</a>
          </nav>

          <div className="header-actions">
            <button className="btn-secondary">Dergi Kurulu</button>
            <button className="btn">Yazar Rehberi</button>
            <button className="search-icon">🔍</button>
          </div>
        </div>
      </div>
    </header>
  );
}