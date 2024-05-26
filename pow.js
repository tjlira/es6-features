const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());