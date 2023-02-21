const express = require('express');
const { config } = require('process');
const app = express()
const port = 3000;

app.get('/', (res, req) => {
    res.setEncoding('Hello world!!')
});

app.listen(port, () => {
    config.log(`Servier is Running. http://localhost:${port}`);
})