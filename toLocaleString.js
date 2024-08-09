const shuffledArray = array.sort(() => Math.random() - 0.5); 
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const removeDuplicates = (arr) => [...new Set(arr)];