import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const redirectToDiseaseDetection = () => {
        window.open('https://aj0210-leaf-disease-detector-app-s8gr6b.streamlit.app/', '_blank');
    };

    const redirectToCropRecommendation = () => {
        window.open('https://dhruvjain04-crop-predictor-model-crop-predictor-hyusq9.streamlit.app/', '_blank');
    };
    const schemes = () => {
        window.open('https://agricoop.nic.in/sites/default/files/FFH201819_Eng.pdf', '_blank');
    };


    return (
        <div className="ui inverted menu" style={{ height: '50px', display: 'flex', alignItems: 'center',marginBottom:"0px" }}>
            <h3 className="item" style={{ marginTop: '15px' }}>
                <i className='leaf icon'></i>
                FARMER'S PORTAL
            </h3>
            <NavLink exact className="right item" to='/farmer'>
                <i className="home icon"></i> Home
            </NavLink>
            <NavLink className="item" onClick={schemes}>
                <i></i> Schemes & Programmes
            </NavLink>
            <NavLink className="item" to='/farmer/sell'>
                <i className="shopping cart icon"></i> Sell
            </NavLink>
            <div className="ui simple dropdown item">
                <i className="dropdown icon"></i>
                <span className="text" style={{ marginLeft: '8px' }}> ML Models</span>
                <div className="menu">
                    <div className="item" onClick={redirectToDiseaseDetection}>
                        <i className="bug icon"></i> Leaf Disease Detection
                    </div>
                    <div className="item" onClick={redirectToCropRecommendation}>
                        <i className="leaf icon"></i> Crop Recommendation
                    </div>
                </div>
            </div>
            <NavLink className="item" to='/farmer/profile' >
                <i className="user icon"></i> Profile
            </NavLink>
            <NavLink className="item" to='/' >
                <i className="sign-out icon"></i> Logout
            </NavLink>
        </div>
    );
};

export default Navbar;
