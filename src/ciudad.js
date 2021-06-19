import useFetch from "./datosFetch";
import {useParams} from "react-router-dom";
import Aside from "./aside.js"


const Ciudad = () =>{
    const datos = useFetch("https://raw.githubusercontent.com/michaelx/climate/master/climate.json");
    let parametros = useParams();
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",  "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const id = parametros.id ? parametros.id : 1;
    return(
        <>
            <Aside />
            <div className="contenedor-main">
                {datos.filter(dato => parseInt(dato.id) === parseInt(id)).map ((dato, i) => 
                <div key={i} className="ciudad-descripcion">
                    <h2 className="ciudad-title">Clima actual en {dato.country} ({dato.city}): </h2>
                    {datos.filter(dato => parseInt(dato.id) === parseInt(id)).map((dato) => dato.monthlyAvg.map((dato, i) => 
                    <article key={i} className="card-clima" >
                        <h2 className="card-meses">{meses[i]} </h2>
                        {dato.rainfall > 60 ? <img src="https://images.vexels.com/media/users/3/182761/isolated/preview/3268211f8325d9fa52742ec941c22751-nube-de-lluvia-plana-by-vexels.png" alt={`sol ${i}`} className="img-lluvia" /> : <img src="https://images.vexels.com/media/users/3/145138/isolated/preview/1de68bf333344dc5a6efca43807cfc6d-icono-de-rayos-de-l-iacute-nea-peque-ntilde-a-de-sol-by-vexels.png" alt={`lluvia ${i}`} className="img-sol" />}
                        <div className="card-description">
                            <h3 className="card-high">{dato.high}° <span className="card-span"> / </span></h3>
                            <h3 className="card-low">{dato.low}° </h3>    
                        </div>
                        <h3 className="card-rainfall">Rain fall: {dato.rainfall}</h3>
                        <h3 className="card-snowdays">Snowdays: {dato.snowDays !== null ? dato.snowDays : "No se encontro datos sobre dias nevados"} </h3>
                       
                    </article>))}        
                </div>)}
            </div>
        </>
    )

}
export default Ciudad;