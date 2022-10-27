const express = require('express');
const session = require('express-session');

const path = require('path');
const app = express();

const signupRouter = require('./routes/signup.route');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.use("/", signupRouter);
app.use("/signup", signupRouter);

const PORT = 8080;
app.set('port', PORT);
app.listen(PORT, console.log(`Sever started on port ${PORT}`));