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
      <div style={styles.footer}>
        
        <p className='footer'><b><a href="https://github.com/Balajithegr8" style={{ color: 'white' }}>Download Source Code</a></b> | Developed by <b><a href="https://www.linkedin.com/in/balaji-prakasam-7a77b822b/" style={{ color: 'white'  }}>Balaji</a></b> | Powered by HTML REACT</p>
      </div>
    </div>
  );
}

export default App;
