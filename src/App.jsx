import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <MainContent />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
