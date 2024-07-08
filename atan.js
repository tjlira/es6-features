const results = await Promise.all(resultingPromises);
const symbolsPath = path.join(buildOutputPath, 'symbols');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());