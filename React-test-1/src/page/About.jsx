
import Card from "../components/Card";


function About() {
    return (
      <div className="page">
        <p>Hier erfährst du mehr.</p>
        <Card
            title="Lorem Ipsum 1"
            //image="/produkt1.jpg"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          />
            <Card
            title="Lorem Ipsum 2"
            //image="/produkt1.jpg"
            description=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          />
      </div>
    );
  }
  
  export default About;
  