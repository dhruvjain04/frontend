import Navbar from "./Navbar";
import React from 'react';

import { useState , useEffect} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import useSWR from 'swr';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import {

  MDBIcon,
  MDBRipple,
  
} from "mdb-react-ui-kit";

import image from '../images/img2.jpg'


export default function Profile() {
 
  const navigate = useNavigate();

  const [object,setobject]=useState({});

  const fetchaccount= async ()=>
  {
   
    try{
      const response=await axios.get("https://backend-portal.onrender.com/user/myaccount",
      {
        headers:
        {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      setobject(response.data);
    }
    catch(error)
    {
      console.log(error);
    }
    
  }

      const handleDetailsClick = (Id) => {

      console.log(Id);

      navigate('/user/product/'+ Id);
    };

    React.useEffect(()=>
      {
          
          fetchaccount();
      },[])



  const handleDeleteClick =async (ProdID) => {

    console.log(ProdID);
        try {
          const response = await axios.delete('https://backend-portal.onrender.com/user/product/'+ProdID, {     headers:
          {
              Authorization: 'Bearer ' + localStorage.getItem('token')
          } });
          fetchaccount();
        } catch (error) {
          console.error('Error:', error);
        }

  }
  if (!object) {
    return <div>Loading...</div>;
  }

const products=object?.products;
const user=object?.user;



if(products && user) {return (
<div>
    <Navbar />
    <div className="gradient-custom-2" style={{ backgroundImage: `url(${image})`}}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h4">{user.Name}</MDBTypography>
                  <MDBCardText tag="h4">{user.Country}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5"></MDBCardText>
                    <MDBCardText className="small text-muted mb-0"></MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5"></MDBCardText>
                    <MDBCardText className="small text-muted mb-0"></MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5"></MDBCardText>
                    <MDBCardText className="small text-muted mb-0"></MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1" ><h2>About</h2></p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>

          

         
          <strong>Email:</strong> {user.Email}<br /><br />
          <strong>State:</strong> {user.Contact}<br /><br />
          <strong>State:</strong> {user.State}<br /><br />
          <strong>City:</strong> {user.City}
          <hr /> {/* Optional horizontal line separator */}
 
          
        
      
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0"><h2>Your Products</h2></MDBCardText>
                </div>
                {products.map((product, index) => (
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10" style={{ width: '100%' }}>
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                    style={{ height: '100%' }}
                  >
                    <MDBCardImage
                      src={`http://localhost:8001/${product.ImageURL}`}
                      fluid
                      className="w-100"
                      style={{ height: '100%' }}
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6" style={{ fontSize: '1.2rem' }}>
                  <h5 style={{ fontSize: '1.5rem' }}>{product.Crop_Name}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>310</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <strong>Location:</strong> {product.Location}<br />
                    <strong>Contact:</strong> {product.Contact}<br /><br />
                  </div>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <h4 className="text-success">Price</h4>
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">Rs {product.Price_per_unit} per {product.Unit}</h4>
                  </div>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm" onClick={() => handleDetailsClick(product._id)}>Details</MDBBtn>
                    <MDBBtn color="primary" size="sm" onClick={() => handleDeleteClick(product._id)} style={{marginTop:"10px"}}>
                      Remove
                    </MDBBtn>

                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      ))}
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>

</div>             
  );
                }
}
