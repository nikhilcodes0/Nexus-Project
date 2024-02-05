import React from 'react';
import Sidebar from '../components/Sidebar';

import "../Style/homepage.css"
import ill1 from "../components/assets/ill1.svg"

function Homepage() {
  return (
    <>
        <Sidebar />
        <div className="mainhome">
            <div className="header">
                <div className="caption"></div>
                <div className="illustration">
                    <img src={ill1} alt="" />
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Homepage