import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="ui inverted menu" style={{height: '50px', display: 'flex', alignItems: 'center' , marginBottom:"0px"}}>
            <h3 className="item" style={{marginTop: '15px'}}>
                <i className='leaf icon'></i>
                FARMER'S PORTAL
            </h3>
            <NavLink className="right item" to='/user'>
                <i className="home icon"></i> Home
            </NavLink>
            <NavLink className="item" to='/user/buy'>
                <i className="shopping cart icon"></i> Buy
            </NavLink>
            <NavLink className="item" to='/user/profile' >
                <i className="user icon"></i> Profile
            </NavLink>
            <NavLink className="item" to='/' >
                <i className="sign out icon"></i> Logout
            </NavLink>
        </div>
    );
};

export default Navbar;
