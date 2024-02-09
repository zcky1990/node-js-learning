
const express = require("express");
const config = require("./../config/config");

const app = express();
app.use(express.json());

const port = config.port || 3000;

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('app/public'));

app.listen(port, () => {
    console.log("Server Listening on port: ", port);
});


const wiki = require("./controllers/api/example");
app.use("/api/v1", wiki);

const test = require("./controllers/index");
app.use("/", test)