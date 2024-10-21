import React from 'react';
import { Toaster } from 'react-hot-toast';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import DeliveryProcess from './components/DeliveryProcess';
import SpecialOffer from './components/SpecialOffer';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#f3f4f6', '#e5e7eb', '#d1d5db']
  );

  return (
    <motion.div
      style={{ backgroundColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Toaster position="top-right" />
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <DeliveryProcess />
        <SpecialOffer />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;