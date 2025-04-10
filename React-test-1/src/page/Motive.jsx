import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export const Motive =()=>  {
    return (
      <div className="page">
        <Header />
        <Navbar />
        <div className="card-grid">
        <Card
            title="Lorem Ipsum 1"
            image="/psychiatry.png"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
          <Card
            title="Lorem Ipsum 2"
            image="/responsive.png"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
          <Card
            title="Lorem Ipsum 3"
            image="/search.png"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
          <Card
            title="Lorem Ipsum 4"
            image="partly_cloudy.png"
            description="Dolor sit amet, consetetur sadipscing elitr, sed diam" 
          />
        </div>
      </div>
    );
  }