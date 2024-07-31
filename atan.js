const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
var regexp  = new RegExp('{{([^}]+)}}', 'g');