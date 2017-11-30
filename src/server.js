
const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToTimer', function (data) {

    console.log('mensaje recibido ',data);

    var obj = JSON.parse(data);
     console.log("nombre ninja:  "+obj.nombre);
    console.log('LLega mensaje al servidor : ', data);
          io.emit('timer',data);
    });
  });
/*
io.on('connection', function (socket) {
  io.emit('this', { will: 'be received by everyone'});
  socket.on('message', function (data) {
    console.log('I received a private message by ',data);

      io.emit('this', { will: 'be received by everyone'});

        io.emit('fecha', new Date());
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});
*/
const port = 8000;
io.listen(port);
console.log('listening on port ', port);
