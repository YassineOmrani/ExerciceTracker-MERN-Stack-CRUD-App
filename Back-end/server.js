
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({extended : true}));
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/mern", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
 );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const exercicesRouter   = require('./routes/exercices');
const usersRouter       = require('./routes/users');

app.use('/exercices', exercicesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server up and running on port : ${port} `);
})