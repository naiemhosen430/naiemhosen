const express = require('express');
const { commonrouter } = require('./router/commonrouter/cpmmonrouter');
const app = express();
const ejs = require('ejs');

app.use(commonrouter);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));


module.exports = app;