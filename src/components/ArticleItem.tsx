function ArticleItem() {
    return (
      <div className="article-item">
        <div className="article-info">
          <div className="article-tags">
            <span className="tag">İklim</span>
            <span className="tag light">Araştırma Makalesi</span>
          </div>
  
          <p className="article-info">
            Türkiye’nin Teknoloji Politikaları ve Döngüsel Ekonomi
          </p>
  
          <p className="meta">
            Sayfa: 12–28 · Elif Başkaya Acar, Emre Taran, Halil Başar
          </p>
        </div>
  
        <div className="article-actions">
          <button className="icon-btn">⬇</button>
          <button className="icon-btn">👁</button>
          <button className="btn-primary small">Görüntüle</button>
        </div>
      </div>
    );
  }
export default ArticleItem  