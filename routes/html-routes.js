import { join } from "path";
export default function (server){
server.get('/notes', function(_request, response) {
    response.sendFile(join(__dirname, '../public/notes.html'));
});

server.get('*', function(request, response) {
    response.sendFile(join(__dirname, '../public/index.html'));
});
};