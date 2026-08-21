const heartContainer = document.getElementById('heart');
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

const total143s = 75;
const totalParticles = 25;

const isMobile = window.innerWidth <= 600;
const scale = isMobile ? 12 : 16; 

// Generate '143' Ring
for (let i = 0; i < total143s; i++) {
  const span = document.createElement('span');
  span.className = 'love_143';
  span.innerText = '143';
  span.style.fontSize = isMobile ? '0.85rem' : '1.05rem';

  const t = (i / total143s) * Math.PI * 2;

  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

  const dx = 48 * Math.pow(Math.sin(t), 2) * Math.cos(t);
  const dy = 13 * Math.sin(t) - 10 * Math.sin(2 * t) - 6 * Math.sin(3 * t) - 4 * Math.sin(4 * t);
  const angle = Math.atan2(dy, dx);

  span.style.transform = `translate3d(${x * scale}px, ${y * scale}px, 0px) rotate(${angle}rad)`;
  heartContainer.appendChild(span);
}

// Generate Ambient Dust
for (let j = 0; j < totalParticles; j++) {
  const particle = document.createElement('div');
  particle.className = 'particle';

  const posX = (Math.random() - 0.5) * 300;
  const posY = (Math.random() - 0.5) * 300;
  const posZ = (Math.random() - 0.5) * 150;

  particle.style.left = `${posX}px`;
  particle.style.top = `${posY}px`;
  particle.style.transform = `translateZ(${posZ}px)`;
  
  particle.style.animationDelay = `${Math.random() * 10}s`;
  heartContainer.appendChild(particle);
}

// Play/Pause song when tapping the floating heart button
musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.style.background = 'rgba(255, 20, 147, 0.6)';
    musicBtn.style.boxShadow = '0 0 25px rgba(255, 20, 147, 0.8)';
  } else {
    bgMusic.pause();
    musicBtn.style.background = 'rgba(255, 20, 147, 0.25)';
    musicBtn.style.boxShadow = '0 0 15px rgba(255, 20, 147, 0.4)';
  }
});