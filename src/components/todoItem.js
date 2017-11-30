import React from 'react';
import './todoItem.css';
import pantallazo from'./pantallazo.png'
import firebase from 'firebase/app';


export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

      this.fire = this.fire.bind(this);
      this.handleChange = this.handleChange.bind(this);

    this.state = {
      id:78,
      color_black: true,
      mUno:false,
      mDos:false,
      mTres:false,
      hide:true

    };


  }
  changeColor(){
            this.setState({color_black: !this.state.color_black})
            this.setState({hide: !this.state.color_black})
    }

    handleChange(event) {
   this.setState({value: event.target.value});
 }

    fire(){
        var d = new Date();
      var database = firebase.database();
       var it={id:0,key:"dfd",emisor:"Dr Cárdenas : "+d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear(),mensaje:this.state.value};
       database.ref('comentarios').push().set(it);
    }
  render() {
    let visible=this.state.hide ? "none" : "block"
    let mostrarUno=this.props.todo.vuno ? "block" : "none"
    let mostrarDos=this.props.todo.vdos ? "block" : "none"
  let mostrarTres=this.props.todo.vtres ? "block" : "none"
  let source = 'data:image/jpeg;base64,' + this.props.todo.imagen;

    console.log(mostrarUno);

    return (
      <div className="todoWrapper">
     {/* <button className="removeTodo">{this.props.id}</button>*/}
      <div className="resuWrapper">
      <div className="encabezado"  onClick={this.changeColor.bind(this)}>
      <p className="fecha">{this.props.todo.fecha}</p>
      </div>
       <ul className="resultados" style={{display: visible}} >
         <li className="fila">Cantidad Rutinas <p className="score">{this.props.todo.cantidadRutinas}</p></li>
         <li className="fila">Nivel Rutina<p className="score">{this.props.todo.nivelRutina}</p></li>
         <li className="fila">Total Juego<p className="score">{this.props.todo.totalJuego}</p></li>
         <li className="fila">Porcentaje Rutina<p className="score">{this.props.todo.porcentajeRutina}</p></li>

          <li className="fila">Ángulo de flexión<p className="score">{this.props.todo.promedioAngulo}</p></li>
          <li className="fila">Dolor<p className="score">{this.props.todo.promedioDolor}</p></li>
           <li className="fila">Fuerza<p className="score">{this.props.todo.promedioFuerza}</p></li>

             <div className="rutinaUno" style={{display:mostrarUno}}>
           <li className="fila">Elevaciones de pantorrilla efectivas<p className="score">{this.props.todo.elevacionEfectivas}</p></li>
           <li className="fila">Elevaciones de pantorrilla no realizadas<p className="score">{this.props.todo.elevacionFallidas}</p></li>
            <li className="fila">Sentadillas efectivas<p className="score">{this.props.todo.sentadillasEfectivas}</p></li>
            <li className="fila">Sentadillas no realizadas<p className="score">{this.props.todo.sentadillasFallidas}</p></li>
            <li className="fila">Serie de marcha efectivas<p className="score">{this.props.todo.marchaEfectivas}</p></li>
             <li className="fila">Serie de marcha no realizadas<p className="score">{this.props.todo.marchaFallidas}</p></li>
           </div>


               <div className="rutinaDos" style={{display:mostrarDos}}>
               <li className="fila">Modedas recojidas<p className="score">{this.props.todo.equilibrioEfectivas}</p></li>
               <li className="fila">Monedas no recogidas<p className="score">{this.props.todo.equilibrioFallidas}</p></li>
                <li className="fila">Segundos efectivo isometrica<p className="score">{this.props.todo.isometricaEfectivas}</p></li>
                <li className="fila">Segundos faltantes isometrica<p className="score">{this.props.todo.isometricaFallidas}</p></li>
                <li className="fila">Sentadillas efectivas<p className="score">{this.props.todo.inestableEfectivas}</p></li>
                 <li className="fila">Setadillas no realizadas<p className="score">{this.props.todo.inestableFallidas}</p></li>
                 <li className="fila">Pantorrilla efectivas<p className="score">{this.props.todo.atrasEfectivas}</p></li>
                  <li className="fila">Pantorrilla no realizadas<p className="score">{this.props.todo.atrasFallidas}</p></li>
                </div>



                <div className="rutinaTres" style={{display:mostrarTres}}>
                <li className="fila">Senguns efectivos un apoyo<p className="score">{this.props.todo.apoyoEfectivas}</p></li>
                <li className="fila">Segundos faltantes un apoyo<p className="score">{this.props.todo.apoyoFallidas}</p></li>
                 <li className="fila">Sentadillas efectivas<p className="score">{this.props.todo.sentaEfectivas}</p></li>
                 <li className="fila">Sentadillas no realizadas<p className="score">{this.props.todo.sentaFallidas}</p></li>
                 <li className="fila">Adelante - Atras efectivas<p className="score">{this.props.todo.adelanteEfectivas}</p></li>
                  <li className="fila">Adelante - Atras no realizadas<p className="score">{this.props.todo.adelanteFallidas}</p></li>
                  <li className="fila">Seguindos mantenidos isometrica<p className="score">{this.props.todo.isoEfectivas}</p></li>
                   <li className="fila">Seguindos faltantes isometrica<p className="score">{this.props.todo.isoFallidas}</p></li>
                   <li className="fila">Monedas recojidas<p className="score">{this.props.todo.apoyosEfectivas}</p></li>
                    <li className="fila">Monedas faltantes<p className="score">{this.props.todo.apoyosFallidas}</p></li>
                 </div>
                 <img class="panta" src={source} className="logo" alt="logo" height="300" width="480"/>


          <form className="formulario" onSubmit={this.fire}>
         <label>
           <input className="input" type="text" placeholder="Ingresar observaciones" value={this.state.value} onChange={this.handleChange} />
         </label>
         <input className="envio" type="submit" value="Enviar observaciones" />
       </form>
          </ul>
            </div>
          </div>

    );
  }
}
