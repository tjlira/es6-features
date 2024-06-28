const shuffledArray = array.sort(() => Math.random() - 0.5); 
const fullName = name || 'buddy';
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);