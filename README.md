# CAPTCHA Generator
## Demo: https://shreya-oeo.github.io/Captcha-Generator/

**Lightweight.** Browser-based CAPTCHA generation using vanilla Canvas API. No dependencies, no build step, no bloat.

> **Security warning:** This is a client-side CAPTCHA. it's easily bypassed. Do NOT use this for real security. This is for testing, prototypes, and learning only. A real CAPTCHA needs server-side validation and proper bot detection.

## Features

- 6-character alphanumeric code (excludes confusable chars: `O`/`0`, `I`/`l`/`1`)
- Canvas rendering with grid, curves, dots, rotated characters, and overlay lines
- Random font, size, rotation, and color per character
- Client-side verification with feedback
- Zero dependencies — pure vanilla JS

## Project structure

```
captcha generation/
├── index.html          Browser entry point
├── css/
│   └── style.css       All styling
├── js/
│   ├── captcha.js      Captcha class — code generation + canvas rendering
│   ├── app.js          DOM binding, events, verification
│   └── utils.js        Shared helpers (random, char generation)
├── server.js           Server-side usage example
├── package.json        npm meta
└── README.md
```

## Browser usage

Open `index.html` in any modern browser.

**Live demo:** https://shreya-oeo.github.io/Captcha-Generator/

## Server-side usage

The core generation logic (`utils.js`) is pure JavaScript with zero DOM dependencies. It runs in **Node.js**, **Bun**, and **Deno** without modification.

```js
import { generateCode } from './js/utils.js';

const code = generateCode(6);
console.log(code); // "aK3xP9"
```

```bash
node server.js
bun server.js
deno run server.js
```

## Why not use this in production?

- The CAPTCHA code is stored in a JS variable — trivial to read from DevTools or automation
- No server-side validation — a bot can just POST the correct answer without ever rendering the page
- No rate limiting, challenge rotation, or bot fingerprinting
- Browser Canvas can be automated with headless browsers

Use **reCAPTCHA**, **Cloudflare Turnstile**, or **hCaptcha** for anything real. This is a toy.
