const express = require('express');
const methodOverride = require('method-override');

// Env
require('dotenv').config();

// Connection
require('./config/db');

// Connection Rabbitmq
const rabbitmq = require('./helpers/rabbitmq.helper');

const app = express();

// Set up method override
app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Seperate Route
const userLog_route = require('./routes/userLog.route');
app.use('/api/v1', userLog_route);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    rabbitmq.receive();
    console.log(`Server Jalan di http://localhost:${PORT}`)
});