export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomChar() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  return chars[Math.floor(Math.random() * chars.length)];
}

export function generateCode(length = 6) {
  let code = '';
  for (let i = 0; i < length; i++) code += randomChar();
  return code;
}

export function randomColor(hue, sat, light) {
  const h = hue ?? randomInt(0, 360);
  const s = sat ?? randomInt(60, 80);
  const l = light ?? randomInt(50, 75);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function randomRGBA(alpha) {
  const a = alpha ?? randomFloat(0.05, 0.25);
  return `rgba(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)},${a})`;
}
