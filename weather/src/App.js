import background from './static/2416022.jpg';
import React from 'react';
import CurrentLocation from "./currentLocation.js";

const styles = {
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    minHeight: '100vh', // Ensures the background covers the whole window height
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
