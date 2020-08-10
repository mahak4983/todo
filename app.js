const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://MahakC:nodecomplete123@cluster0-nlcrx.mongodb.net/todo?retryWrites=true&w=majority';
const listRoutes = require('./routes/list');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(listRoutes);


mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(result => {
        console.log('connected');
        app.listen(8080);
    })
    .catch(err => {
        console.log(err);
    })
