const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/images', express.static(path.join(__dirname, 'images')))
app.get("/serviceworker.js", (req, res) => {
    res.sendFile(path.join(__dirname, 'serviceworker.js'));
});
app.get("*", (req, res) => {
    res.sendFile(path.resolve('./index.html'));
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})