const goose = document.getElementById('goose');
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.05; // Hız kontrolü için oran

// Kaz sesi için Audio nesnesi
const gooseSound = new Audio('sounds/goose-sound.mp3');

document.addEventListener('mousemove', (event) => {
  targetX = event.clientX;
  targetY = event.clientY;

  // Kazın hangi yöne bakacağını hesapla
  if (targetX > window.innerWidth / 2) {
    goose.style.transform = `translate(${currentX - goose.offsetWidth / 2}px, ${currentY - goose.offsetHeight / 2}px) rotate(15deg)`;
  } else {
    goose.style.transform = `translate(${currentX - goose.offsetWidth / 2}px, ${currentY - goose.offsetHeight / 2}px) rotate(-15deg)`;
  }
});

document.addEventListener('mousedown', (event) => {
  if (event.button === 0) { // 0, sol tıklamayı temsil eder
    gooseSound.play(); // Sesi çal
  }
});

function updatePosition() {
  // Kazın mevcut konumunu hedef konuma yaklaştır
  currentX += (targetX - currentX) * speed;
  currentY += (targetY - currentY) * speed;

  goose.style.transform = `translate(${currentX - goose.offsetWidth / 2}px, ${currentY - goose.offsetHeight / 2}px)`;

  requestAnimationFrame(updatePosition); // Animasyonu sürekli çalıştır
}

// İlk güncelleme çağrısını başlat
updatePosition();
