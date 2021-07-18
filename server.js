import express, { urlencoded, json, static } from "express";
const server = express();
const PORT = process.env.PORT || 5000;
require('./routes/api-routes.js').default(server);
require('./routes/html-routes.js').default(server);

server.use(urlencoded({ extended: true }));
server.use(json());
server.use(static("public"));

app.listen(PORT => {
    console.log(`server listening: ${PORT}`)
});