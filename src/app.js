const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const {
	itemRoutes,
	healthCheckRoutes
} = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cors());

app.get('/', (req, res) => {
	res.json({
		status: true
	})
});

app.use('/health', healthCheckRoutes);
app.use('/item', itemRoutes);

// Connect to mongoDB
let mongoDB = process.env.MONGODB_URL || "mongodb://localhost:27017/express-api-unit-test-starter";
mongoose.connect(mongoDB, {
	useNewUrlParser: true
});
mongoose.Promise = global.Promise;

mongoose.connection.on('error', console.error.bind(console, '❌❌❌ MongoDB Connection Error ❌❌❌'));

module.exports = app;