const fs = require('fs');
// 'uuid' for unique id
const { v4: uuidv4 } = require('uuid');
let data = require("../db/db.json");

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
        let noteId = request.params.id.toString().replace(":", "");
        console.log(`\n\nDELETE note request for noteId: ${noteId}`);
        let newData = [];
        for(let i = 0; i < data.length; i++) {
            if(data[i].id != noteId) {
                newData.push(data[i]);
            }
        }
        fs.writeFileSync('./db/db.json', JSON.stringify(newData));
        console.log(`\nSuccessfully deleted note with id : ${noteId}`);
        data = newData;
        response.json(newData);
    });
};