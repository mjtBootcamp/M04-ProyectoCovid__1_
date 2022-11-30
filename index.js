// main1
const path = require('path')
const express = require('express')
const app = express()
const countries = require('./countries.json')
const usaDaily = require('./usa_daily.json')
const { validateToken, authorize } = require('./utils')
app.use(express.static('public'))

app.listen(3000, console.log("Servidor encendido 🟢"))
app.use(express.json())

app.get("/api/total", (req, res) => {
    res.json(countries)
})

app.post('/api/login', authorize)

app.get("/api/country/usa", validateToken, (req, res) => {
    res.json(usaDaily)
})
app.get('/covid19', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/covid19/index.html'))
});
