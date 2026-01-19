import Frameleft from '../assets/images/Frameleft.png'
import ArticleItem from './ArticleItem';
export default function News() {
  return (
    <section className="latest-section">
      <div className="container latest-inner">

        {/* LEFT CARD */}
        <div className="latest-left">
          <span className="badge-vertical">Son Sayı</span>

          <div className="latest-cover">
            <img src={Frameleft} alt="Profuture Dergi" />
          </div>

          <div className="latest-actions">
            <button className="btn-outline">İndir</button>
            <button className="btn-primary">Görüntüle</button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="latest-right">
          <div className="latest-header">
            <div>
              <span className="section-label">Profuture Teknoloji Dergisi</span>
              <h3>Güncel Yazılar</h3>
            </div>

            <button className="btn-text">
              Tümünü Görüntüle →
            </button>
          </div>

          {/* ARTICLE LIST */}
          <div className="article-list">
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
          </div>
        </div>

      </div>
    </section>
  );
}
