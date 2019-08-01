import React from "react";
import { Link } from "@reach/router";


  function Home({doctor }) {


      return (
          <div className="hwls-home">


              <div className="hwls-home-footer">
                 <a href={`/home/${id}`} className="hwls-btn hwls-btn-doctor">
                     See doctorlist
                 </a>
                 <Link to={`/home/${id}`} className="hwls-btn hwls-btn-doctor">
                     see doctorlist
                </Link>
              </div>
          </div>
      );
  }

  export default Home;