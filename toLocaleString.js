const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const buildOutputPath = path.join(repositoryRootPath, 'out');