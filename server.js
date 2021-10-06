const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const chalk = require('chalk');
const methodOverride = require('method-override')
const postRotes = require('./routes/post-routes');
const postApiRotes = require('./routes/api-post-routes');
const contactRoutes = require('./routes/contact-routes');
const createPath = require('./helpers/create-path');
require('dotenv').config();

const  errorMsg = chalk.bgKeyword('white').redBright;
const  successMsg = chalk.bgKeyword('green').white;

const app = express();
const PORT = 3001;
const db = "mongodb+srv://mihhha1985:nintendo27@cluster0.axbjz.mongodb.net/node-bloge?retryWrites=true&w=majority";

mongoose
    .connect(process.env.MONGO_DB)
    .then(res => console.log(successMsg('Connection DB')))
    .catch(err => console.error(errorMsg(err)));

app.listen(process.env.PORT, 'localhost', err => {
    err ? console.error(errorMsg(err)) : console.log(successMsg(`Server listener ${process.env.PORT}`));
})

app.set('view engine', 'ejs');

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static('css'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: false}));

app.use(postRotes);

app.use(postApiRotes);

app.use(contactRoutes);

app.use((req, res) => {

    res.status(404).render(createPath('error'));
})