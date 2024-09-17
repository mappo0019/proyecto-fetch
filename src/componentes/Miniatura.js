import '../css/Miniatura.css'

export default function Miniatura(props){
    return(
        <a className = "poster-boton" onClick = {props.onEliminar}><img className = "poster-mini" src = {props.poster}/></a>
    );
}