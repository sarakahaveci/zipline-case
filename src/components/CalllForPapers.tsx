import maskGroup from '../assets/images/maskGroup.png';

export default function Publications() {
  return (
    <section className="publications">
      <div className="publications-row">

        <div className="publication-card">
          <div className="card-image">
            <img src={maskGroup} alt="Dijital Dönüşüm" />
          </div>

          <div className="card-content">
            <div className="card-top">
              <span className="badge">Dergi</span>
              <span className="badge-new">YENİ</span>
            </div>

            <h3>Teknoloji ve Dijital Dergisi</h3>

            <div className="card-meta">
              <span>📘 Cilt: 1</span>
              <span>📄 Sayı: 1</span>
              <span>📅 Aralık 2022</span>
            </div>

            <div className="card-actions">
              <button className="icon-btn">👁</button>
              <button className="icon-btn">⬇</button>
              <button className="icon-btn primary">→</button>
            </div>
          </div>
        </div>

        <div className="publication-card">
          <div className="card-image">
            <img src={maskGroup} alt="Dijital Dönüşüm" />
          </div>

          <div className="card-content">
            <div className="card-top">
              <span className="badge">Dergi</span>
              <span className="badge-new">YENİ</span>
            </div>

            <h3>Teknoloji ve Dijital Dergisi</h3>

            <div className="card-meta">
              <span>📘 Cilt: 1</span>
              <span>📄 Sayı: 1</span>
              <span>📅 Aralık 2022</span>
            </div>

            <div className="card-actions">
              <button className="icon-btn">👁</button>
              <button className="icon-btn">⬇</button>
              <button className="icon-btn primary">→</button>
            </div>
          </div>
        </div>

        <div className="publication-card-wrapper">
  <span className="son-sayi-badge">Son Sayı</span>

  <div className="publication-card">
    <div className="card-image">
      <img src={maskGroup} alt="Dijital Dönüşüm" />
    </div>

    <div className="card-content">
      <div className="card-top">
        <span className="badge">Dergi</span>
        <span className="badge-new">YENİ</span>
      </div>

      <h3>Teknoloji ve Dijital Dergisi</h3>

      <div className="card-meta">
        <span>📘 Cilt: 1</span>
        <span>📄 Sayı: 1</span>
        <span>📅 Aralık 2022</span>
      </div>

      <div className="card-actions">
        <button className="icon-btn">👁</button>
        <button className="icon-btn">⬇</button>
        <button className="icon-btn primary">→</button>
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
