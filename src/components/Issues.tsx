import blok from '../assets/images/blok.png'
import bilgi from '../assets/images/bilgi.png'
import backgroundblue from '../assets/images/backgroundblue.png'

export default function Issues() {
  return (
    <section className="issues-outer-section">
      <div 
        className="issues-card"
        style={{ backgroundImage: `url(${backgroundblue})` }}
      >
        {/* LEFT SIDE: Grid of 4 small covers */}
        <div className="issues-left">
          <img src={blok} alt="blok" className="issues-grid-image" />
        </div>

        {/* CENTER SIDE: Text and Red Button */}
        <div className="issues-center">
          <div className="issues-header-content">
            <span className="cfp-label">Makale Çağrısı</span>
            <h2 className="issues-title">Türkiye Ulusal Dijital Veri ve Altyapıları</h2>
            <p className="issues-description">
              Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi,
              kamu ve özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları,
              büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital
              dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik
              çalışmalar değerlendirilecektir.
            </p>
          </div>

          <button className="makale-button">
            <span className='button-issue'>Makale Gönder</span>
            <div className="button-arrow">
               {/* This represents the white circle arrow in your photo */}
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </button>
        </div>

        {/* RIGHT SIDE: Single Large Cover */}
        <div className="issues-right">
          <img src={bilgi} alt="issue cover" className="main-cover" />
        </div>
      </div>
    </section>
  );
}
