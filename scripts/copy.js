const fs = require('fs');
const path = require('path');
const srcDir = path.resolve(__dirname, '..', 'src');
const nodeModulesDir = path.resolve(__dirname, '..', 'node_modules');
const buildDir = path.resolve(__dirname, '..', 'build');
const colors = require('./colors')

const files = [
    {
        "src" : `${srcDir}/serviceworker.js`,
        "dest": `${buildDir}/serviceworker.js`
    },
    {
        "src" : `${nodeModulesDir}/workbox-sw/build/workbox-sw.js`,
        "dest": `${buildDir}/static/js/workbox-sw.js`
    }
]

const copyFiles = () => {
    files.map(({src, dest})=>{
        fs.copyFileSync(src, dest);
        console.log(colors.green(`${src} copied.`));
    })
}

copyFiles()
