# Cookie Monster 👀🍪

🌍 **English README:** [README.en.md](./README.en.md)

Cookie Monster, kart (card) yapısı üzerinde yer alan bir karakterin gözlerinin kullanıcının mouse hareketlerini gerçek zamanlı olarak takip ettiği etkileşimli bir frontend projesidir.

Bu proje, JavaScript kullanarak mouse event’leri, ekran koordinatları ve DOM elementleri arasındaki ilişkiyi anlamak ve küçük ama etkileyici kullanıcı etkileşimleri oluşturmak amacıyla geliştirilmiştir.

🔗 **Canlı Demo:** https://cookieemonster.netlify.app/

---

## 👀 Proje Önizlemesi

![Cookie Monster Preview](./img/project-preview.gif)

---

## 🎯 Projenin Amacı

Bu projenin temel amacı:

- Mouse hareketlerini dinleyerek kullanıcı etkileşimini yakalamak
- Mouse koordinatlarını DOM elementlerinin konumlarıyla ilişkilendirmek
- CSS ve JavaScript birlikte kullanılarak görsel geri bildirim oluşturmak
- Basit bir fikir üzerinden etkileşimli UI mantığını kavramak

---

## ⚙️ Nasıl Çalışır?

- Sayfa üzerinde `mousemove` eventi dinlenir
- Mouse’un X ve Y koordinatları alınır
- Göz elementlerinin merkez noktası hesaplanır
- Mouse ile göz merkezi arasındaki açı bulunur
- Bu açı, CSS `transform` kullanılarak gözlere uygulanır

Bu sayede gözler, mouse hareketini doğal bir şekilde takip eder.

---

## 🚀 Özellikler

- Minimal ve sade kart (card) tasarımı
- Gözlerin mouse hareketini anlık olarak takip etmesi
- JavaScript tabanlı etkileşimli yapı
- Hafif, hızlı ve bağımlılıksız çalışma
- Responsive tasarım

---

## 🛠️ Kullanılan Teknolojiler

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 📚 Bu Projede Öğrendiklerim

- `mousemove` event kullanımı
- Mouse koordinatları ile çalışma
- `getBoundingClientRect()` ile element pozisyonu hesaplama
- CSS `transform` ile dinamik hareket oluşturma
- JavaScript ile görsel etkileşim mantığı

---

## 📦 Kurulum

Projeyi yerel ortamda çalıştırmak için:

```bash
git clone https://github.com/kullanici-adi/cookie-monster.git
cd cookie-monster
