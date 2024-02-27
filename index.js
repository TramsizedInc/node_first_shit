// const bootstrap = require('bootstrap');
const path = require('path');
const os = require('os');
const fs = require('fs').promises;
const bulldog = require('pug');
const express = require('express');
const http = require('node:http');
// const bootstrap = require('bootstrap');
const app = express();
const port = 3000;

//Pug implementation

app.set('view engine', 'pug');
app.set('views', './views');

//Static files
app.use(express.static('public/images'));
app.use(express.static('public/css'));
app.use(express.static('src'));


/*stuff to do before render */
const datas_array = [];

/*render */
app.get('/', (req, res) => res.render('./index.pug'));
app.get('/sportcars', (req, res) => {res.render('./sportcars.pug')});
app.get('/writeAutos', (req, res) => {res.render('./writeautos.pug')});
app.get('/favCars', (req, res) => {res.render('./favcars.pug')});
app.get('/404', (req, res) => res.render('./cars_404.pug'));
app.listen(port, () => console.log(`%cExample app listening on port ${port}!`, "color: red"));

// server.listen(3000, () => {console.log("%cááááh", "color: red")});