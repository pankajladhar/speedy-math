const fs = require('fs');
const path = require('path');
const srcDir = path.resolve(__dirname, '..', 'src');
const buildDir = path.resolve(__dirname, '..', 'build');
const colors = require('./colors')

const files = [
    { "src": `${buildDir}/asset-manifest.json`},
    { "src": `${buildDir}/service-worker.js`}
]

const deleteFiles = () => {
    files.map(({ src }) => {
        fs.unlinkSync(src);
        console.log(colors.red(`${src} copied.`));
    })
}

deleteFiles()
