import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [hospital,setHospital]=useState([]);
  useEffect(()=>{
    async function getAllHospital(){
      try{
        const hospital= await axios.get('http://127.0.0.1:8000/api/hospital/')
        setHospital(hospital.data)
        console.log(hospital.data);
      }catch(error){
        console.log(error);
      }
    }
    getAllHospital()
  },[])
  return (
    <div className="App">
     <h1>Hospital</h1>
     {hospital.map((h,i)=>{
      return(
        <div key={i}>
          <p>{h.hospital_name}</p>
          <p>{h.hospital_city}</p>
          <p>{h.hospital_distance}</p>
          {/* {
            for(i=0;i<hospital_rating;i++){

            }
          } */}
          {/* <p>{h.hospital_distance}</p> */}
        </div>
      )
     })}
    </div>
  );
}

export default App;
