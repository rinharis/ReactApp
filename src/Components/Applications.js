import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Applications = () => {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/appli/calculator');
    }
    return (
        <>
            <p>List of Applications</p>
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
                    <button className='application-button'>Todo List</button>
                </Link>
                <Link to='/appli/contact'>
                    <button className='application-button'>Contact list</button>
                </Link>
            </div>
        </>
    )
}
export default Applications;