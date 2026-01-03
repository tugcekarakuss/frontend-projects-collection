//scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    })
}, {
    threshold: 0.1
});
const hiddenElement = document.querySelectorAll(".reveal")
hiddenElement.forEach((el) => observer.observe(el))

//slider
const cards = document.querySelector(".product-list")
function moveSlider(direction) {
    if (direction === 'next') {
        const firstCard = cards.firstElementChild
        cards.appendChild(firstCard)
    }
    else if (direction === 'prev') {
        const lastCard = cards.lastElementChild
        cards.prepend(lastCard)
    }
}

//slider click
const card = document.querySelectorAll('.product-card');
card.forEach((card) => {
    card.addEventListener('click', () => {
        const list = card.parentElement;
        if (card === list.firstElementChild) return;

        list.prepend(card);

        card.style.transition = 'opacity 0.3s ease';
        card.style.opacity = '0.5';

        setTimeout(() => {
            card.style.opacity = '1';
        }, 50);
    });
});







