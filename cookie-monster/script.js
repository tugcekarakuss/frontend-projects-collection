// 1. Tüm göz bebeklerini seç
const pupils = document.querySelectorAll('.pupil');

// 2. Fare hareketini her yakaladığında çalışacak olay
document.addEventListener('mousemove', (e) => {
    // Sayfa ortasını referans almak için ekran boyutlarını al
    const { innerWidth, innerHeight } = window;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    pupils.forEach(pupil => {
        // Her pupil’in bulunduğu gözün merkezini bul
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Fareyle göz merkezi arasındaki farkı hesapla
        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;

        // Maksimum hareket mesafesini sınırlayalım (pupil gözden taşmasın)
        const maxMove = 30; // px cinsinden
        const angle = Math.atan2(deltaY, deltaX);
        const moveX = Math.cos(angle) * maxMove;
        const moveY = Math.sin(angle) * maxMove;

        // Pupil'i kaydır
        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});