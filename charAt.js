const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;