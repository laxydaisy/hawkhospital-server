import React from "react";
import axios from "axios";
import { Link } from "@reach/router";


function homepage({homepageinfo }){
    const {doctor, patient} =homepageinfo;
    return(
        <div className= "hwls-homepage">
        <div className= "hwls-doctor"> src={doctor}</div>
        <div>className= "hwsl-patient"</div>
      </div> 
    );
}
export default homepage;