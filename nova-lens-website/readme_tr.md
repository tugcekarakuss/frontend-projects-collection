# Nova Lens – Akıllı Gözlük Arayüz Uygulaması

Nova Lens, yüksek detaylı bir tasarımın **temiz, responsive ve sürdürülebilir frontend koda** dönüştürülmesini pratik etmek amacıyla geliştirilmiş bir UI implementasyon projesidir.  
Bu projenin ana hedefi **tasarımdan koda birebir doğruluk** olup, görsel yeniden tasarım yapılmamıştır.

[![Netlify Status](https://api.netlify.com/api/v1/badges/228de408-2dd0-497c-ac02-733f47c847f0/deploy-status)](https://app.netlify.com/projects/nova-lens/deploys)

---

## Proje Bağlantıları

- **Canlı Demo:** https://nova-lens.netlify.app/
- **Figma Tasarımı (Yeniden Oluşturuldu):** https://www.figma.com/community/file/1586123003360449417/nova-lens
- **Tasarım Tutorialı:** https://youtu.be/clSHs94hNNc
- **Asset Kaynağı:** Flux Academy (ikonlar ve görseller)

---

## Projenin Amacı

Bu proje, bir **akıllı gözlük arayüzünün frontend implementasyonuna** odaklanmaktadır.

Arayüz, **Flux Academy tarafından hazırlanan bir tasarım tutorialı takip edilerek Figma’da yeniden oluşturulmuştur**.  
Tutorial kapsamında sağlanan ikon ve görsel assetler kullanılmıştır.  

Figma aşamasından sonra arayüzün tamamı **HTML, CSS ve Vanilla JavaScript kullanılarak bağımsız şekilde kodlanmıştır**.

Görsel tasarım kararları değiştirilmemiştir.  
Zorluk; **layout hassasiyeti, responsive yapı ve etkileşim mantığının doğru şekilde uygulanması** üzerinedir.

---

## Öğrenilenler ve Pratikler

- **Tasarım → Kod Süreci**  
  Figma dosyasını okuyarak boşluklar, tipografi ve layout yapılarının koda dönüştürülmesi.

- **Responsive Yerleşim Stratejisi**  
  `clamp()` ve esnek birimler kullanılarak minimum media query ile akışkan tasarım oluşturma.

- **CSS Mimarisi**  
  BEM metodolojisi ve CSS custom property’leri ile ölçeklenebilir stil yapısı.

- **Vanilla JavaScript UI Mantığı**  
  Harici kütüphane kullanmadan özel slider ve tıklama bazlı kart sıralama mantığı.

- **Etkileşim ve Hareket**  
  Scroll reveal animasyonları ve hover efektleri ile kullanıcı deneyimi geliştirme.

---

## Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|----------|---------|
| HTML5 | Semantik yapı |
| CSS3 | Flexbox, Grid, Custom Properties, `clamp()` |
| JavaScript (ES6+) | DOM manipülasyonu ve UI mantığı |
| Netlify | Hosting ve sürekli deploy |

---

## Özellikler

- Sonsuz mantıkla çalışan ürün slider’ı
- Tıklanan ürün kartının öne alınması
- Scroll bazlı giriş animasyonları
- Tam responsive yapı (mobil → desktop)
- Temiz ve sürdürülebilir CSS yapısı

---

## Önizleme

![Nova Lens Preview](./img/project-preview.png)

---

## Katkı ve Kaynaklar

- Tasarım tutorialı ve assetler: **Flux Academy**
- Figma yeniden çizimi ve frontend geliştirme: **Tuğçe Karakuş**

---

## Lokal Kurulum

```bash
git clone https://github.com/tugcekarakuss/nova-lens.git
cd nova-lens
