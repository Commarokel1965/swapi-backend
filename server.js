require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.EXPRESS_PORT;
const swapiUrl = process.env.SWAPI_URL;

const starships = require('./Routes/starships')

app
    .use(cors())
    .use(starships)
    .listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

// Export the app
module.exports = app;