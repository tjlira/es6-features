const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const flattenedArray = arr => [].concat(...arr);
const scriptRootPath = path.join(repositoryRootPath, 'script');