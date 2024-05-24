const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const merge = Object.assign({}, obj1, obj2);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';