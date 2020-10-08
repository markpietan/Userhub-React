import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className= "ui container">
         <nav>
             <ul className= "ui massive breadcrumb">
                 <li className= "section">
                    <Link to= "/city_search">City Name Search</Link>
                 </li>
                 <span class="divider">/</span>
                 <li className= "section">
                     <Link to="/zip_code_search"> Zip Code Search</Link>
                 </li>
                 <span class="divider">/</span>
                 <li className= "section">
                     <Link to= "/geographic_search"> Geographic Coordinates Search</Link>
                 </li>
                 <span class="divider">/</span>
             </ul>
         </nav>
        </header>
    )
}




export default Header