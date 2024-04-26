const merge = [...new Set([...a, ...b])];
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const stringReverse = str => str.split("").reverse().join("");
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isTabInView = () => !document.hidden;