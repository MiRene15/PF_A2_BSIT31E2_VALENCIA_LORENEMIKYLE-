import React from 'react';
import FeaturedColumns from './components/FeaturedColumns';
import HangingIcons from './components/HangingIcons';
import CustomCards from './components/CustomCards';
import IconGrid from './components/IconGrid';

function App() {
  return (
    <main>
      <FeaturedColumns/>
      <HangingIcons />
      <CustomCards />
      <IconGrid />
    </main>
  );
}

export default App;