module.exports = {
    "globDirectory": "build/dist/app",
    "swDest": "build/dist/app/serviceworker.js",
    "globPatterns": [
      "**/js/**/workbox-sw.js",
      "**/TOCProduct/**/*.css",
      "**/TOCProduct/**/*.json",
      "**/TOCProduct/**/*.png"
    ],
    "globIgnores": ['**/server.js'],
    "modifyUrlPrefix": {
      'static' : 'static/cms'
    },
    "maximumFileSizeToCacheInBytes": 10 * 1024 * 1024,
    "swSrc": "src/serviceworker.js"
  };