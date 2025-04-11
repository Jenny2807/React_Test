import React from 'react'; 

export const Header =()=> {
  return (
    <header className="page-header">
      <div className="header-text">
        <h1>Nebula </h1>
        <h3>Erkunde die faszinierenden Geheimnisse des Weltraums </h3>
      </div>
      <img
        src="/276020.png" // Oder dein eigenes Bild
        alt="React Logo"
        className="rotating-logo"
      />
    </header>
  );
}
export default Header
