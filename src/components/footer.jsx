import React from "react";

function Footers(){
    const currentYear = new Date().getFullYear();
    
    return (
      <footer>
        <p> copyright © {currentYear} </p>
      </footer>
    );
}

export default Footers;