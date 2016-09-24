import * as express from 'express';
import * as socketIo from 'socket.io';
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data: any) {
    console.log(data);
  });
});

server.listen(8080, () => {
  console.log(`Servering listening at ${server.address().address}:${server.address().port}`)
});