const { query } = require('express')
const express = require('express')
const app = express()
const port = 3020

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})
app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/script.js')
})

app.get('/texte', (req, res) => {
  console.log("texte hugo "+req.query.text);
  var requestJSON = req.query.text;
  var final = JSON.stringify({text:requestJSON});
  console.log("Sending reponse"+ final);
  res.send(final)
})
app.get('/name', (req, res) => {
  var requestJSON2 =req.query.text;
  console.log(req.query.text);
  res.sendFile(__dirname + `/${requestJSON2}`+".txt");
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})