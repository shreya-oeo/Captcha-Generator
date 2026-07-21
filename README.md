# CAPTCHA Generator

Browser-based CAPTCHA generation using vanilla JavaScript and Canvas.

## Structure

```
captcha generation/
├── index.html          Entry point
├── css/
│   └── style.css       All styling
├── js/
│   ├── captcha.js      CAPTCHA class — generation and canvas rendering
│   ├── app.js          DOM binding, events, initialization
│   └── utils.js        Random helpers (int, float, element, color)
└── README.md
```

## How it works

- Generates a 6-character alphanumeric code (excludes confusable chars like `O`/`0`, `I`/`l`/`1`)
- Renders on canvas with grid, curves, dots, rotated characters, and overlay lines
- Each character gets a random font, size, rotation, and color
- User input is validated against the stored code
- Refresh or click the canvas to regenerate

## Usage

Open `index.html` in any modern browser. No build step or server required.
