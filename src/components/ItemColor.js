import React from 'react';

const ItemColor = (props) => {
    return (
        // continuacion sistema de grillas
        <div className="col my-3">
            <div className="card shadow">  
                <div className="card-header">
                    {/* nombre del color */}
                    <h5 className="card-title">{props.dato}</h5>
                </div>
                <div className="card-body">
                    {/* cuadrado de color */}
                    <div className="d-flex justify-content-center">
                        <div style={{width: "70px",height: "70px",border: "3px solid gray", backgroundColor: props.colorIndividual}}></div>
                    </div>
                    {/* boton Borrar */}
                    <div className="d-flex justify-content-end">
                        <button className='btn btn-danger mt-3 w-50' onClick={()=>props.borrarColor(props.dato)}>Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemColor;