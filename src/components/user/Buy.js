import Navbar from "./Navbar";
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import useSWR from 'swr';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState , useEffect} from 'react';

const fetcherproducts = (url) => fetch(url,
    {
      headers:
      {
          Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => res.json())
  
    const addtocart = (ProdID) => fetch('https://backend-portal.onrender.com/user/addproduct/'+ProdID,
      {
        headers:
        {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => res.json())
  
  function Buy() {
  
    const navigate = useNavigate();

    const [Products,setProducts]=useState({});
  
    const handleDetailsClick = (Id) => {

      console.log(Id);

      navigate('/user/product/'+ Id);
    };

  
    const finbyproductsbysearch=async (category)=>
    {
        try{
          const response=await axios.get("https://backend-portal.onrender.com/user/products/"+category,
          {
              headers:
            {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          setProducts(response.data);
        }
        catch(error){
            console.error('Error:', error);
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          if(event.target.value=='')
          {
            finbyproductsbysearch('ALL');
          }
          else
          {
              //finbyproductsbysearch(event.target.value);
              finbyproductsbysearch(event.target.value.charAt(0).toUpperCase()+event.target.value.slice(1).toLowerCase());
          }
        }
      }

    const handleAddClick =async (ProdID) => {

      console.log(ProdID);
          try {
            const response = await axios.get('https://backend-portal.onrender.com/user/addproduct/'+ProdID, {     headers:
            {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            } });
  
          } catch (error) {
            console.error('Error:', error);
          }
  
    }
  
    //const { data, error, isLoading } = useSWR('http://localhost:8001/user/products_display',fetcherproducts);
  
  
    //if (error) return <div>failed to load</div>
    //if (isLoading) return <div>loading...</div>


    useEffect(()=>
    {
        finbyproductsbysearch('ALL');
    },[])

    const products= Products.products;
    console.log(products);

  
  
    return (
    <div>
      <Navbar />
      <MDBCol md="6" style={{margin:"35px auto auto",width:"1200px"}}>
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend" style={{marginRight:"5px"}}>
          <span className="input-group-text purple lighten-3" id="basic-text1" style={{background: "black"}}>
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onKeyPress={handleKeyPress}
        />
      </div>
      </MDBCol>
      <MDBContainer fluid>
        {products && products.map((product, index) => (
        <MDBRow className="justify-content-center mb-0">
          <MDBCol md="12" xl="10">
            <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <MDBCardImage
                        src={`https://backend-portal.onrender.com/images/${product.ImageURL}`}
                        fluid
                        className="w-100"
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
                      <strong>Location:</strong> {product.Location}<br /><br />
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
                      <MDBBtn outline color="primary" size="sm" className="mt-2" onClick={() => handleAddClick(product._id)}>Add</MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        ))}
      </MDBContainer>
    </div>  
    );
  }
  
  export default Buy;
