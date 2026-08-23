const range = document.getElementById('loveRange');
const percent = document.getElementById('percent');
const gaugeFill = document.getElementById('gaugeFill');
const answerBtn = document.getElementById('answerBtn');
const hint = document.getElementById('hint');
const testScreen = document.getElementById('testScreen');
const resultScreen = document.getElementById('resultScreen');
const resultTitle = document.getElementById('resultTitle');
const resultText = document.getElementById('resultText');
const againBtn = document.getElementById('againBtn');
const toast = document.getElementById('toast');

function updateLove(value) {
  const v = Number(value);
  percent.textContent = `${v}%`;
  range.style.setProperty('--value', `${v}%`);
  // Covers the gauge with a soft layer from left to right.
  gaugeFill.style.transform = `rotate(${v * 1.8}deg)`;

  if (v < 25) hint.textContent = 'Hmm… is that really your answer? 👀';
  else if (v < 60) hint.textContent = 'A little more love maybe? 💜';
  else if (v < 90) hint.textContent = 'Okayyy, I can feel it! ✨';
  else hint.textContent = 'Now THAT is what I wanted to see! 💜';
}

range.addEventListener('input', e => updateLove(e.target.value));

answerBtn.addEventListener('click', () => {
  const value = Number(range.value);
  testScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  resultScreen.style.animation = 'none';
  requestAnimationFrame(() => resultScreen.style.animation = 'rise .7s ease both');

  if (value >= 70) {
    resultTitle.textContent = 'You passed the love test 💜';
    resultText.textContent = `${value}% love detected. Your little surprises are waiting for you.`;
  } else {
    resultTitle.textContent = 'Aww… try again? 🥺';
    resultText.textContent = `${value}% is cute, but I think you can do better than that.`;
  }
});

againBtn.addEventListener('click', () => {
  range.value = 0;
  updateLove(0);
  resultScreen.classList.add('hidden');
  testScreen.classList.remove('hidden');
});

document.querySelectorAll('.gift').forEach(gift => {
  gift.addEventListener('click', () => showToast(gift.dataset.gift));
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

updateLove(0);
