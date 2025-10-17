// Dark Mode Toggle
function toggleMode() {
  document.body.classList.toggle('light-mode');
}

// Matrix Efekti
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const chars = '01ハックハックハック';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#008000';
  ctx.font = fontSize + 'px monospace';
  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(draw, 50);

// Hoş geldin Alert
alert("Hoş geldin, hacker!");

// Login Formu
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;
  if (!username || !password) {
    alert('Lütfen tüm alanları doldurun!');
  } else {
    alert(Hoş geldin, ${username}!);
  }
});

// Sign-Up Formu
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;
  if (!username  !email  !password) {
    alert('Lütfen tüm alanları doldurun!');
  } else {
    alert(Kayıt başarılı, ${username}!);
  }
});

// Pencere Boyutu Değişince Matrix Yenile
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
