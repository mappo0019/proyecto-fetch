import '../css/Buscador.css'

export default function Buscador(props){
    return (
        <div>
            <input className = "barra-busqueda" placeholder = "Introduzca un título (o parte de él)..."></input>
            <button className = "buscar" onClick = {props.onClickAlto}>🔎</button>
        </div>
    )
}