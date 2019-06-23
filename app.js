const express = require('express');
const app = express();
const request = require('request');
const port = 8080;
require('dotenv').config();

app.set('view engine', 'ejs');

app.get('/results', (req, res) => {
    request(`http://www.omdbapi.com/?s=cat&apikey=${process.env.apiKey}`, (error, response, body) => {
        let results = JSON.parse(body)
        if (!error && response.statusCode == 200) {
            res.send(results.Search[0])
        }
    });
});

app.listen(port, () => console.log(`Movie app started on port: ${port}`))