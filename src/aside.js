import useFetch from "./datosFetch.js";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const Aside = () => {
    let datos = useFetch("https://raw.githubusercontent.com/michaelx/climate/master/climate.json")
    
    const [busqueda, setBusqueda] = useState([]);
    const [busquedaResultado, setBusquedaResultado] = useState([]);
    let [mostrar, setMostrar] = useState(true);
    let [menu, setMenu] = useState(false);

    const controlCambio = (event) => setBusqueda(event.target.value); 
    const cambioMostrar = () => {
        mostrar === true ? mostrar = false : mostrar = true;
        setMostrar(mostrar);
    };
    

    useEffect(() => {
        const resultado = datos.filter(dato => dato.city.toLowerCase().includes(busqueda.toLowerCase()));
        setBusquedaResultado(resultado.sort());
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [busqueda])
    const Menu = () => {
        menu === false ? menu = true : menu = false;
        setMenu(menu);
    }

    return (
        <>
            <img className="img-hamburger" onClick={Menu} src="http://assets.stickpng.com/images/588a6507d06f6719692a2d15.png" alt="icon-hamburger" />
            <div className={menu ? "contenedor_aside aside-slider" : "contenedor_aside"}>
                <div className="container_search_country">
                    <h3 className="aside-title">Paises y ciudades</h3>
                    <input className="aside-search" type="search" onChange={controlCambio} value={busqueda} placeholder="Buscar ciudad" />
                    {busquedaResultado.length > 0 ? busquedaResultado.map((dato, i) => 
                    <div key={i} className="aside_country"  >
                        <Button color="primary" className="button-country" onClick={cambioMostrar}>{dato.country} </Button>
                        <li className={mostrar ? "visible" : "novisible"} ><Link className="links" to={`/ciudad/${dato.id}`}>{dato.city} </Link></li>
                    </div>    
                    ) : datos.map((dato , i) => 
                    <div key={i} className="aside_country"  >
                        <Button color="primary" className="button-country" onClick={cambioMostrar}>{dato.country} </Button>
                        <li className={mostrar ? "visible" : "novisible"} ><Link className="links" to={`/ciudad/${dato.id}`}>{dato.city} </Link></li>
                    </div>    
                    )}
                </div>
            </div>
        </>
    )
}

export default Aside;