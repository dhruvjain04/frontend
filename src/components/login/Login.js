import Navbar from "./Navbar";
import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'

const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
        role: ''
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

    const loginUser = async (e) => {
        e.preventDefault();
        let url = '';

        if (user.role === 'farmer') {
            url = 'https://backend-portal.onrender.com/farmer/farmerLogin'; // Replace with the farmer signin route
        } else if (user.role === 'exporter') {
            url = 'https://backend-portal.onrender.com/user/exporterLogin'; // Replace with the exporter sigin route
        }


        axios.post(url, user)
            .then(response => {
                window.alert("Login Succesful");
                console.log(response.data.token);
                localStorage.setItem('token',response.data.token);
                console.log(response.data.userId);
                if (user.role === 'farmer') {
                    navigate('/farmer');
                }
                else if (user.role === 'exporter')
                {
                    navigate('/user');
                }
              //  redirect('http://localhost:3000');
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


    }

    return (
    <div class='background'>
        <Navbar />
        <div className="ui container login-component">
            <div className="ui centered card" style={{width:'350px' ,paddingLeft:'20px',paddingRight:'20px',paddingTop: '20px',height: '350px'}}>
                <form method="POST" className="form-card ui form">
                    <div className="field">
                        <label>Email</label>
                        <div className="ui left icon input">
                            <input name="email" value={user.email} type="text" placeholder="Email" onChange={handleInputChange} />
                            <i aria-hidden="true" className="user icon"></i>
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
                        <label>Role</label>

                        <select value={user.role} onChange={handleRoleChange}>
                            <option value="">--Select User Type--</option>
                            <option value="farmer">Farmer</option>
                            <option value="exporter">Exporter</option>
                        </select>

                    </div>

                    <button className="ui fluid button" type="submit" onClick={loginUser}>Login</button>
                    <div className="ui tiny header centered">
                        <NavLink to="/register">New User? Register here</NavLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login;