import { generateCode } from './js/utils.js';

// Works in Node.js, Bun, and Deno
// Example: generate a code and print it
const code = generateCode(6);
console.log('CAPTCHA code:', code);
console.log('Length:', code.length);
console.log('Runtimes: Node.js | Bun | Deno');
