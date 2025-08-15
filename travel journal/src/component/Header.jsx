import React from "react";
import earth from "../assets/earth-svgrepo-com.svg"
const Header = () => {
    return (
        <header className="header">
             <img src={earth} alt="Earth" />
            <h3>my travel journal</h3>
        </header>
    )

}
export default Header