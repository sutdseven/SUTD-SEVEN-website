import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import TitleBanner from './components/titleBanner';
import About from './components/about';
import Contact from './components/contact';

function App() {

  return (
    <div className="App">
      <TitleBanner />
      <div className="content">
      <About />
      <Contact />
      
      <h2>Hello World</h2>
      <h2>Hello World</h2>
      <h2>Hello World</h2>
      <h2>Hello World</h2>
      <h2>Hello World</h2>
      <h2>Hello World</h2>
      <h2>Hello World</h2>
      <h2>Hello World</h2>
      </div>
      
    </div>
  );
}

export default App;
