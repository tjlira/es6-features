console.log("0 && 1 = "+(0 && 1));
const minNumber = arr => Math.min(...arr);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();