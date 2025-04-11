import {Header} from "../components/Header";
import Navbar from "../components/Navbar";
import { useState } from "react";
import TextImage from "../components/TextImage";


const slides = [
  {
    title: "Das Weltall",
    text: "Das Universum ist unvorstellbar groß und voll von unerforschten Mysterien. Es enthält unzählige Galaxien, Sterne und Planeten, von denen viele weit entfernt sind. Die Entfernungen im All sind so groß, dass wir sie in Lichtjahren messen – die Distanz, die Licht in einem Jahr zurücklegt. Trotz aller Fortschritte in der Raumfahrt und Astronomie haben wir nur einen Bruchteil des Universums erforscht. Es bleibt ein unerreichter Ort voller Fragen, der uns immer wieder staunen lässt. Wer weiß, was wir noch entdecken werden?",
    image: "/rocket-launch-67646_1280.jpg",
  },
  {
    title: "Der Mond – Unser ständiger Begleiter",
    text: "Der Mond ist der einzige natürliche Satellit der Erde und übt einen großen Einfluss auf unseren Planeten aus. Er beeinflusst die Gezeiten, hilft bei der Stabilisierung der Erdachse und hat sogar eine Rolle in der Entwicklung des Lebens auf der Erde gespielt. Der Mond ist etwa ein viertel so groß wie die Erde und seine Oberfläche ist von Kratern und Ebenen geprägt, die durch Millionen Jahre von Einschlägen entstanden sind. Der Mond bleibt für uns ein faszinierendes Ziel der Erforschung, und es gibt immer mehr Bestrebungen, wieder Menschen dorthin zu schicken.",
    image: "/earth-3391040_1280.jpg",
  },
  {
    title: "Asteroiden und Meteoriten – Die Himmelswanderer",
    text: "Hier könntest du Cards, Asteroiden und Meteoriten sind Felsen und Trümmer, die durch das Sonnensystem fliegen. Asteroiden sind große, felsige Objekte, die vor allem im Asteroidengürtel zwischen Mars und Jupiter zu finden sind. Meteoriten sind kleinere Stücke, die durch die Erdatmosphäre dringen und oft als „Sternschnuppen“ am Nachthimmel sichtbar sind, wenn sie verglühen. Während sie meist harmlos sind, können große Asteroiden katastrophale Auswirkungen haben, wie der Einschlag, der wahrscheinlich das Aussterben der Dinosaurier verursachte. oder andere Komponenten zeigen.",
    image: "/cosmos-1853491_1280.jpg",
  },
];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <Navbar />

      <div className="relative w-full max-w-5xl overflow-hidden mt-8">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full px-6"
            >
              <div className="bg-[#869fb7] rounded-2xl shadow-lg p-8 text-center">
                <h2 className="text-white text-3xl font-bold mb-4">{slide.title}</h2>
                <img src={slide.image} alt={slide.title} className="mt-4 rounded-lg shadow-md w-120 h-80 object-contain mx-auto" />
                <p className="text-[#0b1c29] text-lg py-4">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pfeile */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white shadow-md rounded-full px-3 py-2 text-xl"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white shadow-md rounded-full px-3 py-2 text-xl"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

  