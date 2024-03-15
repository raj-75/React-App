import React from "react";

function Footer() {
  var currDate = new Date();
 var currYear = currDate.getFullYear();
    return (
     <>
     <div>Copy Right @{currYear}</div>
     </>
    );
  }
  
  export default Footer;