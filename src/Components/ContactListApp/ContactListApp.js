import React, { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import './ContactListApp.css';


const ContactListApp = () => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=6")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setResults(data.results)
            });
    }, [])

    return (
        <div>
            {results.map((result, index) => {
                return (
                    <ContactCard key={index}
                        avatarUrl={result.picture.large}
                        name={result.name.first}
                        email={result.email}
                        age={result.dob.age}
                    />
                )
            })}
        </div>
    )
}

export default ContactListApp;