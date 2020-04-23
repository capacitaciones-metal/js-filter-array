import React from 'react';

function Book(props) {
    return (
        <div className={'card center'}>
            <h4>{props.item.title}</h4>
            <p>{props.item.author}</p>
            <img src={props.item.img} />
        </div>
    );
}

export default Book;
