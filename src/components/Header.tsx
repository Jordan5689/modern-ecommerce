import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-indigo-600"
          >
            ShopNow
          </motion.h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Shop', 'Categories', 'About'].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="text-gray-600 hover:text-indigo-600"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-indigo-600"
          >
            <ShoppingCart />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-indigo-600"
          >
            <User />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-600 hover:text-indigo-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white py-2"
        >
          <nav className="flex flex-col space-y-2 px-4">
            {['Home', 'Shop', 'Categories', 'About'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-600 hover:text-indigo-600"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;