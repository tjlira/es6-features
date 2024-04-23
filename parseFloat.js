const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const buildOutputPath = path.join(repositoryRootPath, 'out');
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const maxNumber = arr => Math.max(...arr);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const value = ( 5 < 7 ) ? "True" : "False" ;