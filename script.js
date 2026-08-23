const range = document.getElementById('loveRange');
const percent = document.getElementById('percent');
const gaugeFill = document.getElementById('gaugeFill');
const answerBtn = document.getElementById('answerBtn');
const hint = document.getElementById('hint');
const againBtn = document.getElementById('againBtn');

function updateLove(value) {
  if (!range || !percent || !gaugeFill) return;
  const v = Number(value);
  percent.textContent = `${v}%`;
  range.style.setProperty('--value', `${v}%`);
  gaugeFill.style.transform = `rotate(${v * 1.8}deg)`;

  if (hint) {
    if (v < 25) hint.textContent = 'Hmm… is that really your answer? 👀';
    else if (v < 60) hint.textContent = 'A little more love maybe? 💜';
    else if (v < 90) hint.textContent = 'Okayyy, I can feel it! ✨';
    else hint.textContent = 'Now THAT is what I wanted to see! 💜';
  }
}

if (range) range.addEventListener('input', e => updateLove(e.target.value));

if (answerBtn) {
  answerBtn.addEventListener('click', () => {
    // The answer button now opens the next part of the surprise.
    window.location.href = 'memories.html';
  });
}

if (againBtn) {
  againBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

updateLove(range ? range.value : 0);

// QR code automatically points to the current GitHub Pages URL.
const qrTarget = document.getElementById('qrcode');
if (qrTarget && typeof QRCode !== 'undefined') {
  new QRCode(qrTarget, {
    text: window.location.href,
    width: 160,
    height: 160,
    colorDark: '#702795',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}
