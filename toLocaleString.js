const merge = (a, b) => [...a, ...b];
const merge = [...new Set([...a, ...b])];