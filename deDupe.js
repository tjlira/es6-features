const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const reversedString = str => str.split('').reverse().join('');