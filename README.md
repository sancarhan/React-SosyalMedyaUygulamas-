# 🏢 Sosyal Medya Projesi

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-green?logo=vite)](https://vite.dev/)

# Cosnova - Sosyal Medya Uygulaması

Cosnova, modern web teknolojileri kullanılarak geliştirilmiş bir sosyal medya platformudur. Kullanıcıların gönderi paylaşması, hikaye oluşturması, birbirleriyle mesajlaşması ve profillerini yönetmesi amaçlanmıştır. Proje, React 19 ve Vite altyapısı üzerine kurulmuş olup, Tailwind CSS ile şekillendirilmiştir.

---

## İçindekiler

- [Özellikler](#özellikler)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Proje Yapısı](#proje-yapısı)
- [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
- [Sayfalar ve Bileşenler](#sayfalar-ve-bileşenler)
- [Yol Haritası](#yol-haritası)
- [Lisans](#lisans)

---

## Özellikler

- **Kimlik Doğrulama**: Clerk kütüphanesi ile güvenli giriş ve kayıt sistemi.
- **Akış (Feed)**: Kullanıcıların gönderilerini ve hikayelerini görüntüleme.
- **Hikayeler**: Metin, fotoğraf ve video tabanlı hikaye oluşturma ve görüntüleme.
- **Gönderi Etkileşimleri**: Beğenme, yorum yapma ve paylaşma özellikleri (UI hazır).
- **Mesajlaşma**: Bağlantılar listesi ve son mesajları görüntüleme.
- **Keşfet ve Profil**: Kullanıcı keşfi ve profil yönetimi sayfaları.
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlara uyumlu arayüz.
- **Türkçe Arayüz**: Tüm kullanıcı arayüzü Türkçe olarak tasarlanmıştır.

---

## Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| [React](https://react.dev/) ^19.2.4 | Kullanıcı arayüzü geliştirme kütüphanesi |
| [Vite](https://vitejs.dev/) ^8.0.1 | Hızlı geliştirme ve derleme aracı |
| [Tailwind CSS](https://tailwindcss.com/) ^4.2.2 | Utility-first CSS çerçevesi |
| [React Router DOM](https://reactrouter.com/) ^7.13.2 | Sayfa yönlendirme ve routing |
| [Clerk](https://clerk.com/) ^6.1.3 | Kimlik doğrulama ve kullanıcı yönetimi |
| [Lucide React](https://lucide.dev/) ^1.7.0 | Modern ikon kütüphanesi |
| [Moment.js](https://momentjs.com/) ^2.30.1 | Tarih ve saat formatlama |
| [React Hot Toast](https://react-hot-toast.com/) ^2.6.0 | Bildirim ve toast mesajları |

---

## Proje Yapısı

```
Sosyal Medya/
├── client/
│   ├── public/              # Statik dosyalar (favicon, ikonlar)
│   ├── src/
│   │   ├── assets/          # Görsel, logo ve sahte veri dosyaları
│   │   ├── components/      # Yeniden kullanılabilir UI bileşenleri
│   │   ├── contexts/        # React Context API dosyaları
│   │   ├── pages/           # Uygulama sayfaları
│   │   ├── App.jsx          # Ana uygulama ve routing yapılandırması
│   │   ├── main.jsx         # Uygulama giriş noktası
│   │   ├── App.css          # Uygulama geneli stiller
│   │   └── index.css        # Tailwind ve temel stiller
│   ├── index.html           # HTML şablonu
│   ├── package.json         # Bağımlılıklar ve scriptler
│   ├── vite.config.js       # Vite yapılandırması
│   └── eslint.config.js     # ESLint kuralları
└── README.md
```

---

## Kurulum ve Çalıştırma

### Gereksinimler

- [Node.js](https://nodejs.org/) (v18 ve üzeri önerilir)
- npm veya yarn paket yöneticisi

### Adımlar

1. **Projeyi klonlayın:**

```bash
git clone https://github.com/kullaniciadi/React-SosyalMedyaUygulamas-.git
cd "React-SosyalMedyaUygulamas-/Sosyal Medya/client"
```

2. **Bağımlılıkları yükleyin:**

```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
```

4. **Tarayıcıda açın:**

```
http://localhost:5173
```

### Diğer Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Üretim için derleme yapar |
| `npm run preview` | Derlenmiş uygulamayı önizler |
| `npm run lint` | ESLint ile kod kalitesi kontrolü |

---

## Sayfalar ve Bileşenler

### Sayfalar (`src/pages/`)

| Dosya | Açıklama |
|-------|----------|
| `Login.jsx` | Giriş ekranı. Clerk `SignIn` bileşeni ile kullanıcı doğrulama sağlar. Sol tarafta uygulama tanıtımı, sağ tarafta giriş formu bulunur. |
| `Feed.jsx` | Ana akış sayfası. Hikayeler, gönderiler ve sağ sidebar (sponsorlu içerik + son mesajlar) bölümlerini bir araya getirir. |
| `Layout.jsx` | Sayfa düzeni bileşeni. Sidebar ve ana içerik alanını yönetir. Mobil cihazlarda hamburger menü desteği sunar. |
| `Messages.jsx` | Mesajlar sayfası. Bağlı kullanıcıların listesini gösterir ve sohbet/profil sayfalarına yönlendirme yapar. |
| `ChatBox.jsx` | Birebir sohbet ekranı. *(Geliştirme aşamasında - placeholder)* |
| `Connections.jsx` | Takip istekleri ve bağlantılar sayfası. *(Geliştirme aşamasında - placeholder)* |
| `Discover.jsx` | Kullanıcı ve içerik keşfetme sayfası. *(Geliştirme aşamasında - placeholder)* |
| `Profile.jsx` | Kullanıcı profil sayfası. *(Geliştirme aşamasında - placeholder)* |
| `CreatePost.jsx` | Yeni gönderi oluşturma sayfası. *(Geliştirme aşamasında - placeholder)* |

### Bileşenler (`src/components/`)

| Dosya | Açıklama |
|-------|----------|
| `Sidebar.jsx` | Sol kenar çubuğu. Logo, menü öğeleri, "Gönderi Oluştur" butonu ve kullanıcı profili bilgilerini içerir. Clerk `UserButton` ve `signOut` entegrasyonuna sahiptir. |
| `MenuItems.jsx` | Navigasyon menü öğelerini `NavLink` ile render eder. Aktif sayfa vurgulaması yapar. Menü verileri `assets.js`'den alınır. |
| `StoriesBar.jsx` | Yatay kaydırılabilir hikaye çubuğu. Hikaye ekleme kartı, mevcut hikayeleri listeleme ve tıklama ile hikaye görüntüleyici açma işlevlerini içerir. |
| `StoryModel.jsx` | Hikaye oluşturma modalı. Metin ve medya (fotoğraf/video) modları arasında geçiş yapar. Arka plan rengi seçimi, medya önizleme ve yayınlama işlevselliği sunar. |
| `StoryViewer.jsx` | Tam ekran hikaye görüntüleyici. İlerleme çubuğu, kullanıcı bilgisi ve metin/görsel/video içerik render eder. 10 saniye sonra otomatik kapanma özelliğine sahiptir. |
| `PostCard.jsx` | Gönderi kartı bileşeni. Kullanıcı bilgisi, içerik (hashtag destekli), görseller ve beğeni/yorum/paylaşım etkileşimlerini gösterir. |
| `RecentMessages.jsx` | Sağ sidebar'da yer alan son mesajlar listesi. Okunmamış mesaj bildirimi ve kullanıcıya tıklayarak sohbete gitme özelliği sunar. |
| `Loading.jsx` | Yükleme durumunda gösterilen dönen yükleyici (spinner) bileşeni. |

### Veri ve Varlıklar (`src/assets/`)

| Dosya | Açıklama |
|-------|----------|
| `assets.js` | Tüm görsellerin, menü verilerinin, sahte kullanıcı verilerinin (`dummyUserData`), sahte gönderilerin (`dummyPostsData`), hikayelerin (`dummyStoriesData`), mesajların (`dummyMessagesData`) ve bağlantı verilerinin tanımlandığı merkezi dosya. |

---

## Yol Haritası

- [x] Kimlik doğrulama (Clerk entegrasyonu)
- [x] Ana sayfa düzeni ve sidebar
- [x] Akış sayfası (hikaye + gönderi listesi)
- [x] Hikaye oluşturma ve görüntüleme
- [x] Gönderi kartı (beğenme, yorum, paylaşım UI)
- [x] Son mesajlar bileşeni
- [x] Mesajlar sayfası (bağlantı listesi)
- [ ] ChatBox (sohbet ekranı) - geliştiriliyor
- [ ] Profil sayfası - geliştiriliyor
- [ ] Keşfet sayfası - geliştiriliyor
- [ ] Bağlantılar (takip istekleri) sayfası - geliştiriliyor
- [ ] Gönderi oluşturma sayfası - geliştiriliyor
- [ ] Backend entegrasyonu (şu an sahte veriler kullanılıyor)

---

## Ekran Görüntüleri

> *Ekran görüntüleri eklenecektir.*

---

## Katkıda Bulunma

Katkıda bulunmak isterseniz lütfen bir **issue** açın veya **pull request** gönderin. Her türlü geri bildirim ve öneri memnuniyetle karşılanır.

---

## Geliştirici

**Oğuzhan SANCAR** - [SancarhanYazılım](https://github.com/sancarhanyazilim)

---

## Lisans

Bu proje açık kaynaklıdır ve [MIT Lisansı](LICENSE) ile lisanslanmıştır.

