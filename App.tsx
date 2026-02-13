import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trends from './components/About';
import CasinoList from './components/Projects';
import Footer from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-100 overflow-x-hidden selection:bg-accent-purple selection:text-white">
      <Header />
      <main>
        <Hero />
        <CasinoList />
        <Trends />
        <Footer />
      </main>
      <ChatWidget />
    </div>
  );
};

export default App;