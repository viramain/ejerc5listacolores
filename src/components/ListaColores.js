import React from 'react';
import ItemColor from './ItemColor';

const ListaColores = (props) => {
    return (
        <section className='container w-75 mb-5'>
            {/* definicion de sistema de grillas para las cards de colores de itemColor.js */}
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                props.arregloColores.map((valor,indice)=><ItemColor key={indice} dato={valor} colorIndividual={valor} borrarColor={props.borrarColor}></ItemColor>)
            }
            </div>
        </section>
    );
};

export default ListaColores;