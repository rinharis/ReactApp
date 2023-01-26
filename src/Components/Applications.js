import React from 'react';
import { Link, useNavigate} from "react-router-dom";

const Applications = () => {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/appli/calculator');
    }
    return (
        <>
            <p>List of Applications</p>
            <button onClick={handleclick}>Calculator</button>
            <Link to= '/appli/pokemon'>
                <button>Pokemon</button>
            </Link>
            <Link to= '/appli/counter'>
                <button>Counter</button>
            </Link>
            <Link to= '/appli/temperature'>
                <button>Temperature</button>
            </Link>
            <Link to= '/appli/searchFilter'>
                <button>Search filter</button>
            </Link>
            <Link to= '/appli/registration'>
                <button>Registration</button>
            </Link>
        </>
    )
}
export default Applications;