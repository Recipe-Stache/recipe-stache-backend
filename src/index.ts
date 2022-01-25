const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Routes
const recipes = require('./routes/recipes');

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/recipes', recipes);

const port: number = parseInt(process.env.PORT as string, 10) || 5000;

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`));
