const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()

MongoClient.connect('mongodb://localhost:27017/starwars-quotes', (err, database) => {
    if (err) return console.log(err)
    db = database
    // ... start the server
    app.get('/', (req, res) => {
        var cursor =  db.collection('quotes').find().toArray(function(err, results) {
            console.log(results)
            // send HTML file populated with quotes here
             res.send('hello world')
        })
    })

})


app.listen(4000)
