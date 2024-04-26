const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const timeFromDate = date => date.toTimeString().slice(0, 8);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const allResults = await Promise.all(items.map(async (item) => {}));
var arr2 = arr1.reverse();