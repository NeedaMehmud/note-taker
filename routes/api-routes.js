const fs = require('fs');
// 'uuid' for unique id
const { v4: uuidv4 } = require('uuid');
const data = require("../db/db.json");

// routing api get request
module.exports = (server) => {

    server.get("/api/notes", (request, response) => {
        response.json(data);
    });


    server.post("/api/notes", (request, response) => {
        let newNote = {
            id: uuidv4(),
            title: request.body.title,
            text: request.body.text
        }
        data.push(newNote);
        let jsonNote = JSON.stringify(data);

        fs.writeFile('./db/db.json', jsonNote, (err) => {
            if (err) throw err;
        })
        console.log("\nSuccessfully added new note to 'db.json' file!");
        response.end();
    });


    server.delete("/api/notes/:id", (request, response) => {
        let noteId = request.params.id.toString();
        console.log(`\n\nDELETE note request for noteId: ${noteId}`);
        fs.writeFileSync('./db/db.json', JSON.stringify(newData));
        console.log(`\nSuccessfully deleted note with id : ${noteId}`);
        response.json(newData);
    });
};