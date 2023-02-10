import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../css/Applications.css";

const Applications = () => {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/appli/calculator');
    }
    return (
        <>
            <p>Select an application</p>
            <p>
                TODO : on click, hide the text above, highlight clicked app
            </p>
            <div className='application'>
                <button onClick={handleclick} className='application-button'>Calculator</button>
                <Link to='/appli/calculatorV2'>
                    <button className='application-button'>Calculator V2</button>
                </Link>
                <Link to='/appli/pokemon'>
                    <button className='application-button'>Pokemon</button>
                </Link>
                <Link to='/appli/counter'>
                    <button className='application-button'>Counter</button>
                </Link>
                <Link to='/appli/temperature'>
                    <button className='application-button'>Temperature</button>
                </Link>
                <Link to='/appli/searchFilter'>
                    <button className='application-button'>Search filter</button>
                </Link>
                <Link to='/appli/registration'>
                    <button className='application-button'>Registration</button>
                </Link>
                <Link to='/appli/quiz'>
                    <button className='application-button'>Quiz</button>
                </Link>
                <Link to='/appli/todo'>
                    <button className='application-button'>Todos</button>
                </Link>
                <Link to='/appli/list'>
                    <button className='application-button'>List</button>
                </Link>
                <Link to='/appli/notes'>
                    <button className='application-button'>Notes</button>
                </Link>
                <Link to='/appli/contact'>
                    <button className='application-button'>Contacts</button>
                </Link>
                <Link to='/appli/recipe'>
                    <button className='application-button'>Recipes</button>
                </Link>
                <Link to='/appli/weather'>
                    <button className='application-button'>Weather</button>
                </Link>
                <Link to='/appli/advice'>
                    <button className='application-button'>Advice</button>
                </Link>
            </div>
        </>
    )
}
export default Applications;