
import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TextImage from "../components/TextImage";


export const About =()=>  {
    return (
      <div className="page">
        <Header />
        <Navbar />
        <TextImage
        title="Our Venus – Die heiße Schwester der Erde"
        text="Venus ist die heißeste der acht Planeten in unserem Sonnensystem. Ihre dichte Atmosphäre aus Kohlendioxid und Schwefelsäurewolken fängt die Wärme der Sonne ein und führt zu Temperaturen von über 460 Grad Celsius"
        image="/moon-1527501_1280.jpg"
        altText="Team working"
      />
      <TextImage
        title="Our Neptun – Der Windplanet"
        text="We are a Neptun, der äußerste der großen Planeten, ist bekannt für seine extremen Winde, die Geschwindigkeiten von mehr als 2.000 Kilometern pro Stunde erreichen können. Diese Winde sind die schnellsten im gesamten Sonnensystem.  group of developers, designers, and project managers. Together, we work to bring our clients' visions to life in the best way possible.Neptun ist auch der einzige Planet, den wir mit Teleskopen entdecken mussten, da er so weit entfernt ist, dass er mit bloßem Auge nicht sichtbar ist."
        image="/hurricane-92968_1280.jpg"
        altText="Our team"
        reverse={true}
      />
          <p className="py-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing</p>
            <Card
            title="Lorem Ipsum 2"
            //image="/produkt1.jpg"
            description=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          />
      </div>
    );
  }
  