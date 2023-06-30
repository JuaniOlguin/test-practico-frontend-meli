const express = require('express');
const app = express();

// enviroment variables
require('dotenv').config({path: './.env'});

const port = 3001;
const cors = require('cors');

// enable cors
app.use(cors());

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// router 
const router = require('./routes/index');
app.use('/', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})