const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.config.js');
const app = express();
const mcache = require('memory-cache');

const getNflApiData = require('./data/nflData')

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

// Webpack //

const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
// ROUTES //
app.get('/nfldata', cache(10), getNflApiData);

const server = app.listen(9000, function() {
  const port = server.address().port;
  console.log(`Is it over ${port}?!?!`);
});