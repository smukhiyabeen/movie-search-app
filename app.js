const express = require('express');
const app = express();
const request = require('request');
const port = 8080;

require('dotenv').config();

app.set('view engine', 'ejs');


app.get('/', (req,res) => {
    res.render('search')
});

app.get('/results', (req, res) => {
    let search = req.query.search
    let url = `http://www.omdbapi.com/?s=${search}&apikey=${process.env.apiKey}`
    request(url, (error, response, body) => {
        let data = JSON.parse(body);
        if (!error && response.statusCode == 200) {
            res.render("results", {data: data});
        }
    });
});

app.listen(port, () => console.log(`Movie app started on port: ${port}`))