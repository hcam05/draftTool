const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.config.js');
const app = express();
const mcache = require('memory-cache');
const bodyParser = require('body-parser');

const getNflDbData = require('./data/nflData')

//CACHE//
let cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key);

    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.end
      res.end = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next();
    }
  }
}

// Mongoose Setup //

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/nfl_draft_data');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// MIDDLEWARE //

app.use(express.static(__dirname + '/www'));

// Webpack //

const compiler = webpack(webpackConfig);
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'main.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
app.use(webpackHotMiddleware(compiler))

// Body Parser 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 

app.use(function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// ROUTES //
app.get('/nfldata', cache(10), getNflDbData);

const server = app.listen(9000, function() {
  const port = server.address().port;
  console.log(`Is it over ${port}?!?!`);
});