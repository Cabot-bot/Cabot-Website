const { readdirSync } = require('fs');
const fs = require('fs');
const http = require("http");
const domain = "cabot-bot.xyz";

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT;

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
app.get('/', (req, res) => {
  res.sendFile('src/index.html', {
      root: path.join(__dirname, './')
  })
})


//pages
app.get('/about', (req, res) => {
  res.sendFile('src/about.html', {
      root: path.join(__dirname, './')
  })
})
app.get('/features', (req, res) => {
  res.sendFile('src/features.html', {
      root: path.join(__dirname, './')
  })
})
app.get('/commands', (req, res) => {
  res.sendFile('src/features.html', {
      root: path.join(__dirname, './')
  })
})
app.get('/privacy', (req, res) => {
  res.sendFile('src/privacy.html', {
      root: path.join(__dirname, './')
  })
})
app.get('/terms', (req, res) => {
  res.sendFile('src/terms.html', {
      root: path.join(__dirname, './')
  })
})
app.get('/legal', (req, res) => {
  res.sendFile('src/legal.html', {
      root: path.join(__dirname, './')
  })
})
app.get('/credits', (req, res) => {
  res.sendFile('src/credits.html', {
      root: path.join(__dirname, './')
  })
})

//coming soon
app.get('/blog', (req, res) => {
  res.render('comingSoon')
})
app.get('/library', (req, res) => {
  res.render('comingSoon')
})
app.get('/api', (req, res) => {
  res.render('comingSoon')
})


//redirects
app.get('/invite', (req, res) => {
  res.redirect('https://discord.com/api/oauth2/authorize?client_id=882064634180427847&permissions=157572000833&scope=bot%20applications.commands')
})
app.get('/support', (req, res) => {
  res.redirect('https://discord.gg/Gjjq7MmssX')
})
app.get('/instagram', (req, res) => {
  res.redirect('https://www.instagram.com/cabot.bot.xyz/')
})


//lol
app.get('/secret', (req, res) => {
  res.send('No secrets here! lol')
})

app.get("*", (req, res) => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;



  if (fullUrl == domain || fullUrl == `${domain}/style.css` || fullUrl == `${domain}/style.css` || fullUrl == `${domain}/favico.ico` ) {

    res.render(res, req, "index.html");


  } else {

    res.render(res, req, "404.html");
  }
});



app.listen(port, () => { 
  console.log(`Dashboard is up and running on port ${port}`)
})