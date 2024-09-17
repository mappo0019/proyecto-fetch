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
    else{
      setPelis(Array(0));
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
      <h1>¡ K n o w <br/> y o u r <br/>m o v i e ! </h1>
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
