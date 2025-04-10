import React from "react";
import Card from "../components/Card";

function Picture() {
    return (
      <div className="page">
        <div className="card-grid">
          <Card
            title="Lorem Ipsum 1"
            //image="/produkt1.jpg"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
          <Card
            title="Lorem Ipsum 2"
            //image="/produkt2.jpg"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
          <Card
            title="Lorem Ipsum 3"
            //image="/produkt3.jpg"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
          <Card
            title="Lorem Ipsum 4"
            //image="/produkt4.jpg"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam" 
          />
        </div>
      </div>
    );
  }
  
  export default Picture; 