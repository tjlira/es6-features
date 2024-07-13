const timeFromDate = date => date.toTimeString().slice(0, 8);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};