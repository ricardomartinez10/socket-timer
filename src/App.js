import React, { Component } from 'react';
import { subscribeToTimer } from './api';
import { mensaje } from './funcion';
import logo from './move.png';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import {DB_CONFIG} from './config/config'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage'

class App extends Component {


  constructor(props) {
    super(props);


    this.app=firebase.initializeApp(DB_CONFIG);
    this.database=this.app.database().ref().child('rutinas');
      this.db=this.app.database().ref().child('come');
    this.state = {

  timestamp: 'no timestamp yet',

  todos: [
          {key:'prueba1',id:2,imagen:"holpoi",fecha:"Rutina Uno : 25/11/2017 19:15:00",cantidadRutinas: 4,nivelRutina:5,totalJuego:150,porcentajeRutina:70,promedioAngulo:45,promedioDolor:4,promedioFuerza:55,elevacionEfectivas:5,elevacionFallidas:4,sentadillasEfectivas:2,sentadillasFallidas:5,marchaEfectivas:2,marchaFallidas:1,vuno:true,vdos:false,vtres:false},
          {key:'prueba1',id:2,imagen:"holpoi",fecha:"Rutina Uno : 26/11/2017 17:40:12",cantidadRutinas: 4,nivelRutina:5,totalJuego:150,porcentajeRutina:70,promedioAngulo:45,promedioDolor:4,promedioFuerza:55,elevacionEfectivas:5,elevacionFallidas:4,sentadillasEfectivas:2,sentadillasFallidas:5,marchaEfectivas:2,marchaFallidas:1,vuno:true,vdos:false,vtres:false},
          {key:'prueba1',id:2,imagen:"holpoi",fecha:"Rutina Uno : 27/11/2017 14:34:04",cantidadRutinas: 4,nivelRutina:5,totalJuego:150,porcentajeRutina:70,promedioAngulo:45,promedioDolor:4,promedioFuerza:55,elevacionEfectivas:5,elevacionFallidas:4,sentadillasEfectivas:2,sentadillasFallidas:5,marchaEfectivas:2,marchaFallidas:1,vuno:true,vdos:false,vtres:false},
          {key:'prueba1',id:2,imagen:"holpoi",fecha:"Rutina Uno : 28/11/2017 19:15:30",cantidadRutinas: 4,nivelRutina:5,totalJuego:150,porcentajeRutina:70,promedioAngulo:45,promedioDolor:4,promedioFuerza:55,elevacionEfectivas:5,elevacionFallidas:4,sentadillasEfectivas:2,sentadillasFallidas:5,marchaEfectivas:2,marchaFallidas:1,vuno:true,vdos:false,vtres:false},

      ],
      nextId: 3
   };



// Subo los datos a firebase

   for (var i=0;i<this.state.todos.length;i++){
      this.database.child(this.state.todos[i].key+i).set(this.state.todos[i]);
   }

   // Cada que llega el mensaje se ejecuta esta funcion


{/*
   subscribeToTimer((err, data) => this.setState(function(prevState, props){
    // llega el mensaje en data
    console.log("print "+data);
    // convierto el mensaje en json
    var obj = JSON.parse(data);

   // Creo el nuevo item con el json, aumento el id y lo agrego al array
   var
   item={id:this.state.nextId,fecha:obj.fecha,cantidadRutinas:obj.cantidadRutinas,nivelRutina:obj.nivelRutina,totalJuego:obj.totalJuego,porcentajeRutina:obj.porcentajeRutina,promedioAngulo:obj.promedioAngulo,promedioDolor:obj.promedioDolor,promedioFuerza:obj.promedioFuerza,elevacionEfectivas:obj.elevacionEfectivas,elevacionFallidas:obj.elevacionFallidas,sentadillasEfectivas:obj.sentadillasEfectivas,sentadillasFallidas:obj.sentadillasFallidas,marchaEfectivas:obj.marchaEfectivas,marchaFallidas:obj.marchaFallidas,vuno:obj.vuno,puntaje:obj.puntaje};
   this.database.child(obj.nombre).set(item);
  nextId: ++this.state.nextId;

  var elementos=this.state.todos;
  // Compruebo si ya esta el elemento
  for (var i=0;i<this.state.todos.length;i++){
       if(elementos[i].nombre!=obj.nombre){
        this.state.todos.push(item);
      }
  }
   // organizo el array de menor a mayor
   this.state.todos.sort(function(a, b){
       return b.puntaje-a.puntaje
   });

   // Coloco las posiciones de cada item
   for (var i=0;i<this.state.todos.length;i++){
        this.state.todos[i].id=i+1;
   }

   //Creo una copia del array
   let todos = this.state.todos.slice();

   //Actualizo la vistax
   return {
       todos: todos
   }
}));
*/}


// organizo el array de menor a mayor
this.state.todos.sort(function(a, b){
    return b.puntaje-a.puntaje
});

// Coloco las posiciones de cada item
for (var i=0;i<this.state.todos.length;i++){
     this.state.todos[i].id=i+1;
}

this.addTodo = this.addTodo.bind(this);
this.removeTodo = this.removeTodo.bind(this);

  }



  componentWillMount(){

    this.state.todos=[];
  const previousNotes = this.state.todos;

  // DataSnapshot
  this.database.on('child_added', snap => {

  let mensaje=snap.val();
  console.log("holi  "+mensaje)
    previousNotes.push({
      key:snap.val().key,
      id: 9,

      imagen:snap.val().imagen,
      fecha:snap.val().fecha,
      cantidadRutinas: snap.val().cantidadRutinas,
      nivelRutina:snap.val().nivelRutina,
      totalJuego:snap.val().totalJuego,
      porcentajeRutina:snap.val().porcentajeRutina,

      promedioAngulo:snap.val().promedioAngulo,
      promedioDolor:snap.val().promedioDolor,
      promedioFuerza:snap.val().promedioFuerza,

// Rutina uno
        elevacionEfectivas:snap.val().elevacionEfectivas,
          elevacionFallidas:snap.val().elevacionFallidas,
            sentadillasEfectivas:snap.val().sentadillasEfectivas,
              sentadillasFallidas:snap.val().sentadillasFallidas,
                marchaEfectivas:snap.val().marchaEfectivas,
                  marchaFallidas:snap.val().marchaFallidas,
// Rutina mDos
            equilibrioEfectivas:snap.val().equilibrioEfectivas,
            equilibrioFallidas:snap.val().equilibrioFallidas,
            isometricaEfectivas:snap.val().isometricaEfectivas,
            isometricaFallidas:snap.val().isometricaEfectivas,
            inestableEfectivas:snap.val().inestableEfectivas,
            inestableFallidas:snap.val().inestableFallidas,
            atrasEfectivas:snap.val().atrasEfectivas,
            atrasFallidas:snap.val().atrasFallidas,

// Rutina mTres

           apoyoEfectivas:snap.val().apoyoEfectivas,
           apoyoFallidas:snap.val().apoyoFallidas,
           sentaEfectivas:snap.val().sentaEfectivas,
           sentaFallidas:snap.val().sentaFallidas,
           adelanteEfectivas:snap.val().adelanteEfectivas,
           adelanteFallidas:snap.val().adelanteFallidas,
           isoEfectivas:snap.val().isoEfectivas,
           isoFallidas:snap.val().isoFallidas,
           apoyosEfectivas:snap.val().apoyosEfectivas,
           apoyosFallidas:snap.val().apoyosFallidas,

                  vuno:snap.val().vuno,
                  vdos:snap.val().vdos,
                  vtres:snap.val().vtres,

      puntaje:snap.val().puntaje,

    })

    // organizo el array de menor a mayor
    this.state.todos.sort(function(a, b){
        return b.puntaje-a.puntaje
    });

    // Coloco las posiciones de cada item
    for (var i=0;i<this.state.todos.length;i++){
         this.state.todos[i].id=i+1;
    }
    this.setState({
      todos: previousNotes
    })
  })


}



  addTodo(todoText) {
  let todos = this.state.todos.slice();
  todos.push({id: this.state.nextId, nombre: todoText});
  this.setState({
    todos: todos,
    nextId: ++this.state.nextId
  });
}

removeTodo(id) {
  this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
}




  render() {


  return (
    <div className="App">

    <div className="todo-wrapper">

          <img src={logo} className="logo" alt="logo" height="150" width="400"/>
          <Header />

          <div className="lineas"> </div>
          <ul className="lista">
            {
              this.state.todos.map((todo,puntaje) => {
                return <TodoItem todo={todo}  puntaje={puntaje} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>

    </div>
  );
}
}

export default App;
