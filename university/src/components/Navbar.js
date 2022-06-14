import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand mx-3">Student List App</Link>
            <ul>
                <li className="list-item">
                {/*<Link to="/" className="navbar-brand ml-5">Student List App</Link>*/}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar