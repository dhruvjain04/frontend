import Navbar from "./Navbar";
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
import { useState } from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTextArea,
    MDBTypography,
  } from "mdb-react-ui-kit";
  
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';*/
//import { useState, useEffect } from 'react';
//import prodImage from './mango.jpg';



const fetcher = (prodID) => axios.get('https://backend-portal.onrender.com/product/' + prodID,
);

const fetcherfeedbacks = ({prodID}) => axios.get('https://backend-portal.onrender.com/product/feedbacks/' + prodID,
);



const UserFeedbackCard = ({ comment }) => {

    return (
                    <MDBCardBody>
                      <div className="d-flex flex-start align-items-center">
                        <MDBCardImage
                          className="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                          alt="avatar"
                          width="60"
                          height="60"
                        />
                        <div>
                          <h6 className="fw-bold text-primary mb-1">Dhruv Jain</h6>
                          <p className="text-muted small mb-0">
                            May 2023
                          </p>
                        </div>

                      </div>

                      <div className="text-danger mb-1 me-2" style={{ marginTop: '10px' }}>
                      <a href="">
                        <MDBIcon  icon="star text-danger me-1" />
                        <MDBIcon  icon="star text-danger me-1" />
                        <MDBIcon  icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                      </a>
                      </div>
      
                      <p className="mt-3 mb-4 pb-2">
                        {comment}
                      </p>
      

                    </MDBCardBody>
    );
};



const UserFeedbackList = ({ prodID }) => {
   console.log(prodID);
   const [feedbacks,setFeedback]=useState([]);

    const { data, error, isLoading } = useSWR({prodID}, fetcherfeedbacks);

    React.useEffect(() => {
        if (data) {
            setFeedback(data?.data?.feedbacks);
        }
    }, [data]);
    
     if (error) return <div>failed to load</div>
     if (isLoading) return <div>loading...</div>
  
     console.log(data);
 

    console.log(feedbacks);
    return (
        <div className="user-feedback-list">
            {feedbacks.map((feedback, index) => (
                <UserFeedbackCard
                    key={index}
                    comment={feedback}
                />
            ))}
        </div>
        
    );
};


const ViewProduct = () => {
    // Your existing code for fetching and rendering the product details
    // ...

    const params=useParams();
    const prodID=params.prodID;
    
    const { data, error, isLoading } = useSWR(prodID, fetcher);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    console.log(data);
    const product = data?.data?.product;

    const prod = {
        name: product?.Crop_Name,
        description: product?.Description,
        contact: product?.Contact,
        place: product?.Location,
        quantity: product?.Quantity,
        unit: product?.Unit,
        price_per_unit: product?.Price_per_unit,
        image: product?.ImageURL,
    };
    let prodImage = 'https://backend-portal.onrender.com/images' + prod?.image;

    return (
    <div>
        <Navbar />
        <div className="ui grid centered middle aligned">
            <div className="eight wide column">
                <h1 className="ui header">
                    <i className="leaf icon"></i> {prod.name}
                </h1>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
                        <img src={prodImage} alt="Product" style={{ width: '100%', objectFit: 'contain' }} />
                    </div>
                </div>

                <div className="ui grid" style={{ marginTop: '1rem' }}>
                    <div className="eight wide column">
                        <div className="ui segment">
                            <div className="ui header">
                                <i className="map marker alternate icon"></i> Location & Contact
                            </div>
                            <p>
                                <strong>Place:</strong> {prod.place}
                                <br />
                                <strong>Contact:</strong> {prod.contact}
                            </p>
                        </div>
                    </div>
                    <div className="eight wide column">
                        <div className="ui segment">
                            <div className="ui header">
                                <i className="money bill alternate outline icon"></i> Price and Quantity
                            </div>
                            <p>
                                <strong>Price:</strong> Rs {prod.price_per_unit}/{prod.unit}
                                <br />
                                <strong>Quantity:</strong> {prod.quantity} {prod.unit}
                            </p>
                        </div>

                    </div>
                </div>

                <div className="ui grid" style={{ marginTop: '0.5rem' }}>
                    <div className="sixteen wide column">
                        <div className="ui segment">
                            <div className="ui header">
                                <i className="info circle icon"></i> Description
                            </div>
                            <p>{prod.description}</p>
                        </div>
                    </div>
                </div>
                <div className="ui grid" style={{ marginTop: '0.5rem' }}>
                    <div className="sixteen wide column">
                        <div className="ui segment">
                            <div className="ui header">
                            <i class="fa fa-commenting" aria-hidden="true" style={{fontSize:"28px"}}></i> Feedbacks
                            </div>
                            <UserFeedbackList prodID={prodID} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>);
};

export default ViewProduct;
