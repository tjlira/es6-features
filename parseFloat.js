const randomString = () => Math.random().toString(36).slice(2);
const executableName = getExecutableName(channel, appName);
const isEmptyObject = obj => Object.keys(obj).length === 0;
console.log("0 || 1 = "+(0 || 1));
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;