import background from './static/2416022.jpg';
import React from 'react';
import CurrentLocation from "./currentLocation.js";
import "./App.css";

const styles = {
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    minHeight: '100vh',
    position: 'relative', // Add position relative to allow absolute positioning of footer
 
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    color: 'white',
    
  },
};

function App() {
  return (
    <div style={styles.background}>
      <CurrentLocation />
    </div>
  );
}

export default App;
