import React from 'react'; 

function Body() {

    const [clicks, setClicks] = React.useState(0);

    return (
      <div className="app-container">
        <h1>Willkommen zu meinem Test</h1>
        <p>Du hast den Button {clicks} Mal geklickt.</p>
        <button onClick={() => setClicks(clicks + 1)}>
          Klick mich!
        </button>
      </div>
    );
  }
  
  export default Body; 