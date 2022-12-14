import React from 'react';
import './pagination.css'

function Paginado({charactersPerPage, allCharacters, paginado}) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allCharacters/charactersPerPage); i++) {
        pageNumbers.push(i)
    }
    
    return (
        <nav className='pagination-container'>
            <ul className='pagination-items'>
                { pageNumbers &&
                pageNumbers.map(number => (
                    <li className='pagination-item' key={number}>
                        <a  onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
};

export default Paginado;


/* 

    */ 