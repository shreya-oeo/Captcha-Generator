import { randomInt, randomFloat, randomElement, generateCode, randomColor, randomRGBA } from './utils.js';

export class Captcha {
  constructor(canvas, options = {}) {
    this.canvas = canvas ?? null;
    this.ctx = canvas ? canvas.getContext('2d') : null;
    this.code = '';
    this.length = options.length ?? 6;
    this.fonts = options.fonts ?? ['Arial', 'Verdana', 'Georgia', 'Courier New', 'Times New Roman'];
  }

  generate() {
    this.code = generateCode(this.length);
    if (this.ctx) this._render();
    return this.code;
  }

  _render() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width || 400;
    const h = 90;

    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    this.ctx.scale(dpr, dpr);

    this._drawBackground(w, h);
    this._drawGrid(w, h);
    this._drawCurves(w, h);
    this._drawDots(w, h);
    this._drawCharacters(w, h);
    this._drawOverlay(w, h);
  }

  _drawBackground(w, h) {
    this.ctx.fillStyle = '#0d1117';
    this.ctx.fillRect(0, 0, w, h);
  }

  _drawGrid(w, h) {
    this.ctx.strokeStyle = 'rgba(48,54,61,0.25)';
    this.ctx.lineWidth = 0.5;
    for (let x = 0; x < w; x += 20) {
      this.ctx.beginPath(); this.ctx.moveTo(x, 0); this.ctx.lineTo(x, h); this.ctx.stroke();
    }
    for (let y = 0; y < h; y += 20) {
      this.ctx.beginPath(); this.ctx.moveTo(0, y); this.ctx.lineTo(w, y); this.ctx.stroke();
    }
  }

  _drawCurves(w, h) {
    this.ctx.strokeStyle = `hsla(${randomInt(0,360)},70%,50%,0.2)`;
    this.ctx.lineWidth = randomInt(1, 3);
    for (let i = 0; i < 3; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(randomInt(0, w), randomInt(0, h));
      this.ctx.quadraticCurveTo(
        randomInt(0, w), randomInt(0, h),
        randomInt(0, w), randomInt(0, h)
      );
      this.ctx.stroke();
    }
  }

  _drawDots(w, h) {
    for (let i = 0; i < 60; i++) {
      this.ctx.fillStyle = randomRGBA();
      this.ctx.beginPath();
      this.ctx.arc(randomInt(0, w), randomInt(0, h), randomInt(1, 3), 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  _drawCharacters(w, h) {
    const spacing = w / (this.code.length + 1);
    for (let i = 0; i < this.code.length; i++) {
      const x = spacing * (i + 1) + randomInt(-8, 8);
      const y = randomInt(45, 70);
      const rot = (randomInt(-25, 25) * Math.PI) / 180;
      const size = randomInt(28, 40);
      const font = `${randomInt(600, 800)} ${size}px ${randomElement(this.fonts)}`;

      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate(rot);
      this.ctx.font = font;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';

      this.ctx.fillStyle = `hsla(${Math.random() * 360}, 60%, 30%, 0.5)`;
      this.ctx.fillText(this.code[i], 2, 2);

      this.ctx.fillStyle = randomColor();
      this.ctx.fillText(this.code[i], 0, 0);
      this.ctx.restore();
    }
  }

  _drawOverlay(w, h) {
    this.ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    this.ctx.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, randomInt(0, h));
      this.ctx.lineTo(w, randomInt(0, h));
      this.ctx.stroke();
    }
  }
}
