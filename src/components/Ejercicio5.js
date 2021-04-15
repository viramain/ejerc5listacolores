// crea card para ingresar color y mostrarlo en una grilla con una card por cada color ingresado

import React, { Fragment, useState, useEffect } from "react";
import ListaColores from "./ListaColores";



const Ejercicio5 = () => {
    //========= ZONA de logica de JS, antes del return()============
    //---- definicion de variables
    let coloresLocalStorage = JSON.parse(localStorage.getItem('arregloColores'));
    if(!coloresLocalStorage){
        coloresLocalStorage=[];
    }
    // ...... creamos los STATE ........
    const [colores, setColores] = useState(coloresLocalStorage);
    const [colorIndividual, setColorIndividual] = useState('');

    //..... fin creación states ......

    //---- CICLO DE VIDA usa otro hoock: useEfect ----
    useEffect(()=>{
        // aqui va la logica que quiero ejecutar en montaje y actualizacion
        // si despues de las {} pongo ,[] significa que se actualiza solo en el montaje
        // si despues de las {} pongo ,[state1,state2,etc] significa que se actualiza algunos states
        localStorage.setItem('arregloColores',JSON.stringify(colores));
    },[colores]);

    // cada vez que presiona agregar
    const handleSubmit = (e) => {
        e.preventDefault();
        // guardar un color en el arrelo de colores. Los 3 puntos significan spread operator
        setColores([...colores, colorIndividual]);

        // limpiar input
        setColorIndividual('');
    };

    // funcion borrar color
    const borrarColor = (nombre) =>{
        // nombre tiene la tarea que quiero borrar
        let arregloModificado = colores.filter((dato)=>dato!==nombre);
        // actualiza el array de colores luego de borrar
        setColores(arregloModificado);
    }

    return (
        <Fragment>   
        {/* ==== ZONA HTML ===== */}
        <section className="container shadow w-75 p-3 my-3 rounded">
            <div className='card'>
                <h5 className="py-3 text-white bg-secondary text-center">Administrar Colores</h5>
                <div className='d-flex my-3'>
                    {/* cuadro de color */}
                    <div style={{marginLeft: '5%',width: "70px",height: "70px",border: "3px solid gray", backgroundColor: colorIndividual}}></div>
                    
                    <form className="w-75" onSubmit={handleSubmit}>
                        <div className="mb-3 mx-5">
                        <input
                            type="text"
                            placeholder="Ingrese un color ej:blue"
                            className="form-control mt-2"
                            onChange={(e) => setColorIndividual(e.target.value)}
                            value={colorIndividual}
                        />
                        </div>
                        <div className="text-end">
                            <button className="btn btn-primary text-light mb-2" type="submit">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section>
            {/* arma grilla con cards de colores */}
            <ListaColores arregloColores={colores} borrarColor={borrarColor}></ListaColores>
        </section>
    </Fragment>
    );
};

export default Ejercicio5;