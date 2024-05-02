// server.js
const express = require('express');
const app = express();
const userController = require('./controllers/userController');
const database = require("./config/database");

// Middleware to parse JSON bodies
app.use(express.json());
database.connect();

// User Registration
app.post('/register', userController.register);

// User Login
app.post('/login', userController.login);

// Forget User Password
app.post('/forgot-password', userController.forgotPassword);

// Default route
app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running ...',
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`App is Listening at ${PORT}`);
});
