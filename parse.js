const merge = [...new Set(a.concat(b))];
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const merge = (a, b) => [...a, ...b];