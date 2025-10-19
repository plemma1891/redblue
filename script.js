const text = "We are a software development company passionate about innovation and technology. Our mission is to deliver customized, high-quality solutions that help our clients achieve their goals efficiently and creatively.";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 35);
  }
}
window.addEventListener("load", typeWriter);
const shuffleText = document.querySelector(".shuffle-parent");
const letters = shuffleText.textContent.split("");
shuffleText.textContent = "";
shuffleText.classList.add("is-ready");

letters.forEach((letter, i) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.display = "inline-block";
  span.style.opacity = "0";
  shuffleText.appendChild(span);
  setTimeout(() => {
    span.style.opacity = "1";
    span.style.transform = "translateY(0)";
  }, i * 100);
});
const cards = document.querySelectorAll('.programs__card');
function showCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('load', showCardsOnScroll);
