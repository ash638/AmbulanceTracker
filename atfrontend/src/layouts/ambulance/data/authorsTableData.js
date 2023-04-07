/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function data() {
  const [ambulance,setAmbulance]=useState([]);

  useEffect(()=>{
    async function getAllAmbulance(){
      try{
        const ambulance_data= await axios.get('http://127.0.0.1:8000/api/ambulance/');
        setAmbulance(ambulance_data.data);
        console.log(ambulance_data.data);
      }catch(error){
        console.log(error);
      }
    }
    getAllAmbulance();
  },[]);

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const rows=ambulance.map((a,i)=>{
    const starsArray = new Array(a.ambulance_rating).fill("*");
    const rating = starsArray.join("");
    let ratingString = "";
    
    if (a.ambulance_rating === 1 || a.ambulance_rating === 2) {
      ratingString = "good";
    } else if (a.ambulance_rating === 3 || a.ambulance_rating === 4) {
      ratingString = "very good";
    } else if (a.ambulance_rating === 5) {
      ratingString = "excellent";
    } else {
      ratingString = "invalid rating";
    }

    return(
      {
        id:i,
        author: <Author image={team2} name={a.ambulance_type} email={a.ambulance_time} />,
        function: <Job title={rating} description={ratingString} />,
        status: (
          // <MDBox>
          //   <MDBadge badgeContent={a.ambulance_price} color="success" variant="gradient" />
          // </MDBox>
            <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="success" fontWeight="medium">
            {a.ambulance_price}
            </MDTypography>
          </MDBox>
        ),
      }
    )
  })

  return {
    columns: [
      { Header: "ambulances", accessor: "author", width: "45%", align: "left" },
      { Header: "Rating", accessor: "function", align: "left" },
      { Header: "Price", accessor: "status", align: "center" },
    ],
  

    rows:rows,
  };
}
