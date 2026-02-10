import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DeckViewer from './components/DeckViewer';
import WaitlistSection from './components/WaitlistSection';

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <Features />
        <DeckViewer />
        <WaitlistSection />
      </main>
      <footer className="py-10 border-t border-white/10 text-center text-zinc-500 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} P3 Lending Protocol. All rights reserved.</p>
        </div>
      </footer>
    </Layout>
  );
}

export default App;
