import React from 'react';

function Filter(props) {
    return (
        <div>
            <div className={'pa-3'}>
               <label>Filtro por Autor: </label>
               <input type={'text'} value={props.value} onChange={props.onChange} />
            </div>
        </div>
    );
}

export default Filter;
