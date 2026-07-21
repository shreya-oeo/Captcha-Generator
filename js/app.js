import { Captcha } from './captcha.js';

const canvas = document.getElementById('captcha');
const input = document.getElementById('input');
const verifyBtn = document.getElementById('verify');
const refreshBtn = document.getElementById('refresh');
const message = document.getElementById('message');

const captcha = new Captcha(canvas);

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
}

function clearMessage() {
  message.textContent = '';
  message.className = 'message';
}

function regenerate(e) {
  if (e) e.preventDefault();
  captcha.generate();
  clearMessage();
  input.value = '';
  input.focus();
}

function verify(e) {
  if (e) e.preventDefault();
  const val = input.value.trim();
  if (!val) {
    showMessage('enter the text first', 'error');
    return;
  }
  if (val === captcha.code) {
    showMessage('human confirmed. proceed.', 'success');
    setTimeout(clearMessage, 2500);
  } else {
    regenerate();
    showMessage('invalid captcha', 'error');
  }
}

canvas.addEventListener('click', regenerate);
refreshBtn.addEventListener('click', regenerate);
verifyBtn.addEventListener('click', verify);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    verify();
  }
});

captcha.generate();

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => captcha._render(), 150);
});
