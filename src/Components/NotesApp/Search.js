
import React from "react"

const Search = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <i className="fa-solid fa-magnifying-glass search-icons" />
            <input
                onChange={(event) => handleSearchNote(event.target.value)}
                type="text"
                placeholder="type to search..."
            />
        </div>
    )
}

export default Search ;