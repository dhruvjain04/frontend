import Navbar from "./Navbar";
import React from 'react';
import { useState } from 'react';
import './register.css';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        cpassword: '',
        country: '',
        state: '',
        city: '',
        role: '',

    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleRoleChange = (event) => {
        const { value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            role: value,
        }));
    };

    const onClickRegister = async (event) => {
        event.preventDefault();

        let url = '';

        if (user.role === 'farmer') {
            url = 'https://backend-portal.onrender.com/farmer/farmerSignup'; // Replace with the farmer signup route
          } else if (user.role === 'exporter') {
            url = 'https://backend-portal.onrender.com/user/exporterSignup'; // Replace with the exporter signup route
          }

        axios.put(url, user)
            .then(response => {
                if (response.status === 422 || !response.data) {
                    window.alert("Registration Unsuccessful");

                } else {
                    window.alert("Registration Successful");
                    navigate('/login');
                }
            })
            .catch(error => {
                // handle error here

                if (error.response) {
                    // server responded with an error status code (4xx or 5xx)
                    const errorMessage = error.response.data.message;
                    window.alert(errorMessage);
                    // update form with error message
                } else if (error.request) {
                    // server did not respond
                    console.error(error.request);
                } else {
                    // other error occurred
                    console.error(error.message);
                }
                console.error(error.config);
            });
        // Handle successful response
    };

    return (
    <div class='background'>
        <Navbar />
        <div className="ui container" style={{marginTop:"75px"}}>
            <div className="ui centered card" style={{width:'600px' ,paddingLeft:'22px',paddingRight:'22px',paddingTop: '20px',height: '500px'}}>
                <form method="POST" className="form-card ui form custom-width" >
                    <div className="ui grid">
                        <div className="eight wide column">
                            <div className="field">
                                <label>Name</label>
                                <div className="ui left icon input">
                                    <input name="name" value={user.name} type="text" placeholder="Name" onChange={handleInputChange} />
                                    <i aria-hidden="true" className="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <div className="ui left icon input">
                                    <input name="email" value={user.email} type="email" placeholder="Email" onChange={handleInputChange} />
                                    <i aria-hidden="true" className="mail outline icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Phone</label>
                                <div className="ui left icon input">
                                    <input name="contact" value={user.contact} type="tel" placeholder="Phone No" onChange={handleInputChange} />
                                    <i aria-hidden="true" className="phone icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <input name="password" value={user.password} type="password" placeholder="Password" onChange={handleInputChange} />
                                    <i aria-hidden="true" className="lock icon"></i>
                                </div>
                            </div>


                            <div className="field">
                                <label>Re-enter Password</label>
                                <div className="ui left icon input">
                                    <input name="cpassword" value={user.cpassword} type="password" placeholder="Re-enter Password" onChange={handleInputChange} />
                                    <i aria-hidden="true" className="lock icon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="eight wide column">
                            <div className="field">
                                <label>Country</label>
                                <div className="ui left icon input">
                                    <input name="country" value={user.country} type="text" placeholder="Country" onChange={handleInputChange} />
                                    <i aria-hidden="true" className="globe icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>State</label>
                                <div className="ui left icon input">
                                    <input name="state" value={user.state} type="text" placeholder="State" onChange={handleInputChange} />
                                    <i aria-hidden="true" className="map marker alternate icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>City</label>
                                <div className="ui left icon input">
                                    <input name="city" value={user.city} type="text" placeholder="City" onChange={handleInputChange} />
                                    <i aria-hidden="true" className="building icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Role</label>

                                <select value={user.role} onChange={handleRoleChange}>
                                    <option value="">--Select User Type--</option>
                                    <option value="farmer">Farmer</option>
                                    <option value="exporter">Exporter</option>
                                </select>

                            </div>

                        </div>
                        <button className="ui fluid button" type="submit" onClick={onClickRegister}>Register</button>
                        <div className="ui tiny header" style={{ marginLeft: '35%' }}>
                            <NavLink to="/login">Already a User? Login</NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default Register;




