import { motion } from "framer-motion";
import fatihTursu from "./assets/fatihtursu.jpeg";
import yemek from "./assets/cheffatihyemek.jpeg";
import tarla from "./assets/cheffatihtarla.jpeg";
import kapak from "./assets/cheffatihkapak.jpeg";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
const products = [
  {
    badge: "Çok Satan",
    title: "Karışık Köy Turşusu",
    desc: "Geleneksel yöntemlerle hazırlanan çıtır salatalık turşusu. Tam kıvamında acı ve doğal aroma.",
    price: "₺249",
    size: "1 kg kavanoz",
    img: fatihTursu,
  },
  {
    badge: "Yeni Sezon",
    title: "Çıtır Çıtır Bir Lezzet Patlaması: Birria Tacos",
    desc: "Eriyen uzayan peyniri ve ağır ateşte lokum gibi pişmiş baharatlı didilmiş etiyle, her ısırıkta lezzet patlaması yaşatan enfes bir Meksika klasiği.",
    price: "₺199",
    size: "750 gr",
    img: yemek,
  },
  {
    badge: "Chef Özel",
    title: "Tarladan Günlük Hasat",
    desc: "Chef Fatih’in tarlalarından özenle toplanan günlük doğal ürün seçkileri.",
    price: "₺179",
    size: "500 ml",
    img: tarla,
  },
];

const recipes = [
  {
    title: "Turşu ile Et Sunumu",
    desc: "Izgara etlerin yanında çıtır turşu ve özel sos eşleşmesi.",
  },
  {
    title: "Chef Soslu Tavuk",
    desc: "Özel sosla marine edilen pratik ve lezzetli tavuk tarifi.",
  },
  {
    title: "Köy Kahvaltısı Dokunuşu",
    desc: "Doğal ürünlerle zenginleştirilmiş pratik kahvaltı önerileri.",
  },
];

function App() {
  return (
    <div className="site">

      <nav className="navbar">
        <a href="#home" className="logo">
          <img src="/cheffatihlogo2.png" alt="Chef Fatih" />
          <span>Chef Fatih</span>
        </a>

        <div className="nav-links">
          <a href="#home">Ana Sayfa</a>
          <a href="#urunler">Ürünler</a>
          <a href="#tarifler">Tarifler</a>
          <a href="#hikaye">Hikaye</a>
          <a href="#sosyal">İletişim</a>
        </div>

        <a className="nav-cta" href="#urunler">
          Siparişe Başla
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-glow" />

        <div className="overlay">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Doğal ürünler • Özel tarifler • Gerçek lezzet
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Tarladan Sofraya <br />
            Gerçek Lezzet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Chef Fatih’in seçtiği doğal ürünler, özel tarifler ve sofraya
            yakışan güçlü lezzetler tek yerde.
          </motion.p>

          <motion.div
            className="buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#urunler" className="primary-btn">
              Ürünleri İncele
            </a>
            <a href="#tarifler" className="secondary-btn">
              Chef’in Tarifleri
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div>
              <strong>480B+</strong>
              <span>Takipçi</span>
            </div>
            <div>
              <strong>Doğal</strong>
              <span>Ürün Seçkisi</span>
            </div>
            <div>
              <strong>Chef</strong>
              <span>Özel Tarifler</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="products" id="urunler">
        <div className="section-title">
          <span>Online Sipariş</span>
          <h2>Ürünler</h2>
          <p>Burası isteğe göre turşu çeşitleri olarak şekillenebilir veya ne satılacaksa ona göre ayrı bir sayfa oluşturup kategorilendirebilir istenilen malzeme aranabilir.</p>
          <p>Chef Fatih seçkisi doğal ürünler ve özel lezzetler.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div
              className="card"
              key={product.title}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 220 }}
            >
              <div className="badge">{product.badge}</div>

              <div className="card-img-wrap">
                <img src={product.img} alt={product.title} />
              </div>

              <div className="card-content">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>

                <div className="product-meta">
                  <strong>{product.price}</strong>
                  <span>{product.size}</span>
                </div>

                <div className="card-actions">
                  <button>Detaylar</button>
                  <button className="outline-btn">Sepete Ekle</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="premium-strip">
        <div>
          <span>01</span>
          <h3>Ürünleri Seç</h3>
          <p>Turşu, sos ve sezonluk doğal ürünleri incele.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Siparişini Oluştur</h3>
          <p>Sepete ekle, adres ve iletişim bilgilerini gir.</p>
        </div>

        <div>
          <span>03</span>
          <h3>Kapına Gelsin</h3>
          <p>Özenle paketlenen ürünler kargoya hazırlanır.</p>
        </div>
      </section>

      <section className="recipes" id="tarifler">
        <div className="section-title center">
          <span>Chef’in Özel Tarifleri</span>
          <h2>Videolardan İlham Alan Lezzetler</h2>
          <p>Tarif videoları, püf noktaları ve sofraya yakışan özel öneriler.</p>
        </div>

        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <motion.div
              className="recipe-card"
              key={recipe.title}
              whileHover={{ scale: 1.04 }}
            >
              <div className="recipe-icon">🔥</div>
              <h3>{recipe.title}</h3>
              <p>{recipe.desc}</p>
              <button>Tarifi İncele</button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="story" id="hikaye">
        <div className="story-left">
          <span className="mini-title">Marka Hikayesi</span>
          <h2>Tarladan Gelen Gerçek Hikaye</h2>

          <p>
            Chef Fatih yalnızca tarif paylaşmıyor. Ürünün yetiştiği toprağı,
            hazırlık sürecini, sofraya gelene kadar geçen emeği ve gerçek
            lezzeti insanlarla buluşturuyor.
          </p>

          <div className="story-points">
            <div>✔ Doğal ürün seçkisi</div>
            <div>✔ Chef dokunuşlu tarifler</div>
            <div>✔ Kargoya uygun paketleme</div>
          </div>

          <button>Hikayeyi İzle</button>
        </div>

        <div className="story-right">
          <img src={kapak} alt="Chef Fatih ürünleri" />
          <div className="floating-card">
            <strong>Chef Fatih Seçkisi</strong>
            <span>Doğal, güçlü ve sofraya yakışan lezzetler.</span>
          </div>
        </div>
      </section>

      <section className="social-section" id="sosyal">
        <div className="section-title center">
          <span>Sosyal Medya</span>
          <h2>Chef Fatih’i Takip Et</h2>
          <p>Tarifler, reels videoları ve ürün tanıtımları için sosyal medya hesapları.</p>
        </div>

        <div className="social-row">
          <a
            href="https://www.instagram.com/chef.fatihh/"
            target="_blank"
            rel="noreferrer"
            className="social-item instagram-item"
          >
            <FaInstagram />
            <strong>Instagram</strong>
            <span>@chef.fatihh</span>
          </a>

          <a
            href="https://www.youtube.com/@Chef.Fatihhan"
            target="_blank"
            rel="noreferrer"
            className="social-item youtube-item"
          >
            <FaYoutube />
            <strong>YouTube</strong>
            <span>Tarif videoları</span>
          </a>

          <a
            href="https://www.tiktok.com/@chef.fatihh"
            target="_blank"
            rel="noreferrer"
            className="social-item tiktok-item"
          >
            <FaTiktok />
            <strong>TikTok</strong>
            <span>Kısa içerikler</span>
          </a>
        </div>
      </section>

      <section className="cta" id="iletisim">
        <h2>Sofrana Chef Fatih Dokunuşu Kat</h2>
        <p>Doğal ürünleri keşfet, tariflerden ilham al, sofrana gerçek lezzet ekle.</p>

        <div className="buttons center-buttons">
          <a href="#urunler" className="primary-btn">
            Ürünlere Git
          </a>
          <a href="#home" className="secondary-btn">
            Başa Dön
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Chef Fatih</strong>
          <p>Tarladan sofraya gerçek lezzet.</p>
        </div>

        <div>
          <a href="#urunler">Ürünler</a>
          <a href="#tarifler">Tarifler</a>
          <a href="#hikaye">Hikaye</a>
          <a href="#iletisim">İletişim</a>
        </div>
      </footer>
    </div>
  );
}

export default App;