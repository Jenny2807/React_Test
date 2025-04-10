import React from 'react'; 

export const Header =()=> {
  return (
    <header className="page-header">
      <div className="header-text">
        <h1>Test Test!</h1>
        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing </h3>
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
