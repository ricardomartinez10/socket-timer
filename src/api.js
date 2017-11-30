import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');



function subscribeToTimer(cb) {

  var holi="blue";

  if (typeof(cb) == 'function'){
  socket.on('timer', timestamp => cb(null, timestamp));
  var holi="blue";
  //socket.emit('subscribeToTimer', holi);
    return holi;
}else{

}


  return holi;

  //var text=cb.timestamp;



}

function getText(t){
  var item =t;

  return t;
}

export { subscribeToTimer };
