import React, {useState} from 'react';
import Book from "./Book";
import Filter from "./Filter";

function Gallery(props) {
    const [books, setBooks] = useState(require('./books.json'));
    const [filter, setFilter] = useState('');

    const filteredBooks = () => {
        let fbooks = [...books]

        if(filter !== ''){
            fbooks = fbooks.filter(book => book.author.indexOf(filter) !== -1)
        }
        return fbooks
    }

    return (
        <div className={'row'}>
            <div className={'col-12'}>
                <Filter value={filter} onChange={(e)=> setFilter(e.target.value)}></Filter>
            </div>
            {
                filteredBooks().map((item, index) => {
                    return (
                    <div className={'col-4'}  key={index}>
                        <Book item={item} index={index} />
                    </div>
                    )
                })
                            
            }
        </div>
    );
}

export default Gallery;
