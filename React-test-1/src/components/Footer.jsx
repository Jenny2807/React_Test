import React from 'react'; 

function Footer() {
    return (
      <footer className="footer">
        <h4>Ist das hier das Ende der Seite? JA </h4>
        <p>Hier könnte Ihre Werbung stehen</p>
        <p>&copy; {new Date().getFullYear()} Meine super coole Website</p>
      </footer>
    );
  }
  
  export default Footer;