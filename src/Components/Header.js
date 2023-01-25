import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    let menuitems = ["Home", "Applications", "About"];
    return (
        <>
            <div className="main-header">
                <ul>
                    <Link to='/'>
                        <li>{menuitems[0]}</li>
                    </Link>
                    <Link to= '/appli'>
                        <li>{menuitems[1]}</li>
                    </Link>
                    <Link to='/about'>
                        <li>{menuitems[2]}</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}
export default Header;