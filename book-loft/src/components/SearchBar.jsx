import React, {useState} from 'react'
import {FaSearch} from "react-icons/fa"
import './SearchBar.css'

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState('');

    const fetchData = (value) => {
        if (value) {
            fetch(`https://openlibrary.org/search.json?q=${value}`)
            .then((response) => response.json())
            .then((json) => {
              // Make sure you are correctly accessing the docs array
              const results = json.docs.map((book) => ({
                key: book.key,
                title: book.title,
                author_name: book.author_name,
                cover_i: book.cover_i,
                publisher: book.publisher,
                first_publish_year: book.first_publish_year,
              }));
              setResults(results); // Update the results with fetched data
              navigate('/results'); // Navigate to the search results page
            })
            .catch((error) => console.error('Error fetching data:', error));
        } else {
          setResults([]); // Clear results when the input is empty
        }
      };

const handleChange = (value) => {
    setInput(value)
    fetchData(value);

}

    return(
        <div className='search-bar-container'>
            <div className= 'input-wrapper'>
                <FaSearch id= "search-icon"/>
                <input placeholder= "Search..." value={input} onChange={(e) => handleChange(e.target.value)}
                />
            </div>        
        </div>
        
    )
}
export default SearchBar