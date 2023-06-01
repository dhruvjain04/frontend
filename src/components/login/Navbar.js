import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="ui inverted menu" style={{height: '50px',display: 'flex', alignItems: 'center'}}>
            <h3 className="item" style={{marginTop:'15px'}}>
                <i className='leaf icon'></i>
                FARMER'S PORTAL
            </h3>
            <NavLink className="right item" to='/'>
                <i className="home icon"></i> Home
            </NavLink>
            <NavLink className="item" to='/login'>
                <i className="sign-in icon"></i> Login
            </NavLink>
            <NavLink className="item" to='/register' >
                <i className="signup icon"></i> Register
            </NavLink>
        </div>
    )
}

export default Navbar;