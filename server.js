const express = require("express");
const server = express();
const PORT = process.env.PORT || 5000;
require('./routes/api-routes.js')(server);
require('./routes/html-routes.js')(server);

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static("public"));

app.listen(PORT => {
    console.log(`server listening: ${PORT}`)
});