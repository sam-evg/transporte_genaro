// Fondo dinámico del hero con desvanecimiento
const hero = document.getElementById('hero');
const images = [
  'img/camion-ruta-chile.png',
  'img/camion-vista-aerea.png'
];
let index = 0;

function changeBackground() {
  hero.style.opacity = 0; // Iniciar desvanecimiento
  setTimeout(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
    hero.style.opacity = 1; // Finalizar desvanecimiento
  }, 1000); // Esperar a que el desvanecimiento termine
}

setInterval(changeBackground, 15000); // Cambiar fondo cada 15 segundos

// Animación de fade-in cuando la sección entra en vista
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

fadeInElements.forEach(element => observer.observe(element));
