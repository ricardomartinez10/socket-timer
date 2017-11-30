import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function mensaje(cb) {
  socket.on('connect', timestamp => cb(null, timestamp));
   socket.emit('message', 'GO');
}
export { mensaje };
