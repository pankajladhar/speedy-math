module.exports = {
  "globDirectory": "build",
  "swDest": "build/serviceworker.js",
  "globPatterns": [
    "**/*.{js,html,css,ico,png}"
  ],
  "maximumFileSizeToCacheInBytes": 10 * 1024 * 1024,
  "swSrc": "src/serviceworker.js"
};