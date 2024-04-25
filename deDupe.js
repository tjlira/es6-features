const channel = getChannel(computedAppVersion);
const removeDuplicates = (arr) => [...new Set(arr)];
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const getRandomBoolean = () => Math.random() >= 0.5;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const isEven = (num) => num % 2 === 0;