const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()

// Webpack Requirements
const webpack = require('webpack')
const config = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.set('view engine', 'ejs')

app.use(express.static('build'));

MongoClient.connect('mongodb://localhost:27017/starwars-quotes', (err, database) => {
    if (err) return console.log(err)

    db = database
    // ... start the server

    app.get('/', (req, res) => {
        var cursor =  db.collection('quotes').find().toArray(function(err, results) {
            console.log(results)
            // send HTML file populated with quotes here
            res.render('index', results)

        })
    })

})


app.listen(4000)
