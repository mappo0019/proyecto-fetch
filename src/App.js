import React, {useState} from "react";
import './App.css';
import Buscador from './componentes/Buscador';
import Ficha from './componentes/Ficha';
import Miniatura from './componentes/Miniatura';

function App() {

  const[pelis, setPelis] = useState(Array(0));
  const[fav, setFav] = useState(Array(0));
  const[ident, setIdent] = useState(0);


  async function clickHandler(){
    let text = document.querySelector(".barra-busqueda").value;
    let promise = await fetch(`https://www.omdbapi.com/?s=${text}&apikey=3af5df7b`);
    let response = await promise.json();
    let result = await response.Search;
    if(result !== undefined)
      setPelis(result);
    else
      setPelis(Array(0));
    if(text === "Barbie" || text ==="barbie"){
      document.body.style.background = "rgb(2,0,36)";
      document.body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(231,144,214,1) 20%, rgba(163,86,143,1) 100%)";
      document.querySelector(".app-titulo").style.color = "rgb(105, 8, 81)";
    }
    else{
      document.body.style.background = "rgb(2,0,36)";
      document.body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(186,215,195,1) 35%, rgba(0,212,255,1) 100%)";
      document.querySelector(".app-titulo").style.color = "#0a4f58";
    }
    
  }

  function addPeli(peli){
    setFav([...fav, {pelicula : peli, key: ident}]);
    setIdent(ident=> ident+1);
  }

  function deleteMovie(id){
    setFav(fav.filter(p=> p.key !== id));
  }

  return (
    <div className="App">
      <h1 className = "app-titulo">¡ K n o w <br/> y o u r <br/>m o v i e ! </h1>
      <div className = "pantalla">
        <div>
          <Buscador onClickAlto = {clickHandler}/>
            <div className = "parrilla">
              {pelis.length>0 ? 
                pelis.map((peli)=>{
                  return <Ficha onAniadir={() =>addPeli(peli)} titulo = {peli.Title} anio = {peli.Year} enlace = {peli.imdbID} poster = {peli.Poster}/>
                }) 
                : <p> NO se han encontrado películas. ¡Lo sentimos!</p>
              }  
            </div> 
          </div>    
         
        <div>
            <h2>Mis Películas</h2>
            <div className = "favoritas">        
              {fav.map((peli)=>{
                return <Miniatura poster = {peli.pelicula.Poster} onEliminar={()=>deleteMovie(peli.key)}/>
              })}
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
