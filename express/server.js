'use strict';


const { readdirSync } = require('fs');
const fs = require('fs');
const http = require("http");
const settings = require("../settings.json");
const domain = "cabot-bot.xyz";

const express = require('express')
const app = express()
const path = require('path')
const port = 5000
const serverless = require('serverless-http');

const router = express.Router();

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//static files
// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'src')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'src'));

//main
router.get('/', (req, res) => {
  res.sendFile('src/index.html', {
      root: path.join(__dirname, './')
  })
})


router.use('/abouttest', (req, res) => {
  res.sendFile('src/about.html', {
      root: path.join(__dirname, './')
  })
})

//pages
router.get('/about', (req, res) => {
  res.sendFile('src/about.html', {
      root: path.join(__dirname, './')
  })
})
router.get('/features', (req, res) => {
  res.sendFile('src/features.html', {
      root: path.join(__dirname, './')
  })
})
router.get('/commands', (req, res) => {
  res.sendFile('src/features.html', {
      root: path.join(__dirname, './')
  })
})
router.get('/privacy', (req, res) => {
  res.sendFile('src/privacy.html', {
      root: path.join(__dirname, './')
  })
})
router.get('/terms', (req, res) => {
  res.sendFile('src/terms.html', {
      root: path.join(__dirname, './')
  })
})
router.get('/legal', (req, res) => {
  res.sendFile('src/legal.html', {
      root: path.join(__dirname, './')
  })
})
router.get('/credits', (req, res) => {
  res.sendFile('src/credits.html', {
      root: path.join(__dirname, './')
  })
})

//coming soon
router.get('/blog', (req, res) => {
  res.render('comingSoon')
})
router.get('/library', (req, res) => {
  res.render('comingSoon')
})
router.get('/api', (req, res) => {
  res.render('comingSoon')
})


//redirects
router.get('/invite', (req, res) => {
  res.redirect('https://discord.com/api/oauth2/authorize?client_id=882064634180427847&permissions=157572000833&scope=bot%20applications.commands')
})
router.get('/support', (req, res) => {
  res.redirect('https://discord.gg/Gjjq7MmssX')
})
router.get('/instagram', (req, res) => {
  res.redirect('https://www.instagram.com/cabot.bot.xyz/')
})


//lol
router.get('/secret', (req, res) => {
  res.send('No secrets here! lol')
})

router.get("*", (req, res) => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;



  if (fullUrl == domain || fullUrl == `${domain}/style.css` || fullUrl == `${domain}/style.css` || fullUrl == `${domain}/favico.ico` ) {

    res.render(res, req, "index.html");


  } else {

    res.render(res, req, "404.html");
  }
});


app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);