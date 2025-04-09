import React from "react";
import Card from "../components/Card";

function Motive() {
    return (
      <div className="page">
        <div className="card-grid">
        <Card
            title="Lorem Ipsum 1"
            image="/200w.gif"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
          <Card
            title="Lorem Ipsum 2"
            image="/cat-meme.gif"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
          <Card
            title="Lorem Ipsum 3"
            image="/bumble-bee-sus.gif"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
          <Card
            title="Lorem Ipsum 4"
            image="/shrek-rizz-shrek-meme.gif"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam" 
          />
        </div>
      </div>
    );
  }
  
  export default Motive;