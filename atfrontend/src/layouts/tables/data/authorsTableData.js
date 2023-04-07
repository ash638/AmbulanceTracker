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
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function data() {
  const [hospitals,setHospitals]=useState([]);

  useEffect(()=>{
    async function getAllHospital(){
      try{
        const hospitals_data= await axios.get('http://127.0.0.1:8000/api/hospital/');
        setHospitals(hospitals_data.data);
        console.log(hospitals_data.data);
      }catch(error){
        console.log(error);
      }
    }
    getAllHospital();
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

  const rows=hospitals.map((h,i)=>{
    const starsArray = new Array(h.hospital_rating).fill("*");
    const rating = starsArray.join("");
    let ratingString = "";
    
    if (h.hospital_rating === 1 || h.hospital_rating === 2) {
      ratingString = "good";
    } else if (h.hospital_rating === 3 || h.hospital_rating === 4) {
      ratingString = "very good";
    } else if (h.hospital_rating === 5) {
      ratingString = "excellent";
    } else {
      ratingString = "invalid rating";
    }

    return(
      {
        id:i,
        author: <Author image={team2} name={h.hospital_name} email={h.hospital_city} />,
        function: <Job title={rating} description={ratingString} />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent={h.hospital_distance} color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        // employed: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     23/04/18
        //   </MDTypography>
        // ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      }
    )
  })

  return {
    columns: [
      { Header: "Hospitals", accessor: "author", width: "45%", align: "left" },
      { Header: "Rating", accessor: "function", align: "left" },
      { Header: "Distance", accessor: "status", align: "center" },
      // { Header: "employed", accessor: "employed", align: "center" },
      // { Header: "action", accessor: "action", align: "center" },
    ],
  

    rows:rows,
  };
}
