require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT
// habdlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

// Middleware
// Servir contenido estatico
app.use( express.static('public') )

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/hola-mundo', (req, res) => {
//   res.send('Hola Mundo desde su ruta')
// })

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Fernando Paredes Rios',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Fernando Paredes Rios',
    titulo: 'Curso de Node'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Fernando Paredes Rios',
    titulo: 'Curso de Node'
  });
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})