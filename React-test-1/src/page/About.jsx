
import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TextImage from "../components/TextImage";


export const About =()=>  {
    return (
      <div className="page">
        <Header />
        <Navbar />
        <p>Hier erfährst du mehr.</p>
        <TextImage
        title="Our Mission"
        text="We aim to create user-friendly web applications that simplify people's lives. Our team is passionate about providing the best possible user experience while using cutting-edge technologies."
        image="/path/to/your-image.jpg"
        altText="Team working"
      />
      <TextImage
        title="Our Team"
        text="We are a diverse group of developers, designers, and project managers. Together, we work to bring our clients' visions to life in the best way possible."
        image="/path/to/team-image.jpg"
        altText="Our team"
        reverse={true}
      />
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing</p>
            <Card
            title="Lorem Ipsum 2"
            //image="/produkt1.jpg"
            description=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          />
      </div>
    );
  }
  