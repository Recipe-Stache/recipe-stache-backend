const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const connectMongo = require('./config/db');

connectMongo();
const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`));
