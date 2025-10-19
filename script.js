// Dark Mode Toggle
function toggleMode() {
  document.body.classList.toggle('light-mode');
}

// Matrix Efekti (requestAnimationFrame ile optimize)
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
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

// Hoş geldin Alert
alert("Hoş geldin, hacker!");

// Login Formu
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (!username || !password) {
    alert('Lütfen tüm alanları doldurun!');
  } else {
    alert(`Hoş geldin, ${username}!`);
    // Opsiyonel: localStorage.setItem('loggedInUser', username);
  }
});

// Sign-Up Formu (Gelişmiş doğrulama)
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('reg-username').value;
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!username || !email || !password) {
    alert('Lütfen tüm alanları doldurun!');
  } else if (!emailRegex.test(email)) {
    alert('Geçerli bir e-posta adresi girin!');
  } else if (password.length < 6) {
    alert('Şifre en az 6 karakter olmalı!');
  } else {
    alert(`Kayıt başarılı, ${username}!`);
    // Opsiyonel: localStorage.setItem('userData', JSON.stringify({username, email}));
  }
});

// Pencere Boyutu Değişince Matrix Yenile
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const columns = canvas.width / fontSize;
  drops.length = Math.floor(columns);
  drops.fill(1);
});
