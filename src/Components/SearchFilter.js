import React from "react";
import '../css/SearchFilter.css';
import JSONDATA from '../MOCK_DATA.json';
import { useState } from "react";

function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="search">
            <input type="text" placeholder="Search ..." onChange={event => {
                setSearchTerm(event.target.value)
            }} />
            {JSONDATA.filter((val) => {
                if (searchTerm === "")
                    return val;
                else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
                    return val;
                // else return;
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <p>{val.first_name}</p>
                    </div>
                );
            })}
        </div>
    )
};

export default SearchFilter;