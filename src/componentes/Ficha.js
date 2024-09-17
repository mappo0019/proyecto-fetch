import '../css/Ficha.css'

export default function Ficha(props){
    return(
        <div className = "ficha">
            <img className = "poster" src = {props.poster} alt= "foto" />
            <h1 className = "titulo"> {props.titulo}</h1>
            <h2 className = "year"> {props.anio} </h2>
            <p className = "pagina"> Enlace a IMDB <a href= {`https://www.imdb.com/title/${props.enlace}`}>aquí. </a></p>
            <button className = "aniadir" onClick= {props.onAniadir}>➕</button>

        </div>
    )
}