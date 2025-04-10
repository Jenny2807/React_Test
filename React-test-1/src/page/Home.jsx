import {Header} from "../components/Header";
import Navbar from "../components/Navbar";
import TextImage from "../components/TextImage";


export const Home =()=> {
    return (
      <div className="page"> 
        <Header />
        <Navbar />
        <h2>Willkommen auf meiner Seite</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <TextImage
        title="Our Team"
        text="We are a diverse group of developers, designers, and project managers. Together, we work to bring our clients' visions to life in the best way possible."
        image="/_OLT4074_100dpi.jpg"
        altText="Our team"
        reverse={true}
      />
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <p>Hier ein frisches Meme</p>
        <img src="/cKq5TQ.gif" alt="Beispiel" className="home-image" />
      </div>
    );
  }

  