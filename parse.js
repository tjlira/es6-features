const isEmptyObject = obj => Object.keys(obj).length === 0;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);