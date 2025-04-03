const express = require('express')
var app = express()
const port = 3000

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});
  

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/2', (req, res) => {
  res.sendFile(__dirname + '/index2.html');
})

app.get('/addnum', (req, res) => {
  res.sendFile(__dirname + '/addnum.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use("/public", express.static(__dirname + "/public"));