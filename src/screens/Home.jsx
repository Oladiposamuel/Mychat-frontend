import React from 'react'
import '../css/style.css';
import Header from '../components/Header';
import WhySection from '../components/WhySection';
import Navbar from '../components/Navbar';
import CheckSection from '../components/CheckSection';
import TradeSection from '../components/TradeSection';
import Features from '../components/Features';
import StartMining from '../components/StartMining';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <WhySection />
      <CheckSection />
      <TradeSection />
      <Features />
      <StartMining />
      <Footer />
    </div>
    
  )
}

export default Home