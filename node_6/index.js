const socket = require('socket.io');
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    const readStream = fs.createReadStream(indexPath);
    readStream.pipe(res);
});

const io = socket(server);
const usersMap = {};
io.on('connection', (client) => {
    console.log('connection', client);
    usersMap[client.id] = {
      id: client.id,
    };
    client.on('client-msg', (data) => {
        console.log(data);
        const payload = {
            message: data.message.split('').reverse().join(''),
        };

        client.broadcast.emit('server-msg', payload);
        client.emit('server-msg', payload);
    });
    client.on('disconnect', () => {
        console.log('Disconnect');
        delete usersMap[client.id];
    })

    console.log(usersMap);
}); 

server.listen(5555);