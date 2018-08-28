import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Header.css'

const Header = (props) => {
    return (
        <header className={`${!props.showBackButton ? 'Header' : 'Header Header__WithBack'}`}>
            <div className="App__Logo">
                {props.showBackButton && 
                    <Link className="back-btn" to={"/"}>&larr;</Link>}
                <Link to={"/"}>Speedy Math</Link>
            </div>
        </header>
    )
}

Header.propTypes = {
    showBackButton: PropTypes.bool
}

export default Header


