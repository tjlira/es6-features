const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const merge = [...new Set([...a, ...b])];
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);