const express = require('express');
const app = express();
const request = require('request');
const port = 8080;

app.listen(port, () => console.log(`Movie app started on port: ${port}`))