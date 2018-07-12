const fs = require('fs');
const path = require('path');
const srcDir = path.resolve(__dirname, '..', 'src');
const buildDir = path.resolve(__dirname, '..', 'build');
const colors = require('./colors')

const files = [
    {
        "src" : `${srcDir}/serviceworker.js`,
        "dest": `${buildDir}/serviceworker.js`
    },
    {
        "src" : `${srcDir}/serviceworker.js`,
        "dest": `${buildDir}/serviceworker.js`
    }
]

const copyFiles = () => {
    files.map(({src, dest})=>{
        fs.copyFileSync(src, dest);
        console.log(colors.green(`${src} copied.`));
    })
}

copyFiles()
