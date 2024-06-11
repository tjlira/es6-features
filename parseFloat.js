const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log("1 && 2 = "+(1 && 2));
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());