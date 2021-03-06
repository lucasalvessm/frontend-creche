const express = require('express');
const path = require('path');
const app = express();
 
app.use(express.static(`./dist/app`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`./dist/app/index.html`), { root: __dirname });
});
 
app.listen(process.env.PORT || 8080);