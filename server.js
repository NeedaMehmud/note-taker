const express = require('express');
const PORT = process.env.PORT || 5000;
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static("public"));

require('./routes/api-routes.js')(server);
require('./routes/html-routes.js')(server);

server.listen(PORT, () => {
    console.log(`server listening: ${PORT}`)
});