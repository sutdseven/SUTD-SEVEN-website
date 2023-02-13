import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import TitleBanner from './components/titleBanner';
import About from './components/about';
import Contact from './components/contact';
import Exco from './components/exco';
import Events from './components/events';

function App() {

  return (
    <div className="App">
      <TitleBanner />
      <div className="content">
      <About />
      <Events />
      <Exco />
      <Contact />
      </div>
      
    </div>
  );
}

export default App;
