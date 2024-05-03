var DELIM_SIZE = 4;
const fullName = name || 'buddy';
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();