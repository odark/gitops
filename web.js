const express = require('express');
const { config } = require('process');
const app = express()
const port = 3000;

app.get('/', (res, req) => {
    res.send('Hello world agai999')
});

app.listen(port, () => {
    console.log(`Servier is Running. http://localhost:${port}`);
})