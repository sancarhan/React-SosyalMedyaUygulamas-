# 🏢 Sosyal Medya Projesi

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-green?logo=vite)](https://vite.dev/)



## 📖 Proje Tanımı
Bu proje, modern bir **sosyal medya web uygulaması**dır. Kullanıcıların post paylaşabileceği, beğeni atabileceği, yorum yapabileceği ve arkadaşlarıyla etkileşimde bulunabileceği bir platform geliştiriyoruz.

Proje başlangıç aşamasındadır ve React 19 ile Vite kullanılarak hızlı geliştirme ortamı sağlanmıştır. Responsive tasarım ve modern UI/UX ön plandadır.

## ✨ Özellikler
- 👥 Kullanıcı postları oluşturma ve görüntüleme
- ❤️ Beğeni ve yorum sistemi (geliştirme aşamasında)
- 📱 Tamamen responsive tasarım (mobil uyumlu)
- ⚡ Hızlı geliştirme ve hot reload (Vite)
- 🔍 Kod kalitesi kontrolü (ESLint)

## 🛠️ Teknoloji Yığını
| Frontend | Araçlar |
|----------|---------|
| **React** | 19.2.4 |
| **Vite** | 5.x |
| **ESLint** | 9.x |

## 🚀 Hızlı Başlangıç

### Ön Gereksinimler
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) veya [yarn](https://yarnpkg.com/)

### Kurulum
```bash
cd client
npm install
npm run dev
```

Uygulama http://localhost:5173 adresinde açılacaktır.

### Kullanılabilir Komutlar
```bash
npm run dev     # Development server
npm run build   # Production build
npm run lint    # Kod kontrolü
npm run preview # Build edilmiş app önizlemesi
```

## 📁 Proje Yapısı
```
client/
├── public/          # Statik dosyalar
│   ├── favicon.svg
│   └── icons.svg
├── src/             # Kaynak kodlar
│   ├── App.jsx          # Ana uygulama
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global stiller
│   ├── components/      # Yeniden kullanılabilir bileşenler
│   ├── pages/           # Sayfa bileşenleri
│   │   ├── ChatBox.jsx
│   │   ├── Connections.jsx
│   │   ├── CreatePost.jsx
│   │   ├── Discover.jsx
│   │   ├── Feed.jsx
│   │   ├── Layout.jsx
│   │   ├── Login.jsx
│   │   ├── Messages.jsx
│   │   └── Profile.jsx
│   └── assets/          # Görseller
├── package.json     # Bağımlılıklar
├── vite.config.js   # Vite konfigürasyonu
└── README.md        # Bu dosya!
```

## 🤝 Katkı Yapmak
1. Fork edin
2. Yeni branch oluşturun: `git checkout -b feature/ozellik`
3. Değişikliklerinizi commit edin: `git commit -m 'Yeni özellik'`
4. Push edin: `git push origin feature/ozellik`
5. Pull Request oluşturun

## 📄 Lisans
Bu proje [MIT](LICENSE) lisansı altındadır.

## 🙋‍♂️ İletişim
Sorularınız için GitHub Issues bölümünü kullanabilirsiniz.

---

⭐ Projeyi beğendiyseniz yıldız bırakmayı unutmayın!

