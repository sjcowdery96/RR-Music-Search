import { useState } from 'react'

function SearchBar(props) {
    //attaches the searchTerm to the state so App.js can reference it
    let [searchTerm, setSearchTerm] = useState('')
    // my default search is ALWAYS taylor swift
    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" defaultValue="Taylor Swift" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            } />

            <input type="submit" />

        </form>
    )
}

export default SearchBar
