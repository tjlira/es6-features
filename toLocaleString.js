const merge = [...new Set([...a, ...b])];
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
var arr2 = arr1.reverse();