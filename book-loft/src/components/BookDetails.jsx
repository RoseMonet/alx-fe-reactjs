import React from 'react'
import './BookDetails.css'

const BookDetails = () => {
    return (
        <div className='hero container'>
            <div className= 'hero-text'>
                <h1>BookLoft</h1>
            </div>
            <SearchBar setResults={setResults} />
        </div>

    )
}

export default BookDetails