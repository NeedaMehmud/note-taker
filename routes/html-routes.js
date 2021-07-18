const path = require('path');
module.exports = (server) => {
    server.get('/notes', function (_request, response) {
        response.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    server.get('*', function (request, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });
};