import React from "react";
import Hello from "./Hello";
import { Link, useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/calculator');
    }
    return (
        <>
            <p>This is home page</p>
            <Hello name="Rin" />
            <button onClick={handleclick}>Calculator</button>
            <Link to= '/pokemon'>
                <button>Pokemon</button>
            </Link>
        </>
    )
}
export default Home;